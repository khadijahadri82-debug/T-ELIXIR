import { SectionTitle } from '../components/display/SectionTitle'
import { Button } from '../components/ui/Button'

export function BrandStoryPreview() {
  return (
    <section className="brand-story-preview" aria-labelledby="brand-story-title">
      <div className="section-header">
        <SectionTitle id="brand-story-title">Our story</SectionTitle>
      </div>
      <p className="brand-story-preview__text">
        A narrative of scent, craftsmanship, and modern elegance.
      </p>
      <Button variant="outline" size="md">Explore Brand Story</Button>
    </section>
  )
}
