import {db} from "../firebase.jsx";
import {collection, getDocs} from "firebase/firestore";
import {useEffect, useState} from "react";
import "../assets/formsViewer.css";

function formsViewer() {
    const [forms, setForms] = useState([]);
    useEffect(() => {
        getDocs(collection(db, "forms")).then((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setForms(items);
        });
    } , []);
    return (
        <div>
            <h1 style={{textAlign: "center", marginBottom: 20}}>Закупочные товары</h1>
            <table>
                <thead>
                    <tr className="th_header">
                        <th className="th_el">Комплектующие</th>
                        <th className="th_el">Номер документа</th>
                        <th className="th_el">Производитель</th>
                        <th className="th_el">Тип комплектующего</th>
                        <th className="th_el">Фабрикант</th>
                        <th className="th_el">Модель</th>
                        <th className="th_el">Количество</th>
                        <th className="th_el">Цена</th>
                    </tr>
                </thead>
                <tbody>
                    {forms.map((form) => (
                        <tr>
                            <td className="">{form.component}</td>
                            <td className="">{form.document_number}</td>
                            <td className="">{form.producer}</td>
                            <td className="">{form.Type_of_component_device}</td>
                            <td className="">{form.fabricator}</td>
                            <td className="">{form.Model}</td>
                            <td className="">{form.quantity}</td>
                            <td className="">{form.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default formsViewer;