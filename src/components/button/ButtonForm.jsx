import Link from 'next/link';
import React from "react";

function ButtonForm({ onClick, className, children }) {
    const customClassName = ` ${className}`;

    return (
        <div className={customClassName} onClick={onClick}>
            {children}
        </div>
    );
}

export default ButtonForm;



