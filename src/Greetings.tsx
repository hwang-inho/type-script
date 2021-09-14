import React from "react";

type GreeingsProps = {
    name: string;
    mark: string;
    onClick: (name: string) => void;
};


function Greetings({name, mark, onClick}: GreeingsProps){
    const handleClick = () => onClick(name);
    return (
        <div>
            Hello, {name}{mark}             
            <div>
                <button onClick={handleClick}>Click Me</button>
            </div>
        </div>
    );
};

Greetings.defaultProps={
    mark: '!'
}

export default Greetings;