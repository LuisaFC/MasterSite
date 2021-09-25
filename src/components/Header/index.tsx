import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo1.png" alt="masterSite"/>
                <nav>
                    <a className={styles.active}>Início</a>
                    <a>Produtos</a>
                    <a>Recursos</a>
                    <a>Empresa</a>
                </nav>
            </div>
        </header>
    )
}