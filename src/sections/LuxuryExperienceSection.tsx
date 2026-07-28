import { SectionTitle } from '../components/display/SectionTitle'

export function LuxuryExperienceSection() {
  return (
    <section className="luxury-experience-section" aria-labelledby="luxury-experience-title">
      <SectionTitle id="luxury-experience-title">The luxury experience</SectionTitle>
      <p className="luxury-experience-section__text">
        Discover the sensory journey at the heart of T-ÉLIXIR.
      </p>
    </section>
  )
}
