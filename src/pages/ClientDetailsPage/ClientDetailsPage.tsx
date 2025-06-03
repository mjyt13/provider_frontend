import ClientDetails from "../../features/Clients/ClientDetails";
import { useParams } from 'react-router-dom';
import { useEffect,useState } from "react";
import type { ClientDetailsDto } from "../../types/client";

function ClientDetailsPage() {
    const { id, serviceType } = useParams(); // например, /internet/clients/:id
    const [client, setClient] = useState<ClientDetailsDto | null>(null);

    useEffect(() => {
        if (!id) return;

        fetch(`http://localhost:9090/api/clients/${id}`)
            .then(res => res.json())
            .then(data => setClient(data));
    }, [id]);

    if (!client) return <p>Загрузка данных...</p>;

    return <ClientDetails client={client} serviceType={serviceType || 'internet'} />;
}

export default ClientDetailsPage;