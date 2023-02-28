import React from "react";
import { addressData } from "./geolocation";

const Display = ({name, address}) => {
    if(!name) return <div/>;
    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <h6>
                            {name}
                        </h6>
                    </td>
                    <td>
                        <h6>
                            {address}
                        </h6>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export const Displayed = () => {
    return (
        <>
            <div>
                {addressData.map((geolocation, key) => {
                    return (
                        <div key={key}>
                            <Display
                                key={key}
                                name={geolocation.name}
                                address={geolocation.address}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
};