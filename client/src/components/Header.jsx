import React from "react";
import Clock from "./Clock";
import Menu from "./Menu";

function Header() {
    return (
        <header>
        <h1>Top Heading</h1>
        <Menu />
        <Clock />
        </header>
    )
};

export default Header;
