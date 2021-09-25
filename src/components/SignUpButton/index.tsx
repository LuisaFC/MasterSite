import styles from './styles.module.scss'

export function SignUpButton(){
    const isUserLoggedIn = false;

    return isUserLoggedIn ? (
        null
    ) : (
        <button 
            type="button" 
            className={styles.signUpButton}
        >
            Comece já
        </button>
        )
}