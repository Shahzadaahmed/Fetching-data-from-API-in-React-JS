// How to fetch Covid 19 data using fetch API n React JS...! (Using async await).

import React from "react";

const UpdateCovid19Data = () => {

    const getCovid19Data = (index) => {
        async function getdata() {
            try {
                let jsonData = await fetch('https://api.covid19api.com/summary');
                // console.log(jsonData);
                let jsData = await jsonData.json();
                // console.log(jsData);

                let myCountry = jsData.Countries[index];
                let { Country, TotalConfirmed, TotalDeaths, TotalRecovered } = myCountry;
                console.log(`My country name is ${Country}. Total confirmed cases are ${TotalConfirmed}. Total deaths are ${TotalDeaths}. Total recovered cases are ${TotalRecovered}.`);
            }

            catch (error) {
                console.error(`Error is: ${error}`);
            }
        }
        getdata();
    }

    getCovid19Data(127);
    getCovid19Data(76);
    getCovid19Data(178);
    getCovid19Data(179);

    return (
        <div>
            <h1> How to fetch Covid 19 data using fetch API n React JS...! (Using async await). </h1>
        </div>
    );
}

export default UpdateCovid19Data;