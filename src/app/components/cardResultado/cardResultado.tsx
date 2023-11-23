import styles from './cardResultado.module.css'

export default function CardResultado(props : any) {
    return (
        <article className={styles.fundo_card}>
            <div className={styles.grid_card}>
                <div className={styles.img_user}></div>
                <p>nome: <br />{props.nome}</p>
                <p>resultado: <br />{props.resultado}</p>
                <p>historico: <br />{props.historico}</p>
                <p>cidade: <br />{props.cidade}</p>
                <p>idade: <br />{props.idade}</p>
            </div>
        </article>
    )
}