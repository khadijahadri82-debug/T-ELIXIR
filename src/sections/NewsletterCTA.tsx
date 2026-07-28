import { SectionTitle } from '../components/display/SectionTitle'
import { Button } from '../components/ui/Button'

export function NewsletterCTA() {
  return (
    <section className="newsletter-cta" aria-labelledby="newsletter-cta-title">
      <SectionTitle id="newsletter-cta-title">Stay informed</SectionTitle>
      <p className="newsletter-cta__text">
        Be the first to receive exclusive launches and sensory updates.
      </p>
      <Button variant="outline" size="lg">Join the newsletter</Button>
    </section>
  )
}
