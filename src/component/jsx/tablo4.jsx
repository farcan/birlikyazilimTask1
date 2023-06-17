import React from 'react'

const tablo4 = ({ kayit_no, baslangic, bitis, Status, durus }) => {
    const time = new Date(baslangic);
    const time2 = new Date(bitis);

    function calculateHourDifference(start, end) {
        const startDate = new Date(start);
        const endDate = new Date(end);

        // Saat farkını hesapla
        const diffInMilliseconds = Math.abs(endDate - startDate);
        const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
        const diffInMinutes = Math.floor((diffInMilliseconds / (1000 * 60)) % 60);

        // HH:MM formatında geri döndür
        const hours = String(diffInHours).padStart(2, "0");
        const minutes = String(diffInMinutes).padStart(2, "0");

        return `${hours}:${minutes}`;
    }


    return (

        <tr>
            <td>{kayit_no}</td>
            <td>{time.toString()}</td>
            <td>{time2.toString()}</td>
            <td>{calculateHourDifference(time2, time)}</td>
            <td>{Status}</td>
            <td>{durus}</td>


        </tr>




    )
}

export default tablo4
