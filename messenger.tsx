import styles from "C:/Users/Admin/Tarifich/Tarifich-front-end/global.module.css"

const Messenger = () => {
    return ( 
        <div className={styles.messenger_container}>
            <div className={styles.messenger_Block}>
                <div className={styles.messenger_Head}>
                    <img src="" alt="" />
                    <span>Name</span>
                </div> 
                <div className={styles.messenger_Messeges}>

                </div>
                <div className={styles.messenger_Enter}>
                    <button>@</button>
                    <textarea name="" id=""></textarea>
                    <button>Send</button>
                </div>
            </div>
        </div>
     );
}
 
export default Messenger;