import { useEffect, useState } from "react";
import type { TariffOption, ClientOption } from "../../types/options";
import { fetchTariffsByType, fetchAllClients } from "../../services/optionService";

interface TariffAndClientListProps {
    serviceType: string;
}

export default function TariffAndClientList({ serviceType }: TariffAndClientListProps) {
    const [tariffs, setTariffs] = useState<TariffOption[]>([]);
    const [clients, setClients] = useState<ClientOption[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const tariffsData = await fetchTariffsByType(serviceType);
                const clientsData = await fetchAllClients();

                setTariffs(tariffsData);
                setClients(clientsData);
            } catch (err) {
                console.error(err);
                setError("Ошибка при загрузке данных");
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [serviceType]);

    if (loading) {
        return <p>Загрузка...</p>;
    }

    if (error) {
        return <p className="error">{error}</p>;
    }

    return (
        <div className="options-list">
            <section className="tariff-options">
                <h3>Доступные тарифы ({serviceType})</h3>
                <ul>
                    {tariffs.map(t => (
                        <li key={t.id} className="tariff-item">
                            <strong>ID:</strong> {t.id},&nbsp;
                            <strong>{t.name}</strong>,&nbsp;
                            <em>{t.cost} тугриков</em>,&nbsp;
                            <small>Клиентов: {t.clientCount}</small>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="client-options">
                <h3>Все клиенты провайдера</h3>
                <ul>
                    {clients.map(c => (
                        <li key={c.id} className="client-item">
                            <strong>ID:</strong> {c.id},&nbsp;
                            <strong>{c.name}</strong>,&nbsp;
                            <small>{c.address}</small>,&nbsp;
                            <em>Дата регистрации: {c.signupDate.split("T")[0]}</em>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}