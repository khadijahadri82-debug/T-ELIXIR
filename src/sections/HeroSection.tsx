import { Button } from '../components/ui/Button'
import { Container } from '../components/display/Container'
import heroImage from '../assets/hero.png'

export function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-background" aria-hidden="true">
        <span className="hero-particle hero-particle--one" />
        <span className="hero-particle hero-particle--two" />
        <span className="hero-particle hero-particle--three" />
        <span className="hero-particle hero-particle--four" />
      </div>

      <Container>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-eyebrow">Haute perfumery reimagined</p>
            <h1 id="hero-heading" className="hero-title">
              T-ÉLIXIR
            </h1>
            <p className="hero-subtitle">A signature of rare materials and luminous finish.</p>
            <p className="hero-description">
              Discover modern perfumery crafted with velvet depth, radiant gold accents, and a sense of timeless indulgence.
            </p>
            <div className="hero-actions">
              <Button variant="primary" size="lg" className="hero-button">
                Discover Collection
              </Button>
              <Button variant="secondary" size="lg" className="hero-button hero-button--secondary">
                Explore Our Story
              </Button>
            </div>

            <div className="hero-metrics" aria-label="Luxury experience highlights">
              <div className="hero-metric">
                <span className="hero-metric__value">01</span>
                <span className="hero-metric__label">Limited release</span>
              </div>
              <div className="hero-metric">
                <span className="hero-metric__value">02</span>
                <span className="hero-metric__label">Hand-finished</span>
              </div>
              <div className="hero-metric">
                <span className="hero-metric__value">03</span>
                <span className="hero-metric__label">Private ateliers</span>
              </div>
            </div>
          </div>

          <div className="hero-media" aria-hidden="true">
            <div className="hero-media__frame">
              <img src={heroImage} alt="" className="hero-media__image" />
            </div>
            <div className="hero-media__glow" />
            <div className="hero-media__ring" />
          </div>
        </div>
      </Container>

      <div className="scroll-indicator" aria-hidden="true">
        <span className="scroll-indicator__dot" />
        <span className="scroll-indicator__label">Scroll</span>
      </div>
    </section>
  )
}
