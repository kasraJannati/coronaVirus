import React from 'react';
import styles from './Home.module.css'


function Home(props) {



  fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/masks.php", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
      "x-rapidapi-key": "97487b56c7msh833bcdd4643cda9p1db218jsn6540a6a27aea"
    }
  })
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  });





  return (
    <div id="homePart">
         <h2 className={styles.h2}>Home page</h2>
    </div>
  );
}

export default Home;
