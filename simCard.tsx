// import { useState } from "react";
import styles from "C:/Users/Admin/Tarifich/Tarifich-front-end/global.module.css"
import App from "./modal";

const SimCard = () => {

    return ( 
        <div className={styles.simcard_container}>
            <div className={styles.simcard_Block}>
                <div className={styles.modalCountry}>
                    <span>Select your country</span>
                    <App/>
                </div>
                
            </div>
        </div>
     );
}
 
export default SimCard;