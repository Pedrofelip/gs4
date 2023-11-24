'use client'

import { useEffect, useState } from 'react'
import styles from './resultado.module.css'
import CardResultado from '@/app/components/cardResultado/cardResultado'

export default function Resultado(){

    const[resultado, setResultado] = useState([])

    useEffect(() => {
        fetch('', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            },
        })
        .then((resposta) => resposta.json())
        .then((data) => { setResultado(data) })
        .catch((err) => console.log(err))
    }, [])

    return(
        <main className={styles.main_resultado}>
            <section className={styles.section_resultado}>
                <CardResultado nome={resultado} resultado={resultado} historico={resultado} cidade={resultado} idade={resultado}></CardResultado>
            </section>
        </main>
    )
}