import styles from './resultado.module.css'
import CardResultado from '@/app/components/cardResultado/cardResultado'

export default function Resultado(){
    return(
        <main className={styles.main_resultado}>
            <section className={styles.section_resultado}>
                <CardResultado></CardResultado>
            </section>
        </main>
    )
}