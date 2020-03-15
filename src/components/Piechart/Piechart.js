import React from 'react';
import styles from './Piechart.module.css'
import CanvasJSReact from '../../assets/js/canvasjs.react';

//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Piechart(casesByCounry) {


    let countCase = 0;
    let countDeaths = 0;
    let total_recovered = 0;

    for(let i=0; i<casesByCounry.case.length; i++) {
        let caseReal = parseFloat(casesByCounry.case[i][Object.keys(casesByCounry.case[i])[1]].replace(/,/g, ''));
        countCase = caseReal + countCase;

        let countDeathsReal = parseFloat(casesByCounry.case[i][Object.keys(casesByCounry.case[i])[2]].replace(/,/g, ''));
        countDeaths = countDeathsReal + countDeaths;

        let total_recoveredReal = parseFloat(casesByCounry.case[i][Object.keys(casesByCounry.case[i])[4]].replace(/,/g, ''));
        total_recovered = total_recoveredReal + total_recovered;
    }



    const options = {
        exportEnabled: false,
        animationEnabled: true,
        title: {
            text: "Confirmed Total Cases and Deaths, recovered"
        },
        data: [{
            type: "pie",
            startAngle: 75,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { y: countCase, label: "cases" },
                { y: countDeaths, label: "deaths" },
                { y: total_recovered, label: "total_recovered" }
            ]
        }]
    }
    
    return(

        <div className={styles.barChart}>
            <CanvasJSChart options = {options} 
                /* onRef = {ref => this.chart = ref} */
            />
        </div>

    )
}

export default Piechart;

