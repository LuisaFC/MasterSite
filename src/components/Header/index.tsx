import React from 'react'
import { SignInButton } from '../SignInButton'
import { SignUpButton } from '../SignUpButton'
import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo1.png" alt="masterSite"/>
                <nav>
                    <ul>
                        <li><a className={styles.active}>Início</a></li>
                        <li><a>Produtos</a></li>
                        <li><a>Recursos</a></li>
                        <li><a>Empresa</a></li>
                    </ul>
                </nav>

                <SignInButton />
                <SignUpButton />
            </div>
        </header>
    )
}