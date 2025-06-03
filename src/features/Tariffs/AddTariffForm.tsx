import React, { useState } from 'react';
import type { TariffFormValues } from './tariffs.ts';
import './AddTariffForm.css';

interface AddTariffFormProps {
    serviceType: string;
    onTariffAdded: () => void; // вызывается после успешного добавления
}

export default function AddTariffForm({ serviceType, onTariffAdded }: AddTariffFormProps) {
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formValues: TariffFormValues = {
            name,
            cost: parseFloat(cost),
            description,
        };

        try {
            const response = await fetch(`http://localhost:9090/api/${serviceType}/tariffs`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formValues)
            });

            if (!response.ok) {
                throw new Error('Не удалось создать тариф');
            }

            alert('Тариф успешно создан');

            setName('');
            setCost('');
            setDescription('');
            onTariffAdded(); // триггерит обновление данных

        } catch (error) {
            console.error(error);
            alert('Ошибка при создании тарифа');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-tariff-form">
            <h3>Создать новый тариф</h3>
            <ul className='add-tariff-fields'>
            <label className='add-tariff-field'>
                Название:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className='tariff-inline'
                />
            </label>

            <label className='add-tariff-field'>
                Стоимость:
                <input
                    type="number"
                    step="0.01"
                    min="0"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                    required
                    className='tariff-inline'
                />
            </label>

            <label className='add-tariff-field'>
                Описание:
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className='tariff-inline'
                />
            </label>

            <button type="submit">Добавить тариф</button>
            </ul>
        </form>
    );
}