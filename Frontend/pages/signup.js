import Head from 'next/head'
import styles from '../styles/dashboard.module.css'

export default function Home() {
    return (
        <div className={styles.loginContainer}>
            <Head>
                <title>Pesto Dolphins SignUp</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=0.68" />
            </Head>

            <form className={styles.loginForm}>
                <h1 className={styles.loginTitle}>Create Account</h1>
                <input className={styles.input} type="text" name="name" placeholder="Name"/>
                <input className={styles.input} type="email" name="email" placeholder="Email Address"/>
                <input className={styles.input} type="password" name="password" placeholder="Password"/>
                <input className={styles.input} type="button" value="Sign up"/>
            </form>

            <div className={styles.drops}>
                <div className={styles.drop1}></div>
                <div className={styles.drop2}></div>
                <div className={styles.drop3}></div>
                <div className={styles.drop4}></div>
                <div className={styles.drop5}></div>
            </div>
        </div>
    )
}