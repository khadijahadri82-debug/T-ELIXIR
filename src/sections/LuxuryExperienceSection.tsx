import { useEffect, useRef, useState } from 'react'
import { Container } from '../components/display/Container'
import { SectionTitle } from '../components/display/SectionTitle'

const experiences = [
  {
    icon: '◇',
    title: 'Rare Ingredients',
    description: 'Oud, amber, saffron, rose, leather and musk are selected for depth, texture and distinction.',
  },
  {
    icon: '✦',
    title: 'Handcrafted',
    description: 'Small-batch composition, precise bottle finishing and an uncompromising eye for every detail.',
  },
  {
    icon: '∞',
    title: 'Signature Performance',
    description: 'Exceptional projection, lasting presence, premium oils and a luxurious concentration.',
  },
]

const statistics = [
  { value: 15, suffix: '+', label: 'Luxury Fragrances' },
  { value: 98, suffix: '%', label: 'Customer Satisfaction' },
  { value: 100, suffix: '%', label: 'Premium Oils' },
  { value: 24, suffix: 'H+', label: 'Average Longevity' },
]

export function LuxuryExperienceSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState(() => statistics.map(() => 0))

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 1300
    const startedAt = performance.now()
    let frameId = 0

    const updateCounts = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      setCounts(statistics.map((statistic) => Math.round(statistic.value * easedProgress)))

      if (progress < 1) frameId = requestAnimationFrame(updateCounts)
    }

    frameId = requestAnimationFrame(updateCounts)
    return () => cancelAnimationFrame(frameId)
  }, [isVisible])

  return (
    <section
      ref={sectionRef}
      className={`luxury-experience-section${isVisible ? ' is-visible' : ''}`}
      aria-labelledby="luxury-experience-title"
    >
      <div className="luxury-experience-section__atmosphere" aria-hidden="true">
        <span className="luxury-experience-section__particle luxury-experience-section__particle--one" />
        <span className="luxury-experience-section__particle luxury-experience-section__particle--two" />
        <span className="luxury-experience-section__particle luxury-experience-section__particle--three" />
      </div>

      <Container>
        <header className="luxury-experience-section__header">
          <p className="luxury-experience-section__eyebrow">The T-ÉLIXIR standard</p>
          <SectionTitle id="luxury-experience-title">The Luxury Experience</SectionTitle>
          <p className="luxury-experience-section__text">
            Every fragrance is crafted through rare ingredients, timeless artistry, and obsessive attention to detail.
          </p>
        </header>

        <div className="luxury-experience-section__cards">
          {experiences.map((experience) => (
            <article key={experience.title} className="luxury-experience-section__card">
              <span className="luxury-experience-section__icon" aria-hidden="true">{experience.icon}</span>
              <h3>{experience.title}</h3>
              <p>{experience.description}</p>
            </article>
          ))}
        </div>

        <dl className="luxury-experience-section__statistics" aria-label="T-ÉLIXIR house standards">
          {statistics.map((statistic, index) => (
            <div key={statistic.label} className="luxury-experience-section__statistic">
              <dt>{statistic.label}</dt>
              <dd>{counts[index]}{statistic.suffix}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
