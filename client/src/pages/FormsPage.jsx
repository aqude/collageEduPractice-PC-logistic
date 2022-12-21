import register from "../assets/forms.css";
import { useForm } from "react-hook-form";
import React from "react";
import {db} from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
function formsPage() {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });
  const onSummit = (data) => {
    console.log(data);
    addDoc(collection(db, "forms"), {
      component: data.component,
      document_number: data.document_number,
      producer: data.producer,
      Type_of_component_device: data.Type_of_component_device,
      fabricator: data.fabricator,
      Model: data.Model,
      quantity: data.quantity,
      price: data.price,
    }).then(() => {
        alert("Данные успешно добавлены");
        reset();
    });
  };


  return (
    <div className="forms__page">
      <form onSubmit={handleSubmit(onSummit)} className="forms__inputs">
        <h1 className="forms__header">Закупочный лист</h1>

        <input
          {...register("component", {
            required: "Поле обязательно к заполнению",
          })}
          className="forms__input"
          type="text"
          placeholder="Введите комплектующие..."
        />
        <div style={{ height: 25 }}>
          {errors.component && (
            <div style={{ color: "red", fontSize: "15px" }}>
              {errors.component.message}
            </div>
          )}
        </div>
        <input
          {...register("document_number", {
            required: "Поле обязательно к заполнению",
          })}
          className="forms__input"
          name="document_number"
          type="number"
          placeholder="Введите номер документа..."
        />
        <div style={{ height: 25 }}>
          {errors.document_number && (
            <div style={{ color: "red", fontSize: "15px" }}>
              {errors.document_number.message}
            </div>
          )}
        </div>
        <input
          {...register("producer", {
            required: "Поле обязательно к заполнению",
          })}
          className="forms__input"
          name="producer"
          type="text"
          placeholder="Введите поставщика..."
        />
        <div style={{ height: 25 }}>
          {errors.producer && (
            <div style={{ color: "red", fontSize: "15px" }}>
              {errors.producer.message}
            </div>
          )}
        </div>
        <input
          {...register("Type_of_component_device", {
            required: "Поле обязательно к заполнению",
          })}
          className="forms__input"
          name="Type_of_component_device"
          type="text"
          placeholder="Введите тип комплектующего устройства..."
        />
        <div style={{ height: 25 }}>
          {errors.Type_of_component_device && (
            <div style={{ color: "red", fontSize: "15px" }}>
              {errors.Type_of_component_device.message}
            </div>
          )}
        </div>
        <input
          {...register("fabricator", {
            required: "Поле обязательно к заполнению",
          })}
          className="forms__input"
          name="fabricator"
          type="text"
          placeholder="Введите производителя..."
        />
        <div style={{ height: 25 }}>
          {errors.fabricator && (
            <div style={{ color: "red", fontSize: "15px" }}>
              {errors.fabricator.message}
            </div>
          )}
        </div>
        <input
          {...register("Model", { required: "Поле обязательно к заполнению" })}
          className="forms__input"
          name="Model"
          type="text"
          placeholder="Введите модель..."
        />
        <div style={{ height: 25 }}>
          {errors.Model && (
            <div style={{ color: "red", fontSize: "15px" }}>
              {errors.Model.message}
            </div>
          )}
        </div>
        <input
          {...register("quantity", {
            required: "Поле обязательно к заполнению",
          })}
          className="forms__input"
          name="quantity"
          type="number"
          placeholder="Введите количество..."
        />
        <div style={{ height: 25 }}>
          {errors.quantity && (
            <div style={{ color: "red", fontSize: "15px" }}>
              {errors.quantity.message}
            </div>
          )}
        </div>
        <input
          {...register("price", { required: "Поле обязательно к заполнению" })}
          className="forms__input"
          name="price"
          type="number"
          placeholder="Введите цену..."
        />
        <div style={{ height: 25 }}>
          {errors.price && (
            <div style={{ color: "red", fontSize: "15px" }}>
              {errors.price.message}
            </div>
          )}
        </div>
        <input className="forms__button" type="submit" />
      </form>
    </div>
  );
}

export default formsPage;
