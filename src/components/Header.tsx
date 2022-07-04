import React from "react";
import { useEffect, useState } from "react";
import { HeaderWrap } from "./styled/Header.styled";

const Header = () => {
    const [greeting, setGreeting] = useState<string>("");
    const greetMsg = () => {
        const hour = new Date().getHours();
        const texts = ["Good night", "Good morning", "Good afternoon", "Good evening"];
        let text = "";
        if (hour < 6) text = texts[0];
        else if (hour < 12) text = texts[1];
        else if (hour < 18) text = texts[2];
        else text = texts[3];
        return text;
    }
    useEffect(() => {
        setGreeting(greetMsg());
    }, []);
    return (
        <HeaderWrap>
            <h1>Weather Widget</h1>
            <p>{greeting}</p>
        </HeaderWrap>
    );
}
 
export default Header;