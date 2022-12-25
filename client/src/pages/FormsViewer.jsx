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
                        <th>Дата</th>
                        <th >Номер документа</th>
                        <th >Производитель</th>
                        <th >Тип комплектующего</th>
                        <th >Фабрикант</th>
                        <th >Модель</th>
                        <th >Количество</th>
                        <th >Цена</th>
                    </tr>
                </thead>
                <tbody>
                    {forms.map((form) => (
                        <tr>
                            <td>{form.data}</td>
                            <td>{form.document_number}</td>
                            <td>{form.producer}</td>
                            <td>{form.Type_of_component_device}</td>
                            <td>{form.fabricator}</td>
                            <td>{form.Model}</td>
                            <td>{form.quantity}</td>
                            <td>{form.price}</td>
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
