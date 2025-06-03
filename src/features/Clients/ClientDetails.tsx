import type { ClientDetailsDto } from "../../types/client";

import Back from "../../shared/components/Back/Back";
import { Link } from "react-router";

import "./ClientDetails.css"

interface ClientDetailsProps {
    client: ClientDetailsDto;
    serviceType: string;
}

function ClientDetails({ client, serviceType }: ClientDetailsProps) {
    const handleDelete = async () => {
        if (!window.confirm("Вы уверены, что хотите удалить клиента из базы?")) return;

        try {
            const response = await fetch(`http://localhost:9090/api/clients/${client.id}`, {
                method: "DELETE"
            });

            if (response.ok) {
                alert("Клиент успешно удален из базы");
                window.location.href = `/${serviceType}/tariffs`;
            } else {
                alert("Не удалось удалить клиента из базы");
            }
        } catch (err) {
            console.error("Ошибка при удалении клиента из базы", err);
            alert("Произошла ошибка при удалении");
        }
    };

    return (
        <div className="client-details">
            <ul className="client-info">
                <p><strong>ID:</strong> {client.id}</p>
                <p><strong>Имя:</strong> {client.name}</p>
                <p><strong>Адрес:</strong> {client.address}</p>
                <p><strong>Описание:</strong> {client.details}</p>
                <p><strong>Дата регистрации:</strong> {client.signupDate}</p>
                <p><strong>Общая задолженность:</strong> {client.totalDebt} тугриков</p>
            </ul>

            <div className="client-actions">
                <Link to={`/${serviceType}/tariffs`}>
                    <Back href={`/${serviceType}/tariffs`} />
                </Link>
                <button onClick={handleDelete} className="client-delete">удалить клиента</button>
            </div>
        </div>
    );
}

export default ClientDetails;