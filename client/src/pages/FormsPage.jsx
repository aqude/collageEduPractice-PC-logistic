import forms from "../assets/forms.css";
function formsPage() {
    return (
        <div className="forms__page">

          <form className="forms__inputs">
               <h1 className="forms__header">Закупочный лист</h1>
              <input className="forms__input" name="Дата поступления" type="text" placeholder="Введите дату поступления..."/>
                <input className="forms__input" name="Комплектующие" type="text" placeholder="Введите комплектующие..."/>
                <input className="forms__input" name="Номер документа" type="text" placeholder="Введите номер документа..."/>
                <input className="forms__input" name="Поставщик" type="text" placeholder="Введите поставщика..."/>
                <input className="forms__input" name="Тип комплектующего устройства" type="text" placeholder="Введите тип комплектующего устройства..."/>
                <input className="forms__input" name="Производитель" type="text" placeholder="Введите производителя..."/>
              <input className="forms__input" name="Модель" type="text" placeholder="Введите модель..."/>
            <button className="forms__button">Создать</button>

          </form>
        </div>
    )
}

export default formsPage