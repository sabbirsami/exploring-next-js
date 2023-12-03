import React from "react";

const layout = ({ children }) => {
    return (
        <div>
            <h1>Header</h1>
            {children}
            <h1>Header</h1>
        </div>
    );
};

export default layout;
