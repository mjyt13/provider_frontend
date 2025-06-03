import Header from "../../widgets/Header/Header.tsx";
import AddClientToTariffForm from "../../features/Clients/addClientToTariff/addClientToTariffForm.tsx";
import TariffAndClientList from '../../features/Clients/TariffAndClientList.tsx';
import headerData from "../../mockData/add_contract_header.ts";


function AddContractPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceType = urlParams.get("serviceType") || "internet";

    return (
        <>
            <Header {...headerData} />
            <div className="add-contract-page">
                <h2>Добавить клиента к тарифу</h2>
                <p>Выберите ID клиента и тарифа, чтобы заключить договор.</p>
                <AddClientToTariffForm serviceType={serviceType} />
                <TariffAndClientList serviceType={serviceType}/>
            </div>
        </>
    );
}

export default AddContractPage;