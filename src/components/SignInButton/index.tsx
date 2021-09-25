import styles from './styles.module.scss'

export function SignInButton(){
    const isUserLoggedIn = false;

    return isUserLoggedIn ? (
        <button 
            type="button" 
            className={styles.signInButton}
        >
            Nome do usuario
        </button>
    ) : (
        <button 
            type="button" 
            className={styles.signInButton}
        >
            Entrar
        </button>
    )
}