import React, { useEffect, useState } from 'react';
import styles from './Mask.module.css'


function Mask() {



  
    const [mask, setMask] = useState([]);
        

    useEffect(() => {
   
      fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/masks.php", {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
          "x-rapidapi-key": "97487b56c7msh833bcdd4643cda9p1db218jsn6540a6a27aea"
        }
      })
      .then((response) => {
        response.arrayBuffer().then((buffer) => {
          let base64Flag = 'data:image/jpeg;base64,';
          let imageStr = arrayBufferToBase64(buffer);
      
          document.querySelector('img').src = base64Flag + imageStr;
        });
      });
  

    }, []);



    const arrayBufferToBase64 = buffer =>{
      let binary = '';
      let bytes = [].slice.call(new Uint8Array(buffer));
      bytes.forEach((b) => binary += String.fromCharCode(b));
      return window.btoa(binary);
    }






  return (
    <div id="Mask" className={styles.Mask}>
       
        <h1>Mask</h1>

        
       <img src=""></img>
      
  

    </div>
  );
}

export default Mask;
