import type { JSX } from "react";
import { useState } from "react";
import "./AddClientForm.css"

export default function AddClientForm(): JSX.Element {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [details, setDetails] = useState("");
    const [signupDate, setSignupDate] = useState(
        new Date().toISOString().split("T")[0]
    );

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch("http://localhost:9090/api/clients", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                address,
                details,
                signupDate
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            alert("Ошибка при добавлении клиента");
            console.error(errorData);
            return;
        }

        alert("Клиент успешно добавлен");
        window.location.reload(); // опционально: обновление страницы
    };

    return (
        <form onSubmit={handleSubmit} className="add-client-form">
            <h3>Добавить клиента</h3>
            <div className="form-elems">
                <div className="form-group">
                    <label>Имя клиента:</label>
                    <input
                        type="text"
                        placeholder="Имя клиента"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Адрес клиента:</label>
                    <input
                        type="text"
                        placeholder="Адрес клиента"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Детали (тип клиента, комментарии):</label>
                    <textarea
                        placeholder="Например: юридическое лицо, постоянный клиент"
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Дата регистрации:</label>
                    <input
                        type="date"
                        value={signupDate}
                        onChange={(e) => setSignupDate(e.target.value)}
                        max={new Date().toISOString().split("T")[0]}
                    />
                </div>

                <button type="submit">Добавить клиента</button>
            </div>
        </form>
    );
}