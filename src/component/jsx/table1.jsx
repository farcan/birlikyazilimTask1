import React from 'react'
import { useEffect, memo } from 'react';
import '../style/table1.css'



const table1 = ({ table1 }) => {

    console.log(table1)
    useEffect(() => {
    }, [table1]);
    return (
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
    )
}

export default memo(table1)
