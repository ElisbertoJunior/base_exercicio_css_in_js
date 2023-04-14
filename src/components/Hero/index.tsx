import styles from './Hero.module.css'
import { HeroContainer, HeroForm } from './styles'

const Hero = () => (
  <HeroForm>
    <HeroContainer>
      <h2 className={styles.heroTitle}>
        As melhores vagas para tecnologia, design e artes visuais.
      </h2>
    </HeroContainer>
  </HeroForm>
)

export default Hero
