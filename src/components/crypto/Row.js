import React from 'react';

import "./styles/Row.scss"

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// import "../style/row.css";


const Row = ({ symbol, name , image, price , cap , priceChange}) => {
    return (
        <tr>
            <td>
                <img className="image" src={image}/> <p>{name}</p>
            </td>
            <td>
                <p>
                {symbol.toUpperCase()}
                </p>
            </td>
            <td>
                <p>
                ${price.toLocaleString()}
                </p>
            </td>
            <td>
                <p>
                ${Math.round(priceChange)}
                </p>
            </td>
            <td>
                <p>
                ${cap.toLocaleString()}
                </p>
            </td>
        </tr>
    );
};

export default Row;