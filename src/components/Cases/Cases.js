import React, { useEffect, useState } from 'react';
import styles from './Cases.module.css'
import Barchart from '../Barchart/Barchart';
import Piechart from '../Piechart/Piechart';
import TableFn from '../TableFn/TableFn';


function Cases() {

    const [casesByCounry, setCasesByCounry] = useState([]);        

    useEffect(() => {
  
      fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
          "x-rapidapi-key": "97487b56c7msh833bcdd4643cda9p1db218jsn6540a6a27aea"
        }
      })
      .then(response => response.json()) // Getting the actual response data
      .then(data => {

            setCasesByCounry(data.countries_stat);
        
        
            // country_name 
            // cases    
            // deaths
            // region
            // total_recovered
            // new_deaths
            // new_cases  
      })
      .catch(err => {
        console.log('error: ', err);
      });
  
    }, []);

   
  return (
    <div id="Cases" className={styles.Cases}>
       
       <Piechart case={casesByCounry}></Piechart>
       <Barchart case={casesByCounry}></Barchart>

       <TableFn case={casesByCounry}></TableFn>
    
             {/* <ul>
         {
         casesByCounry.map((cases) =>
          <li key={cases.country_name}>
                {cases.country_name}
          </li>
          )}
         </ul> */}

    </div>
  );
}

export default Cases;
