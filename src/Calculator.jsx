import React, { useState } from 'react';
import CustomButton from './CustomButton';

function Calculator() {
    const [inputValue, setInputValue] = useState("");
    const [result , setResult] = useState(null);
    const buttons = [
        "7", "8", "9", "+",
        "4", "5", "6", "-",
        "1", "2", "3", "*",
        "C", "0", "=", "/"
    ];

    const handleButtonClick = (symbol) =>{
        if(symbol === "C"){
            setInputValue('');
            setResult(null);
        } else if(symbol==="="){
            if(inputValue.trim()===""){
                setResult("Error")
            } else{
                try{
                    setResult(eval(inputValue).toString());
                } catch(error){
                    setResult(error);
                }
            } 
        } else {
            setInputValue((prev) => prev + symbol);
            setResult(null);
        }
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh", // Full viewport height
            }}
        >
            <div>
                <h1 style={{ textAlign: "center" }}>React Calculator</h1>
                <input
                    type="text"
                    value={inputValue}
                    readOnly
                    style={{
                        width: "200px",
                        height: "20px",
                        fontSize: "16px",
                        marginBottom: "10px",
                        textAlign: "left",
                    }}
                />
                {result && (
                    <p
                        style={{
                            color: "grey",
                            fontSize: "16px",
                            marginBottom: "10px",
                        }}
                    >
                        {result}
                    </p>
                )}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "5px",
                        width: "300px",
                    }}
                >
                    {buttons.map((symbol, index) => (
                        <CustomButton key={index} symbol={symbol} onClick={()=> handleButtonClick(symbol)} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Calculator;
