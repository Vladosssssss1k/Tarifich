import styles from "C:/Users/Admin/Tarifich/Tarifich-front-end/global.module.css"
import { Link } from "react-router-dom";


const SignUp = () => {
    return ( 
        <div className={styles.signUp_container}>
            <div className={styles.signUp_Block}>
                <span className={styles.header}>Registration</span>
                <form action="" method="post">
                    <input type="email" placeholder="Enter your email" className={styles.fieldsForm}/>
                    <input type="password" placeholder="Enter your password" className={styles.fieldsForm}/>
                    <input type="password" placeholder="Repeat your password" className={styles.fieldsForm}/>
                </form>
                <Link to="/home" className={styles.btnStyle}>Sign Up</Link>
                <span>Do you have an account?<Link to="/auth" className={styles.linksForm}>Click here</Link></span>
            </div>
        </div>
     );
}
 
export default SignUp;