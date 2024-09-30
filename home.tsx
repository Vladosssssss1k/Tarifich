import styles from "C:/Users/Admin/Tarifich/Tarifich-front-end/global.module.css"
import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <div className={styles.home_container}>
            <div className={styles.home_Header}>
                    <span>Tarifich</span>
                    <div className={styles.menu_Header}>
                        <Link to="/tariffs" className={styles.linksHeader}>Tariffs</Link>
                        <Link to="/sim-cards" className={styles.linksHeader}>Sim-cards</Link>
                        <Link to="/messenger" className={styles.linksHeader}>Messenger</Link>
                    </div>
                    <div className={styles.account_Header}>
                        <img src="" alt="" />
                        <Link to="/account" className={styles.btnAccount}>Wayne</Link>
                    </div>
            </div>
            <div className={styles.home_Block}>
                <div className={styles.home_Balance}>
                    <span>25$</span>
                    <hr color="black"/>
                    <span>Will write off 5$ from 15.10.2024</span>
                    <div className={styles.card}>
                        <img src="" alt="" />
                        <span>Upiter Debits ****2023</span>
                    </div>
                </div>

                <div className={styles.home_Tariff}>
                    <span>Tariff1</span>

                </div>
                <div className={styles.home_Assistant}>
                    
                </div>

            </div>
        </div>
     );
}
 
export default Home;