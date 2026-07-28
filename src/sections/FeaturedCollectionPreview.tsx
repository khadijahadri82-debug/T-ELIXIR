import { SectionTitle } from '../components/display/SectionTitle'
import { Button } from '../components/ui/Button'

export function FeaturedCollectionPreview() {
  return (
    <section className="featured-collection-preview" aria-labelledby="featured-collection-title">
      <div className="section-header">
        <SectionTitle id="featured-collection-title">Featured collection</SectionTitle>
        <Button variant="ghost" size="md">View Collection</Button>
      </div>
      <div className="featured-collection-preview__grid" aria-hidden="true">
        <div className="featured-collection-preview__card" />
        <div className="featured-collection-preview__card" />
      </div>
    </section>
  )
}
