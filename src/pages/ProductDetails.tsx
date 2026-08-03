import { useEffect, useMemo, useRef, useState } from 'react'
import { Container } from '../components/display/Container'
import { SectionTitle } from '../components/display/SectionTitle'
import { Button } from '../components/ui/Button'
import heroImage from '../assets/perfume-bottle.svg'

type PerformanceMetric = {
  label: string
  value: string
  height: string
}

const fragranceNotes = [
  { title: 'Top Notes', items: ['Bergamot', 'Mandarin', 'Pink Pepper'], icon: '🍋' },
  { title: 'Heart Notes', items: ['Rose', 'Jasmine', 'Iris'], icon: '🌹' },
  { title: 'Base Notes', items: ['Sandalwood', 'Cedar', 'Musk'], icon: '🌳' },
]

const performanceMetrics: PerformanceMetric[] = [
  { label: 'Longevity', value: '12+ Hours', height: '88%' },
  { label: 'Projection', value: 'High', height: '74%' },
  { label: 'Sillage', value: 'Luxurious', height: '82%' },
  { label: 'Intensity', value: 'Bold', height: '90%' },
]

const reviews = [
  {
    name: 'A. Laurent',
    role: 'Private Client',
    rating: '★★★★★',
    quote: 'A scent that carries presence without ever feeling loud.',
  },
  {
    name: 'M. Voss',
    role: 'Collector',
    rating: '★★★★★',
    quote: 'Quietly opulent. The trail feels expensive from the first moment.',
  },
]

const relatedFragrances = [
  { name: 'T-ÉLIXIR Noir', price: '299 MAD' },
  { name: 'T-ÉLIXIR Royal', price: '399 MAD' },
  { name: 'T-ÉLIXIR Gold', price: '349 MAD' },
  { name: 'T-ÉLIXIR Velvet', price: '379 MAD' },
]

export function ProductDetails() {
  const [visible, setVisible] = useState(false)
  const [pointerOffset, setPointerOffset] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const node = heroRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.18 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const bottleStyle = useMemo(
    () => ({
      transform: `translate3d(${pointerOffset.x}px, ${pointerOffset.y}px, 0) scale(1.03)`,
    }),
    [pointerOffset],
  )

  return (
    <div className="product-details-page">
      <section ref={heroRef} className={`product-hero${visible ? ' is-visible' : ''}`} aria-labelledby="product-title">
        <div className="product-hero__ambient" aria-hidden="true" />
        <Container>
          <div className="product-hero__content">
            <div className="product-hero__copy">
              <p className="product-hero__eyebrow">Maison T-ÉLIXIR</p>
              <SectionTitle id="product-title" className="product-hero__title">T-ÉLIXIR Noir</SectionTitle>
              <p className="product-hero__subtitle">Inspired by Tom Ford Ombre Leather</p>
              <p className="product-hero__description">
                A dark, sensual signature crafted for evenings steeped in intrigue, velvet shadows, and unforgettable presence.
              </p>
              <div className="product-hero__meta">
                <div>
                  <span className="product-hero__label">Price</span>
                  <p className="product-hero__value">299 MAD</p>
                </div>
                <div>
                  <span className="product-hero__label">Volume</span>
                  <p className="product-hero__value">30 ml</p>
                </div>
                <div>
                  <span className="product-hero__label">Concentration</span>
                  <p className="product-hero__value">Eau de Parfum</p>
                </div>
                <div>
                  <span className="product-hero__label">Availability</span>
                  <p className="product-hero__value">In Stock</p>
                </div>
              </div>
            </div>

            <div
              className="product-hero__visual"
              onMouseMove={(event) => {
                const rect = event.currentTarget.getBoundingClientRect()
                const x = ((event.clientX - rect.left) / rect.width - 0.5) * 12
                const y = ((event.clientY - rect.top) / rect.height - 0.5) * 10
                setPointerOffset({ x, y })
              }}
              onMouseLeave={() => setPointerOffset({ x: 0, y: 0 })}
            >
              <div className="product-hero__bottle-wrap" style={bottleStyle}>
                <img src={heroImage} alt="T-ÉLIXIR Noir bottle" className="product-hero__bottle" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="product-section product-section--notes" aria-labelledby="fragrance-pyramid-title">
        <Container>
          <div className="product-section__header">
            <p className="product-section__eyebrow">Fragrance pyramid</p>
            <SectionTitle id="fragrance-pyramid-title">Signature Notes</SectionTitle>
          </div>
          <div className="product-section__grid product-section__grid--notes">
            {fragranceNotes.map((note) => (
              <article key={note.title} className="product-card product-card--note">
                <div className="product-card__icon" aria-hidden="true">{note.icon}</div>
                <h3>{note.title}</h3>
                <ul>
                  {note.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="product-section product-section--performance" aria-labelledby="performance-title">
        <Container>
          <div className="product-section__header">
            <p className="product-section__eyebrow">Performance</p>
            <SectionTitle id="performance-title">Crafted to Last</SectionTitle>
          </div>
          <div className="product-section__grid product-section__grid--stats">
            {performanceMetrics.map((metric) => (
              <article key={metric.label} className="product-card product-card--metric">
                <div className="product-card__bar-wrap" aria-hidden="true">
                  <div className="product-card__bar" style={{ height: metric.height }} />
                </div>
                <h3>{metric.label}</h3>
                <p>{metric.value}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="product-section product-section--story" aria-labelledby="description-title">
        <Container>
          <div className="product-section__header">
            <p className="product-section__eyebrow">The composition</p>
            <SectionTitle id="description-title">An Aromatic Signature</SectionTitle>
          </div>
          <div className="product-panel">
            <p>
              Built with rare woods, refined florals, and a deep ambered warmth, this fragrance balances brooding intensity with polished elegance. It is made for those who seek a scent that leaves a lasting memory.
            </p>
            <div className="product-panel__list">
              <h3>Ingredients</h3>
              <ul>
                <li>Italian Bergamot</li>
                <li>Rose Absolute</li>
                <li>Somalian Frankincense</li>
                <li>Premium Musk</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="product-section product-section--actions" aria-labelledby="actions-title">
        <Container>
          <div className="product-section__header">
            <p className="product-section__eyebrow">Choose your experience</p>
            <SectionTitle id="actions-title">Reserve Your Bottle</SectionTitle>
          </div>
          <div className="product-actions">
            <Button variant="primary" size="lg" className="product-actions__button">Add To Cart</Button>
            <Button variant="outline" size="lg" className="product-actions__button">Buy Now</Button>
            <Button variant="secondary" size="lg" className="product-actions__button">Wishlist ♥</Button>
          </div>
        </Container>
      </section>

      <section className="product-section product-section--reviews" aria-labelledby="reviews-title">
        <Container>
          <div className="product-section__header">
            <p className="product-section__eyebrow">Client notes</p>
            <SectionTitle id="reviews-title">Reviews</SectionTitle>
          </div>
          <div className="product-section__grid product-section__grid--reviews">
            {reviews.map((review) => (
              <article key={review.name} className="product-card product-card--review">
                <div className="product-card__reviewer">
                  <div className="product-card__avatar" aria-hidden="true">{review.name.charAt(0)}</div>
                  <div>
                    <h3>{review.name}</h3>
                    <p>{review.role}</p>
                  </div>
                </div>
                <p className="product-card__rating">{review.rating}</p>
                <p>{review.quote}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="product-section product-section--related" aria-labelledby="related-title">
        <Container>
          <div className="product-section__header">
            <p className="product-section__eyebrow">Discover more</p>
            <SectionTitle id="related-title">Related Fragrances</SectionTitle>
          </div>
          <div className="product-section__grid product-section__grid--related">
            {relatedFragrances.map((item) => (
              <article key={item.name} className="product-card product-card--related">
                <div className="product-card__media">
                  <img src={heroImage} alt={item.name} className="product-card__image" />
                </div>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}
