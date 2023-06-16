import React from 'react'
import '../style/table1form.css'
import Data1 from '../../JSON/table1.json'
import { useState } from 'react'

const table1form = () => {

    const [startDate, setStartDate] = useState()
    const [startTime, setStartTime] = useState()
    const [finishDate, setFinisDate] = useState()
    const [finishTime, setFinishTime] = useState()
    const [status, SetStatus] = useState()
    const [stop, setStop] = useState()


    const veriEkle = (e) => {
        console.log(Data1.uretimOperasyonBild.length);
        Data1.uretimOperasyonBild.push(
            {
                kayit_no: Data1.uretimOperasyonBild.length + 1,
                baslangic: startTime,
                bitis: finishTime,
                Status: status,
                DuruşNedeni: stop
            }
        )
        e.preventDefault();
    }


    return (
        <div className='table1form'>

            <form action="submit">
                <div className='input-container'>
                    <label htmlFor="">Baslangic tarih/saat</label>
                    <input type="date" onChange={e => setStartDate(e.target.value)} />
                    <input type="time" onChange={e => setStartTime(e.target.value)} />
                </div>
                <div className='input-container'>
                    <label htmlFor="">Bitis Tarih/Saati</label>
                    <input type="date" onChange={e => setFinisDate(e.target.value)} />
                    <input type="time" onChange={e => setFinishTime(e.target.value)} />
                </div>
                <div className='input container'>
                    <input type="text" value="Statü Giriniz" onChange={e => SetStatus(e.target.value)} />
                    <input type="text" value="Duruş Nedeni Giriniz" onChange={e => setStop(e.target.value)} />
                </div>
                <button type='submit' onClick={veriEkle}>
                    Verileri Ekle
                </button>
            </form>
        </div>
    )
}

export default table1form
