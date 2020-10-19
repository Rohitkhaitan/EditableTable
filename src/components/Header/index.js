import React from 'react'
import Account from "../../assets/Account.svg";
import "./index.css";


export default function header() {
    return (
        <header className="header">
            <h2 className="text_header">Logword</h2>
            <img src={Account} width="30px" alt=""/>

        </header>
    )
}
