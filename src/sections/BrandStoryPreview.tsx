import { Container } from '../components/display/Container'
import { SectionTitle } from '../components/display/SectionTitle'
import { Button } from '../components/ui/Button'
import heroImage from '../assets/hero.png'

export function BrandStoryPreview() {
  return (
    <section className="brand-story-preview" aria-labelledby="brand-story-title">
      <Container>
        <div className="brand-story-preview__grid">
          <div className="brand-story-preview__media">
            <div className="brand-story-preview__frame">
              <img src={heroImage} alt="T-ÉLIXIR fragrance bottle" className="brand-story-preview__image" />
            </div>
          </div>

          <div className="brand-story-preview__content">
            <p className="brand-story-preview__eyebrow">A modern maison</p>
            <SectionTitle id="brand-story-title">The House of T-ÉLIXIR</SectionTitle>
            <p className="brand-story-preview__text">
              Born from a devotion to rare materials and French inspiration, T-ÉLIXIR unites modern craftsmanship
              with timeless elegance. Each composition is designed as an intimate signature: precise, expressive and
              made to endure long after the first impression.
            </p>
            <Button variant="outline" size="md" className="brand-story-preview__button">Discover Our Story</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
