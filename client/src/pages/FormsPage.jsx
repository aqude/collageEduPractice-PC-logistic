import forms from "../assets/forms.css";
import React from 'react'
import {useState} from "react";

function formsPage() {
    const [data, setData] = useState('');
    const [component, setComponent] = useState('');
    const [document, setDocument] = useState('');
    const [produser, setProduser] = useState('');
    const [type_of_component_device, setType_of_component_device] = useState('');
    const [fabricator, setFabricator] = useState('');
    const [model, setModel] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    const [dateDirty, setDateDirty] = useState(false);
    const [componentDirty, setComponentDirty] = useState(false);
    const [documentDirty, setDocumentDirty] = useState(false);
    const [produserDirty, setProduserDirty] = useState(false);
    const [type_of_component_deviceDirty, setType_of_component_deviceDirty] = useState(false);
    const [fabricatorDirty, setFabricatorDirty] = useState(false);
    const [modelDirty, setModelDirty] = useState(false);
    const [quantityDirty, setQuantityDirty] = useState(false);
    const [priceDirty, setPriceDirty] = useState(false);

    const [dateError, setDateError] = useState('Поле не может быть пустым');
    const [componentError, setComponentError] = useState('Поле не может быть пустым');
    const [documentError, setDocumentError] = useState('Поле не может быть пустым');
    const [produserError, setProduserError] = useState('Поле не может быть пустым');
    const [type_of_component_deviceError, setType_of_component_deviceError] = useState('Поле не может быть пустым');
    const [fabricatorError, setFabricatorError] = useState('Поле не может быть пустым');
    const [modelError, setModelError] = useState('Поле не может быть пустым');
    const [quantityError, setQuantityError] = useState('Поле не может быть пустым');
    const [priceError, setPriceError] = useState('Поле не может быть пустым');


    const DataHendler = (e) => {
        setData(e.target.value);
        if (e.target.value.length < 1) {
            setDateError('Поле не может быть пустым');
            if (!e.target.value) {
                setDateDirty(true);
            }
        } else {
            setDateError('');
        }
    }

    const ComponentHendler = (e) => {
        setComponent(e.target.value);
        if (e.target.value.length < 1) {
            setComponentError('Поле не может быть пустым');
            if (!e.target.value) {
                setComponentDirty(true);
            }
        } else {
            setComponentError('');
        }
    }

    const DocumentHendler = (e) => {
        setDocument(e.target.value);
        if (e.target.value.length < 1) {
            setDocumentError('Поле не может быть пустым');
            if (!e.target.value) {
                setDocumentDirty(true);
            }
        } else {
            setDocumentError('');
        }
    }
    const ProduserHendler = (e) => {
        setProduser(e.target.value);
        if (e.target.value.length < 1) {
            setProduserError('Поле не может быть пустым');
            if (!e.target.value) {
                setProduserDirty(true);
            }
        } else {
            setProduserError('');
        }
    }

    const Type_of_component_deviceHendler = (e) => {
        setType_of_component_device(e.target.value);
        if (e.target.value.length < 1) {
            setType_of_component_deviceError('Поле не может быть пустым');
            if (!e.target.value) {
                setType_of_component_deviceDirty(true);
            }
        } else {
            setType_of_component_deviceError('');
        }
    }

    const FabricatorHendler = (e) => {
        setFabricator(e.target.value);
        if (e.target.value.length < 1) {
            setFabricatorError('Поле не может быть пустым');
            if (!e.target.value) {
                setFabricatorDirty(true);
            }
        } else {
            setFabricatorError('');
        }
    }

    const ModelHendler = (e) => {
        setModel(e.target.value);
        if (e.target.value.length < 1) {
            setModelError('Поле не может быть пустым');
            if (!e.target.value) {
                setModelDirty(true);
            }
        } else {
            setModelError('');
        }
    }

    const QuantityHendler = (e) => {
        setQuantity(e.target.value);
        if (e.target.value.length < 1) {
            setQuantityError('Поле не может быть пустым');
            if (!e.target.value) {
                setQuantityDirty(true);
            }
        } else {
            setQuantityError('');
        }
    }

    const PriceHendler = (e) => {
        setPrice(e.target.value);
        if (e.target.value.length < 1) {
            setPriceError('Поле не может быть пустым');
            if (!e.target.value) {
                setPriceDirty(true);
            }
        } else {
            setPriceError('');
        }
    }

    const  BlurHendler = (e) => {
        switch (e.target.name) {
            case 'delivery_date':
                setDateDirty(true);
                break;
            case 'components':
                setComponentDirty(true);
                break;
            case 'document_number':
                setDocumentDirty(true);
                break;
            case 'producer':
                setProduserDirty(true);
                break;
            case 'Type_of_component_device':
                setType_of_component_deviceDirty(true);
                break;
            case 'fabricator':
                setFabricatorDirty(true);
                break;
            case 'Model':
                setModelDirty(true);
                break;
            case 'quantity':
                setQuantityDirty(true);
                break;
            case 'price':
                setPriceDirty(true);
                break;
        }
    }



    return (
        <div className="forms__page">
          <form className="forms__inputs">
                <h1 className="forms__header">Закупочный лист</h1>
                {(dateDirty && dateError) && <div style={{color: 'red', fontSize: '15px'}}>{dateError}</div>}
                <input onChange={e => DataHendler(e)} onBlur={e => BlurHendler(e)} className="forms__input" name="delivery_date" type="date" placeholder="Введите дату поступления..."/>
                {(componentDirty && componentError) && <div style={{color: 'red', fontSize: '15px'}}>{componentError}</div>}
                <input onChange={e => ComponentHendler(e)} onBlur={e => BlurHendler(e)} className="forms__input" name="components" type="text" placeholder="Введите комплектующие..."/>
                {(documentDirty && documentError) && <div style={{color: 'red', fontSize: '15px'}}>{documentError}</div>}
                <input onChange={e =>  DocumentHendler(e)} onBlur={e => BlurHendler(e)} className="forms__input" name="document_number" type="number" placeholder="Введите номер документа..."/>
                {(produserDirty && produserError) && <div style={{color: 'red', fontSize: '15px'}}>{produserError}</div>}
                <input onChange={e =>  PriceHendler(e)} onBlur={e => BlurHendler(e)} className="forms__input" name="producer" type="text" placeholder="Введите поставщика..."/>
                {(type_of_component_deviceDirty && type_of_component_deviceError) && <div style={{color: 'red', fontSize: '15px'}}>{type_of_component_deviceError}</div>}
                <input onChange={e =>  Type_of_component_deviceHendler(e)} onBlur={e => BlurHendler(e)} className="forms__input" name="Type_of_component_device" type="text" placeholder="Введите тип комплектующего устройства..."/>
                {(fabricatorDirty && fabricatorError) && <div style={{color: 'red', fontSize: '15px'}}>{fabricatorError}</div>}
                <input onChange={e =>  FabricatorHendler(e)} onBlur={e => BlurHendler(e)} className="forms__input" name="fabricator" type="text" placeholder="Введите производителя..."/>
                {(modelDirty && modelError) && <div style={{color: 'red', fontSize: '15px'}}>{modelError}</div>}
                <input onChange={e =>  ModelHendler(e)} onBlur={e => BlurHendler(e)} className="forms__input" name="Model" type="text" placeholder="Введите модель..."/>
                {(quantityDirty && quantityError) && <div style={{color: 'red', fontSize: '15px'}}>{quantityError}</div>}
                <input onChange={e =>  QuantityHendler(e)} onBlur={e => BlurHendler(e)} className="forms__input" name="quantity" type="number" placeholder="Введите количество..."/>
                {(priceDirty && priceError) && <div style={{color: 'red', fontSize: '15px'}}>{priceError}</div>}
                <input onChange={e =>  PriceHendler(e)} onBlur={e => BlurHendler(e)} className="forms__input" name="price" type="number" placeholder="Введите цену..."/>
                <button onBlur={e => BlurHendler(e)} className="forms__button">Создать</button>
          </form>
        </div>
    )
}

export default formsPage