// src/features/Clients/components/AddClientToTariffForm.tsx
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./addClientToTariffForm.css"

function AddClientToTariffForm({ serviceType }: { serviceType: string }) {
    const navigate = useNavigate();
    const [clientId, setClientId] = useState('');
    const [tariffId, setTariffId] = useState('');
    const [debt, setDebt] = useState('0');
    const [expirationDate, setExpirationDate] = useState(
        new Date().toISOString().split("T")[0]
    );

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = {
            clientId: parseInt(clientId),
            tariffId: parseInt(tariffId),
            debt: parseFloat(debt),
            expirationDate,
        };

        try {
            const response = await fetch(`http://localhost:9090/api/contracts/${serviceType}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Не удалось создать договор');
            }

            alert('Клиент успешно привязан к тарифу');
            
            // Перенаправляем на страницу тарифов
            navigate(`/${serviceType}/tariffs`);

        } catch (error) {
            console.error(error);
            alert('Ошибка при создании договора');
        }
    };

    console.log(serviceType)
    return (
        <form onSubmit={handleSubmit} className="add-contract-form">
            <h3>Добавить клиента к тарифу ({serviceType})</h3>
            <div className='add-contract-group'>
                <div className='add-contract'>
                    <label>
                        ID клиента:
                        <input
                            type="number"
                            value={clientId}
                            onChange={(e) => setClientId(e.target.value)}
                            required
                        />
                    </label>
                </div>

                <div className='add-contract'>
                    <label>
                        ID тарифа:
                        <input
                            type="number"
                            value={tariffId}
                            onChange={(e) => setTariffId(e.target.value)}
                            required
                        />
                    </label>
                </div>

                <div className='add-contract'>
                    <label>
                        Задолженность:
                        <input
                            type="number"
                            step="0.01"
                            min="0"
                            value={debt}
                            onChange={(e) => setDebt(e.target.value)}
                            required
                        />
                    </label>
                </div>

                <div className='add-contract'>
                    <label>
                        Дата окончания:
                        <input
                            type="date"
                            value={expirationDate}
                            onChange={(e) => setExpirationDate(e.target.value)}
                            min={new Date().toISOString().split("T")[0]}
                        />
                    </label>
                </div>

                <button type="submit">Привязать клиента к тарифу</button>
            </div>
        </form>
    );
}

export default function AddContractPage() {
    const { serviceType } = useParams(); // получаем тип услуги из URL

    return (
        <div className="page">
            <h2>Создание договора</h2>
            <AddClientToTariffForm serviceType={serviceType || "internet"} />
        </div>
    );
}