import { useState, useEffect, useContext } from 'react'
import './App.css'
import Header from './component/jsx/header'
import Data1 from './JSON/table1.json'
import Data2 from './JSON/table2.json'
import Table1Form from './component/jsx/table1form'
import Table1 from './component/jsx/table1'
import Table2 from './component/jsx/table2'
import Table3 from './component/jsx/tablo3'

function App() {


  const [table1, setTable1] = useState(Data1.uretimOperasyonBild);
  const [table2, setTable2] = useState(Data2.standarduruslar);
  const [table3, setTable3] = useState([]);

  useEffect(() => {

  }, [table1])


  function saatFarkiniHesapla(tarih1, tarih2) {
    var time1 = new Date(tarih1);
    var time2 = new Date(tarih2);

    var fark = Math.abs(time2 - time1); // İki tarih arasındaki farkı hesapla

    var saat = Math.floor(fark / (1000 * 60 * 60)); // Saat cinsinden farkı hesapla
    var dakika = Math.floor((fark / (1000 * 60)) % 60); // Dakika cinsinden farkı hesapla

    // HH:MM formatında saat farkını döndür
    return ('0' + saat).slice(-2) + ':' + ('0' + dakika).slice(-2);
  }


  const veriekle = (data) => {
    data.kayit_no = table1.length + 1;
    const time1 = new Date(data.baslangic);
    const time2 = new Date(data.bitis);
    data.toplamSure = saatFarkiniHesapla(time1, time2);
    setTable1([...table1, data]);
  }

  return (

    <div className='App'>
      <Header />
      <div className='Table1'>
        <Table1 table1={table1} />
        <Table2 table2={table2} />


      </div>
      <Table1Form guncelle={veriekle} />
      <div className='table3'>
        <Table3 table1={table1} table2={table2} />
      </div>
    </div>

  )
}

export default App
