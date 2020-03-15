import React from 'react';
import styles from './Barchart.module.css'
import CanvasJSReact from '../../assets/js/canvasjs.react';

//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Barchart(casesByCounry) {

    let countries = [];    
    let caseViruses = [];

    for(let i=0; i<5; i++) {
        if(casesByCounry.case[i] === undefined)  {
            return null
        }
        else{
            let country = casesByCounry.case[i][Object.keys(casesByCounry.case[i])[0]];
            let caseVirus = casesByCounry.case[i][Object.keys(casesByCounry.case[i])[1]];
            countries.push(country);
            caseViruses.push(caseVirus);
        }
    }

    const addSymbols = (e) => {
        let suffixes = ["T", "K", "M", "B"];
        let order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
        if(order > suffixes.length - 1)
            order = suffixes.length - 1;
        let suffix = suffixes[order];
        return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
    }
    
	const options = {
        
        animationEnabled: true,
        theme: "light2",
        // title:{
        //     text: "countries"
        // },
        // axisX: {
        //     title: "countries",
        //     reversed: true,
        // },
        axisY: {
            title: "the number of cases corona virus",
            labelFormatter: addSymbols
        },
        data: [{
            type: "bar",
            dataPoints: [
                { y:  parseInt(caseViruses[0]), label: countries[0] },
                { y:  parseInt(caseViruses[1]), label: countries[1] },
                { y:  parseInt(caseViruses[2]), label: countries[2] },
                { y:  parseInt(caseViruses[3]), label: countries[3]},
                { y:  parseInt(caseViruses[4]), label: countries[4] }
            ]
        }]
    }
    
    return(

        <div className={styles.barChart}>

            <h2 className={styles.h2}>Affected rates in countries</h2>

            <CanvasJSChart options = {options}
                /* onRef = {ref => this.chart = ref} */
            />
        </div>
    )
}

export default Barchart;