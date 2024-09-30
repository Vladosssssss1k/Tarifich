import { Link } from "react-router-dom";
import styles from "C:/Users/Admin/Tarifich/Tarifich-front-end/global.module.css"

const Tariffs = () => {
    return ( 
        <div className={styles.tariffs_container}>
            <div className={styles.home_Header}>
                    <span><Link to="/home">Tarifich</Link></span>
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
            <div className={styles.tariffs_Block}>
                <span>Tariffs</span>
                <div className={styles.tariffs_list}>
                    <div className={styles.tariff_Item}>
                            <div className={styles.front_item}>
                                <img src="" alt=""/>
                                <span>Tariff1</span>
                            </div>
                            <div className={styles.back_item}>
                                <span></span>
                            </div>
                    </div>
                </div>
                
            </div>
        </div>
     );
}
 
export default Tariffs;