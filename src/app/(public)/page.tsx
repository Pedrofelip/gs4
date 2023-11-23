import styles from './page.module.css'
import Header from '../components/header/Header'
import Link from 'next/link'
import Card from '../components/card/Card'
import Footer from '../components/footer/footer'
import imgCard from '../../../public/medicoEpaciente.jpg'

export default function Home() {
  return (
    <main>
      <Header></Header>
      <section className={styles.section1}>
        <div className={styles.grid_section1}>
          <div className={styles.img_section1}> </div>
          <div className={styles.grid_txt_section1}>
            <h2>titulo</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam non expedita, saepe voluptatibus tempore culpa nobis aliquid eum recusandae delectus, ad deleniti? Quis, maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, non atque aperiam saepe vitae pariatur et iusto deserunt ex! Magnam voluptates harum illum voluptatem eveniet!</p>
            <div className={styles.grid_btns_section1}>
              <Link href='/login' className={styles.btn1_section1}>Login</Link>
              <Link href='/cadastrar' className={styles.btn2_section1}>Cadastrar</Link>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section2}>
        <div className={styles.grid_section2}>
          <h2>Sobre Nós</h2>
          <p>O Derma Scan é uma inovadora solução de saúde que utiliza inteligência artificial avançada para a detecção precoce de câncer de pele. Diante do desafio de moldar o futuro da saúde, nosso projeto se destaca ao integrar tecnologias emergentes, como análise de dados, inteligência artificial e automação, para promover a prevenção eficaz, tornar a assistência médica mais acessível e proporcionar diagnósticos precisos.</p>
        </div>
      </section>
      <section className={styles.section3}>
        <div className={styles.grid_section3}>
          <h2>titulo</h2>
          <div className={styles.grid_card}>
            <Card img = '' titulo='titulo' texto='texto'></Card>
            <Card img = '' titulo='titulo' texto='texto'></Card>
            <Card img = '' titulo='titulo' texto='texto'></Card>
            <Card img = '' titulo='titulo' texto='texto'></Card>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </main>
  )
}
