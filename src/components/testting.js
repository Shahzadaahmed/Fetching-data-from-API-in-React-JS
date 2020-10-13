import React from "react";
import RandomWords from "random-words";

const Test = () => {

    const testing = () => {
        console.log(RandomWords(50000));
    }

    testing();

    return (
        <div>
            <h1> Hello Testing! </h1>
        </div>
    );
}

export default Test;