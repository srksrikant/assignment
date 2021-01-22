import React from 'react';
import "./assignment2.css";

const data = [
    ["Auto Winding Machine", "machine001", 0, 0, 0, 0.0, 0.0, 0.0, 0, 0, 0, 0, 0, 0],
    ["Boiler Machine", "machine004", 0, 0, 0, 0.0, 0.0, 0.0, 0, 0, 0, 0, 0, 0]
];

export default function Assignment1() {
    return (
        <div className="container-fluid my-cont" >
            <table className="table table-bordered" >
                <tr>
                    <th>MACHINE NAME</th>
                    <th>MACHINE ID</th>
                    <th>CURRENT(Amps)</th>
                    <th>VOLTAGE(Volts)</th>
                    <th>POWER FACTOR</th>
                    <th>Active Power(MW)</th>
                    <th>Apparent Power(MVA)</th>
                    <th>Reactive Power(MVAr)</th>
                    <th colSpan="3" >
                        <tr>
                            <th colSpan="3" className="inside-th" >Energy Consumed(kWh)</th>
                        </tr>
                        <tr>
                            <td className="inside-td" >Today</td>
                            <td className="inside-td" >MTD</td>
                            <td className="inside-td" >YTD</td>
                        </tr>
                    </th>
                    <th colSpan="3" >
                        <tr>
                            <th colSpan="3" className="inside-th" >IDLE TIME</th>
                        </tr>
                        <tr>
                            <td className="inside-td" >Today</td>
                            <td className="inside-td" >MTD</td>
                            <td className="inside-td" >YTD</td>
                        </tr>
                        <tr></tr>
                    </th>
                </tr>
                {
                    data.map((element1, index1) => {
                        return <tr key={index1} >
                            {
                                element1.map((element2, index2) => {
                                    return <td key={index2} >{element2}</td>
                                })
                            }
                        </tr>
                    })
                }
            </table>
        </div>
    )
}
