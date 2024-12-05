import React from 'react'

function CustomButton({symbol, onClick}) {
  return (
    <div>
        <button
            onClick={onClick}
          style={{
            width: "50px",
            height: "50px",
            fontSize: "18px",
            backgroundColor: "#f0f0f0",
            border: "1px solid #ccc",
            borderRadius: "5px",
            cursor: "pointer"
        }}>{symbol}</button>
    </div>
  )
}

export default CustomButton