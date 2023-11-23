import styles from './cadastro.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function CadastroPage() {
    return (
        <main className={styles.main}>
            <div className={styles.fundo_cadastro}>
                <div className={styles.logo_cabecalho}>
                    <Image
                        src="/logo_sem_fundo.png"
                        alt="Logo da solução Derma Scan com um coração com o nome da solução em baixo"
                        // className={styles.vercelLogo}
                        width={440}
                        height={380}
                        priority
                    />
                </div>
                <div className={styles.grid_form}>
                    <div className={styles.fundo_form}>
                        <form action="" className={styles.form_cadastro}>
                            <div className={styles.input_cadastro}>
                                <label htmlFor="">Nome</label>
                                <input type="text" />
                            </div>
                            <div className={styles.input_cadastro}>
                                <label htmlFor="">Email</label>
                                <input type="email" />
                            </div>
                            <div className={styles.input_cadastro}>
                                <label htmlFor="">Senha</label>
                                <input type="password" />
                            </div>
                            <div className={styles.input_cadastro}>
                                <label htmlFor="">CPF</label>
                                <input type="text" />
                            </div>
                            <div className={styles.input_cadastro}>
                                <label htmlFor="">Idade</label>
                                <input type="text" />
                            </div>
                            <div className={styles.btn_cadastro}>
                            <p className={styles.redirect}>Já possui uma conta? <Link href="/login" className={styles.link_redirect}>faça o login</Link></p>
                                <button>cadastrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}