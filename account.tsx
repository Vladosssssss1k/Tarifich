import { Link } from "react-router-dom";
import styles from "C:/Users/Admin/Tarifich/Tarifich-front-end/global.module.css"

const Account = () => {
    return ( 
        <div className={styles.account_container}>
            <div className={styles.account_Block}>
                <div className={styles.account_Head}>
                    <Link to="/home" className={styles.accBtn}>&larr;</Link>
                    <img src="" alt=""/>
                    <button className={styles.accBtn}>&hellip;</button>
                </div>
                <div className={styles.account_Settings}>
                    <form action="">
                        <div className={styles.options}>
                            <span>Name</span>
                            <input type="text" placeholder="Name" className={styles.fieldsForm}/>
                        </div>
                        <div className={styles.options}>
                            <span>Surname</span>
                            <input type="text" placeholder="Surname" className={styles.fieldsForm}/>
                        </div>
                        <div className={styles.options}>
                            <span>Phone number</span>
                            <input type="phone" placeholder="Phone number" className={styles.fieldsForm}/>
                        </div>
                        <div className={styles.options}>
                            <span>Email</span>
                            <input type="email" placeholder="Email" className={styles.fieldsForm}/>
                        </div>
                        <div className={styles.options}>
                            <span>Password</span>
                            <input type="password" name="" id="" placeholder="Password" className={styles.fieldsForm}/>
                        </div>
                    </form>
                    <button className={styles.btnStyle}>Save</button>
                </div>
            </div>
        </div>
     );
}
 
export default Account;