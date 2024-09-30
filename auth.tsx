import styles from "C:/Users/Admin/Tarifich/Tarifich-front-end/global.module.css"
import { Link } from "react-router-dom";


const Auth = () => {
    return ( 
        <div className={styles.auth_container}>
             <div className={styles.auth_Block}>
                <span className={styles.header}>Authorization</span>
                <form action="" method="post">
                    <input type="phone" placeholder="Enter your phone number" className={styles.fieldsForm}/>
                    <input type="password" placeholder="Enter your password" className={styles.fieldsForm}/>
                </form>
                <Link to="/resetPassword" className={styles.linksForm}>Forgot password</Link>
                <Link to="/home" className={styles.btnStyle}>Log In</Link>
                <span>Don't have an account?<Link to="/signUp" className={styles.linksForm}>Click here</Link></span>
            </div>
        </div>
     );
}
 
export default Auth;