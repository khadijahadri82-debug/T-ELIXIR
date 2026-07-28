import { Button } from '../components/ui/Button'
import { Container } from '../components/display/Container'

export function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <Container>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-eyebrow">Haute perfumery reimagined</p>
            <h1 id="hero-heading" className="hero-title">
              T-ÉLIXIR
            </h1>
            <p className="hero-subtitle">Luxury in Every Drop.</p>
            <p className="hero-description">
              A timeless celebration of haute perfumery, crafted for a modern sensibility.
            </p>
            <div className="hero-actions">
              <Button variant="primary" size="lg">Discover Collection</Button>
              <Button variant="secondary" size="lg">Explore Our Story</Button>
            </div>
          </div>

          <div className="hero-media" aria-hidden="true">
            <div className="hero-media__placeholder">
              <div className="hero-media__highlight" />
              <div className="hero-media__frame" />
            </div>
          </div>
        </div>
      </Container>

      <div className="hero-decoratives" aria-hidden="true">
        <span className="hero-decorative hero-decorative--soft" />
        <span className="hero-decorative hero-decorative--glow" />
        <span className="hero-decorative hero-decorative--light" />
      </div>

      <div className="scroll-indicator" aria-hidden="true">
        <span className="scroll-indicator__dot" />
      </div>
    </section>
  )
}
