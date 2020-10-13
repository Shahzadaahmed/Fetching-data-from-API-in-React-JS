// How to fetch Covid 19 data using fetch API n React JS...! (Using Promise).

import React from "react";

const FetchDataUsingAPI = () => {

    const covid19Data = (index) => {
        fetch('https://api.covid19api.com/summary')
            .then((apiData) => {
                // console.log(apiData);
                // Converting JSON data into JS object...!
                return apiData.json();
            })
            .then((actualData) => {
                let myCountry = actualData.Countries[index];
                let { Country, TotalConfirmed, TotalDeaths, TotalRecovered } = myCountry;
                console.log(`My country name is ${Country}. Total confirmed cases are ${TotalConfirmed}. Total deaths are ${TotalDeaths}. Total recovered cases are ${TotalRecovered}.`);
            })
            .catch((error) => {
                console.error(`Error is: ${error}.`);
            });
    }

    covid19Data(127);
    covid19Data(76);
    covid19Data(178);
    covid19Data(179);

    return (
        <div>
            <h1> How to fetch Covid 19 data using fetch API n React JS...! (Using Promise). </h1>
        </div>
    );
}

export default FetchDataUsingAPI;