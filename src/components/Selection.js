import React, { useState } from "react";

export default function Selection(props) {
    const [tempBackground, changeTempBackground] = useState({ background: "" });
    const { applyColor } = props;

    return (
        <div className='fix-box' style={tempBackground} onClick={() => applyColor(changeTempBackground)}>
        <h2 className='subheading'>Selection</h2>
        </div>
    );
}