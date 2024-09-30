import { Link } from "react-router-dom";
import styles from "C:/Users/Admin/Tarifich/Tarifich-front-end/global.module.css"


const Preview = () => {
    return ( 
        <div className={styles.preview_container}>
            <div className={styles.preview_Block}>
                <span>«Tarifich» is a mobile operator and <br /> an innovative project of <br /> a local telecom operator</span>
                <Link to="/auth" className={styles.btnStyle}>Get started</Link>
            </div>
        </div>
     );
}
 
export default Preview;