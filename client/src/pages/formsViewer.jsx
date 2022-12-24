import {db} from "../firebase.jsx";
import {collection, getDocs, doc, deleteDoc} from "firebase/firestore";
import {useEffect, useState} from "react";
import "../assets/formsViewer.css";


function formsViewer() {
    const [forms, setForms] = useState([]);
    useEffect(() => {
        // вернуть с id документа
        getDocs(collection(db, "forms")).then((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push({...doc.data(), id: doc.id});
            });
            setForms(items);
        } );
    } , []);
    // удаление данных
    const deleteData = (id) => {
        alert("Данные успешно удалены " + id);
        deleteDoc(doc(db, "forms", id));
        setForms(forms.filter((item) => item.id !== id));
    }


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
                            <td className="td_btn">
                                <button className="btn" onClick={() => deleteData(form.id)}>Удалить</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default formsViewer;
