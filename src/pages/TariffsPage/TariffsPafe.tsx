import {useEffect, useState} from "react";
import Header from "../../widgets/Header/Header.tsx"
import Tariffs from "../../features/Tariffs/Tariffs.tsx"
import AddTariffForm from "../../features/Tariffs/AddTariffForm.tsx";
import headerData from "../../mockData/tariffs_header.ts"
import type { TariffListResponse } from "../../features/Tariffs/tariffs.ts";
import { fetchTariffList } from "../../services/tariffService.ts";

function TariffesPage() {
    const [tariffList, setTariffList] = useState<TariffListResponse | null>(null);
    const path = window.location.pathname;
    const serviceType = path.split("/")[1]; // internet или telephony

    useEffect(() => {
        const loadTariffs = async () => {
            try {
                const data = await fetchTariffList(serviceType);
                setTariffList(data);
            } catch (error) {
                console.error('Не удалось загрузить тарифы', error);
            }
        };
        loadTariffs();
    }, [serviceType]);

    const handleTariffAdded = async () => {
        const updated = await fetchTariffList(serviceType);
        setTariffList(updated);
    };

    if (!tariffList) return <div>Загрузка...</div>;

    return (
        <>
            <Header {...headerData} />
            <AddTariffForm serviceType={serviceType} onTariffAdded={handleTariffAdded} />
            <Tariffs {...tariffList} />
        </>
    );
}
 
export default TariffesPage