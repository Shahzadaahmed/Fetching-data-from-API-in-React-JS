// How to write promise using async await in React JS...!

import React from "react";

const LearningAsyncAwait = () => {
    
    // Making a promise...!
    let evenNumbers = new Promise((resolve, reject) => {
        let userInput = parseInt(prompt("Enter any number!"));

        if (userInput % 2 === 0) {
            resolve(`${userInput} is even number!`);
        }

        else {
            reject(`${userInput} is an odd number!`);
        }
    });

    async function getData() {
        try {
            let resolvedPromise = await evenNumbers;
            console.log(resolvedPromise);
        } catch (error) {
            console.error(`Error is: ${error}`);
        }
    }

    let storeData = getData();
    console.log(storeData);

    return (
        <div>
            <h1> Learning async await in React JS </h1>
        </div>
    );
}

export default LearningAsyncAwait;