// How to write promise in React JS...!

import React from "react";

const LearningPromise = () => {

    // 1st Promise...!
    let firstPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let rollNumbersArr = [1, 2, 3, 4, 5];
            resolve(rollNumbersArr);
            reject("Somethinh wrong happened in the first promise!");
        }, 2000);
    });

    // Making a function which is returning a promise...!
    const getBioData = (getRollNum) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let bioData = {
                    name: "Shahzada Ahmed",
                    age: 24
                }
                resolve(`Hi, My name is ${bioData.name}. My roll number is ${getRollNum} And my age is ${bioData.age}.`);
                reject("Something wrong happened in the second promise!");
            }, 2000);
        });
    }

    firstPromise
        .then((success) => {
            console.log(success);
            return getBioData(success[2]);
        })
        .then((success) => {
            console.log(success);
        })
        .catch((error) => {
            console.error(`Error is: ${error}`);
        });

    return (
        <div>
            <h1> Learning Promise in React JS </h1>
        </div>
    );
}

export default LearningPromise;