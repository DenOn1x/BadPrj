import React, {useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import {fetchOneDevice, writeValue} from "../http/deviceAPI";

const Arent = () => {
    const {id} = useParams()
    const [device, setDevice] = useState({info: []})
    useEffect(() => {
        fetchOneDevice(Number(id)).then(data => setDevice(data))
    }, [])
    const isActive =() =>{
        if(device.isArent === 'false'){
            writeValue(Number(id),'true').then((res)=>console.log(res))
            document.querySelector('.buttonArent').innerText = 'Снять с блокировки'
        }else {
            writeValue(Number(id),'false').then((res)=>console.log(res))
            document.querySelector('.buttonArent').innerText = 'Забронировать'

        }
    };
    return (
        <>
            <button className="buttonArent" onClick={isActive}>
                {
                    device.isArent === 'false' ? <h2>Забронировать</h2> : <h2>Снять с блокировки</h2>
                }
            </button>
        </>
    );
};

export default Arent;