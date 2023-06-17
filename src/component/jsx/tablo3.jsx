import React from 'react'
import { useState } from 'react';
import Tablo4 from './tablo4'






const tablo3 = ({ table1, table2 }) => {

    const [table3, setTable3] = useState([]);
    var realData = [];


    const breakStart1 = "10:00"; // Çay molası başlangıç saati
    const breakEnd1 = "10:15"; // Çay molası bitiş saati

    const breakStart2 = "12:00"; // Yemek molası başlangıç saati
    const breakEnd2 = "12:30"; // Yemek molası bitiş saati

    const breakStart3 = "15:00"; // Çay molasi başlangıç saati
    const breakEnd3 = "15:15"; // Çay molasi bitiş saati

    function splitDateTime(firstDateTime, secondDateTime, kayit_no, status, durus) {
        const startTime = new Date(firstDateTime);
        const endTime = new Date(secondDateTime);

        const breakStartTime1 = new Date(
            startTime.getFullYear(),
            startTime.getMonth(),
            startTime.getDate(),
            parseInt(breakStart1.split(":")[0]),
            parseInt(breakStart1.split(":")[1])
        );

        const breakEndTime1 = new Date(
            startTime.getFullYear(),
            startTime.getMonth(),
            startTime.getDate(),
            parseInt(breakEnd1.split(":")[0]),
            parseInt(breakEnd1.split(":")[1])
        );

        const breakStartTime2 = new Date(
            startTime.getFullYear(),
            startTime.getMonth(),
            startTime.getDate(),
            parseInt(breakStart2.split(":")[0]),
            parseInt(breakStart2.split(":")[1])
        );

        const breakEndTime2 = new Date(
            startTime.getFullYear(),
            startTime.getMonth(),
            startTime.getDate(),
            parseInt(breakEnd2.split(":")[0]),
            parseInt(breakEnd2.split(":")[1])
        );

        const breakStartTime3 = new Date(
            startTime.getFullYear(),
            startTime.getMonth(),
            startTime.getDate(),
            parseInt(breakStart3.split(":")[0]),
            parseInt(breakStart3.split(":")[1])
        );

        const breakEndTime3 = new Date(
            startTime.getFullYear(),
            startTime.getMonth(),
            startTime.getDate(),
            parseInt(breakEnd3.split(":")[0]),
            parseInt(breakEnd3.split(":")[1])
        );

        if (startTime < breakEndTime1 && endTime > breakStartTime1) {
            const firstPartEndTime = new Date(Math.min(breakEndTime1, endTime));
            const secondPartStartTime = new Date(Math.max(breakStartTime1, startTime));
            const secondPartEndTime = endTime;
            realData.push({ kayit_no: kayit_no, baslangic: startTime, bitis: secondPartStartTime, Status: status, durus: durus })
            realData.push({ kayit_no: kayit_no, baslangic: secondPartStartTime, bitis: firstPartEndTime, Status: status, durus: "Çay Molasi" })
            realData.push({ kayit_no: kayit_no, baslangic: firstPartEndTime, bitis: secondPartEndTime, Status: status, durus: durus })
            return {

                breakData: { kayit_no: kayit_no, baslangic: startTime, bitis: secondPartStartTime, Status: status }, // çay molasına kadar olan veri
                breakTime: { kayit_no: kayit_no, baslangic: secondPartStartTime, bitis: firstPartEndTime, Status: status, durus: "Çay Molasi" }, // çay molası
                remainingData: { kayit_no: kayit_no, baslangic: firstPartEndTime, bitis: secondPartEndTime, Status: status }, //çay molasından sonra devam eden veri
            };
        } else if (startTime < breakEndTime2 && endTime > breakStartTime2) {
            const firstPartEndTime = new Date(Math.min(breakEndTime2, endTime));
            const secondPartStartTime = new Date(Math.max(breakStartTime2, startTime));
            const secondPartEndTime = endTime;

            realData.push({ kayit_no: kayit_no, baslangic: startTime, bitis: secondPartStartTime, Status: status, durus: durus })
            realData.push({ kayit_no: kayit_no, baslangic: secondPartStartTime, bitis: firstPartEndTime, Status: status, durus: "Yemek Molasi" })
            realData.push({ kayit_no: kayit_no, baslangic: firstPartEndTime, bitis: secondPartEndTime, Status: status, durus: durus })


            return {

                breakData: { kayit_no: kayit_no, baslangic: startTime, bitis: secondPartStartTime, Status: status, durus: durus }, // çay molasına kadar olan veri
                breakTime: { kayit_no: kayit_no, baslangic: secondPartStartTime, bitis: firstPartEndTime, Status: status, durus: "Yemek Molasi" }, // çay molası
                remainingData: { kayit_no: kayit_no, baslangic: firstPartEndTime, bitis: secondPartEndTime, Status: status, durus: durus }, //çay molasından sonra devam eden veri
            };
        } else if (startTime < breakEndTime3 && endTime > breakStartTime3) {
            const firstPartEndTime = new Date(Math.min(breakEndTime3, endTime));
            const secondPartStartTime = new Date(Math.max(breakStartTime3, startTime));
            const secondPartEndTime = endTime;
            realData.push({ kayit_no: kayit_no, baslangic: startTime, bitis: secondPartStartTime, Status: status, durus: durus })
            realData.push({ kayit_no: kayit_no, baslangic: secondPartStartTime, bitis: firstPartEndTime, Status: status, durus: "Çay Molasi" })
            realData.push({ kayit_no: kayit_no, baslangic: firstPartEndTime, bitis: secondPartEndTime, Status: status, durus: durus })
            return {
                breakData: { kayit_no: kayit_no, baslangic: startTime, bitis: secondPartStartTime, Status: status, durus: durus }, // çay molasına kadar olan veri
                breakTime: { kayit_no: kayit_no, baslangic: secondPartStartTime, bitis: firstPartEndTime, Status: status, durus: "Çay Molasi" }, // çay molası
                remainingData: { kayit_no: kayit_no, baslangic: firstPartEndTime, bitis: secondPartEndTime, Status: status, durus: durus }, //çay molasından sonra devam eden veri
            };
        }

        realData.push({ kayit_no: kayit_no, baslangic: startTime, bitis: endTime, Status: status, durus: durus });
        return {
            breakData: "",
            breakTime: "",
            remainingData: { kayit_no: kayit_no, baslangic: startTime, bitis: endTime, Status: status, durus: durus },
        };
    }



    table1.map((item) => {
        splitDateTime(item.baslangic, item.bitis, item.kayit_no, item.Status, item.DuruşNedeni);

    })


    return (

        <div>


            <table>
                <thead>
                    <tr>
                        <td>Kayıt No</td>
                        <td>Baslangıc</td>
                        <td>Bitis</td>
                        <td>ToplamSüre</td>
                        <td>Statü</td>
                        <td>DuruşNedeni</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        realData.map((item) => {
                            return (
                                <Tablo4 kayit_no={item.kayit_no} baslangic={item.baslangic} bitis={item.bitis} Status={item.Status} durus={item.durus} />
                            )
                        })
                    }

                </tbody>
            </table>


        </div >

    )
}

export default tablo3
