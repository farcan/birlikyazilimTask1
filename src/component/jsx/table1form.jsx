import React from 'react'
import '../style/table1form.css'
import { useState, useEffect } from 'react'


const table1form = ({ guncelle }) => {

    const [startDate, setStartDate] = useState()
    const [startTime, setStartTime] = useState()
    const [finishDate, setFinisDate] = useState()
    const [finishTime, setFinishTime] = useState()
    const [status, SetStatus] = useState()
    const [stop, setStop] = useState()

    const veriEkle = (e) => {
        e.preventDefault();
        guncelle({
            kayit_no: "0",
            baslangic: startDate,
            bitis: finishDate,
            Status: status,
            DuruşNedeni: ""
        })


    }


    return (
        <div className='table1form'>

            <form action="submit">
                <div className='input-container'>
                    <label htmlFor="">Baslangic tarih/saat</label>
                    <input type="datetime-local" onChange={e => setStartDate(e.target.value)} />

                </div>
                <div className='input-container'>
                    <label htmlFor="">Bitis Tarih/Saati</label>
                    <input type="datetime-local" onChange={e => setFinisDate(e.target.value)} />

                </div>
                <div className='input container'>
                    <label htmlFor="">Status :</label>
                    <input type="text" onChange={e => SetStatus(e.target.value)} />
                </div>
                <button type='button' onClick={veriEkle}>
                    Verileri Ekle
                </button>
            </form>
        </div>
    )
}


export default table1form
