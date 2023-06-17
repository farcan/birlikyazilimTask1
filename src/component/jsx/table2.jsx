import React from 'react'


const table2 = ({ table2 }) => {
    return (
        <table>
            <thead>
                <tr>
                    <td>Başlangıc</td>
                    <td>Bitis</td>
                    <td>Duruş Nedeni</td>
                </tr>
            </thead>

            {
                table2.map((table) => {
                    return (
                        <tbody>
                            <tr>
                                <td>{table.baslangıc}</td>
                                <td>{table.bitis}</td>
                                <td>{table.durus_nedeni}</td>
                            </tr>
                        </tbody>

                    )
                })
            }

        </table>
    )
}

export default table2
