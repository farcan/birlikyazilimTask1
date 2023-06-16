import { useState, useEffect } from 'react'
import './App.css'
import Header from './component/jsx/header'
import Data1 from './JSON/table1.json'
import Table1Form from './component/jsx/table1form'


function App() {
  useEffect(() => {
    console.log(Data1.uretimOperasyonBild)

  }, [Data1.uretimOperasyonBild])

  const [table1, setTable1] = useState(Data1.uretimOperasyonBild);
  console.log(table1);

  return (
    <div className='App'>
      <button onClick={() => console.log(Data1)}>fdsfd</button>
      <Header />
      <div className='Table1'>
        <table>
          <thead>
            <tr>
              <td>Kayıt No</td>
              <td>Başlangıc</td>
              <td>Bitis</td>
              <td>Toplam Süre</td>
              <td>Statü</td>
              <td>Duruş Nedeni</td>
            </tr>
          </thead>
          {
            table1.map((table) => {
              return (

                <tbody>
                  <tr>
                    <td>{table.kayit_no}</td>
                    <td>{table.baslangic}</td>
                    <td>{table.bitis}</td>
                    <td>{table.toplamSure}</td>
                    <td>{table.Status}</td>
                    <td>{table.DuruşNedeni}</td>
                  </tr>
                </tbody>

              )
            })

          }
        </table>
        <Table1Form />
      </div>
    </div>
  )
}

export default App
