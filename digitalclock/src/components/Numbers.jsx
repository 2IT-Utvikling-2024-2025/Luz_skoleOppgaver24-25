import React, { useState } from "react";



function NumberConverter() {
    const [number, setNumber] = useState("");
    const [base, setBase] = useState(10); // Base for konvertering (standard er 10)
    const [convertedNumber, setConvertedNumber] = useState("");

    const convertToNumber = () => {
        const num = parseInt(number, 10); // Konverter input til tall
        if (isNaN(num)) {
            setConvertedNumber("Invalid number");
        } else {
            setConvertedNumber(num.toString(base)); // Konverterer tallet til ønsket base
        }
    };

    return (
        <div>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)} // Oppdaterer state med input
                placeholder="Enter a number"
            />
            <select value={base} onChange={(e) => setBase(parseInt(e.target.value))}>
                <option value="10">Binary (Base 2)</option>
                <option value="8">Octal (Base 8)</option>
                <option value="10">Decimal (Base 10)</option>
                <option value="16">Hexadecimal (Base 16)</option>
            </select>
            <button onClick={convertToNumber}>Convert to Base {base}</button>
            {convertedNumber && <p>{`${number} in base ${base} is ${convertedNumber}`}</p>}
        </div>
    );
}






export default NumberConverter;