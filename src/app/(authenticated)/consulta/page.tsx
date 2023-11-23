'use client';

import { useState } from 'react';
import styles from './consulta.module.css'



export default function Consulta() {

    const[estado, setEstado] = useState("")
    const[rua, setRua] = useState("")
    const[bairro, setBairro] = useState("")
    const[uf, setUf] = useState("")


    function checkCEP (e : any){
        const cep = e.target.value.replace(/\D/g,'');
        console.log(cep)
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setEstado(data.localidade)
            setRua(data.logradouro)
            setBairro(data.bairro)
            setUf(data.uf)
        })
    }

    return (
        <main className={styles.main_consulta}>
            <section className={styles.grid_consulta}>
                <div className={styles.fundo_form}>
                    <div className={styles.grid_form}>
                        <div className={styles.titulo_consulta}>
                            <h1>consulta</h1>
                        </div>
                        <form action="" className={styles.form}>
                            <div className={styles.grid_inputs}>
                                <div className={styles.input2}>
                                    <label htmlFor="">Sua condição médica:</label>
                                    <input type="text" />
                                </div>
                                <div className={styles.input2}>
                                    <label htmlFor="">Faz uso de algum medicamento:</label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className={styles.grid_inputs}>
                                <div className={styles.input}>
                                    <label htmlFor="">CEP</label>
                                    <input type="text" onChange={checkCEP} maxLength={8}/>
                                </div>
                                <div className={styles.input}>
                                    <label htmlFor="">Estado</label>
                                    <input type="text" name='estado' id='estado' value={estado}/>
                                </div>
                                <div className={styles.input}>
                                    <label htmlFor="">UF</label>
                                    <input type="text" name='uf' id='uf' value={uf}/>
                                </div>
                                
                            </div>
                            <div className={styles.grid_inputs}>
                                <div className={styles.input2}>
                                    <label htmlFor="">Bairro</label>
                                    <input type="text" name='bairro' id='bairro' value={bairro}/>
                                </div>
                                <div className={styles.input2}>
                                    <label htmlFor="">Rua</label>
                                    <input type="text" name='rua' id='rua' value={rua}/>
                                </div>
                            </div>
                            <div className={styles.grid_inputs}>
                                <div className={styles.input2}>
                                    <label htmlFor="">Numero</label>
                                    <input type="text" name='bairro' id='bairro'/>
                                </div>
                                <div className={styles.input2}>
                                    <label htmlFor="">Complemento</label>
                                    <input type="text" name='rua' id='rua'/>
                                </div>
                            </div>
                            <button className={styles.btn}>Enviar</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}