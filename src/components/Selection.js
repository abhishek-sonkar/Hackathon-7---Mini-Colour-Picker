import React, { useState } from "react";

export default function Selection(props) {
    const [tempBackground, changeBackground] = useState({ background: "" });
    const { applyColor } = props;

    return (
        <div className='fix-box' style={tempBackground} onClick={() => applyColor(changeBackground)}>
        <h2 className='subheading'>Selection</h2>
        </div>
    );
}