import React, { useEffect, useState } from 'react';
import styles from './Home.module.css'
import Cases from '../Cases/Cases';
import Mask from '../Mask/Mask';


function Home() {

  const [isLoading, setIsLoading] = useState(false);

  const [affectedCountries, setAffectedCountries] = useState([]);
        

  useEffect(() => {

    setIsLoading(true);
    fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/affected.php", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "97487b56c7msh833bcdd4643cda9p1db218jsn6540a6a27aea"
      }
    })
    .then(response => response.json()) // Getting the actual response data
    .then(data => {
      console.log(data)
      setAffectedCountries(data.affected_countries);
      setIsLoading(false);  
    })
    .catch(err => {
      console.log('error: ', err);
    });

  }, []);




  return (
    <div id="homePart">
         <h2 className={styles.h2}>Home page</h2>

         {isLoading ? (
        <div>Loading ...</div>
      ) : (
         <ul>
         {
         affectedCountries.map((affectedCountry) =>
          <li key={affectedCountry.toString()}>
                {affectedCountry}
          </li>
          )}
         </ul>
      )}

         <section>
           <Cases></Cases>
         </section>

         
         <section>
           <Mask></Mask>
         </section>
    </div>
  );
}

export default Home;
