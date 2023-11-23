import Image from "next/image"
import styles from './card.module.css'

export default function Card(props : any) {
    return (
        <article className={styles.fundo_card}>
            <div className={styles.grid_card}>
                <img src={props.img} alt="" />
                <h3>{props.titulo}</h3>
                <p>{props.texto}</p>
            </div>
        </article>
    )
}