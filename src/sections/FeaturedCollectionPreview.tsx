import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { Container } from '../components/display/Container'
import { SectionTitle } from '../components/display/SectionTitle'
import { Button } from '../components/ui/Button'
import heroImage from '../assets/hero.png'

const products = [
  {
    name: 'T-ÉLIXIR Noir',
    inspiredBy: 'Inspired by Tom Ford Ombre Leather',
    volume: '30 ml',
    concentration: 'Eau de Parfum',
    price: '299 MAD',
  },
  {
    name: 'T-ÉLIXIR Gold',
    inspiredBy: 'Inspired by Baccarat Rouge 540',
    volume: '30 ml',
    concentration: 'Eau de Parfum',
    price: '349 MAD',
  },
  {
    name: 'T-ÉLIXIR Royal',
    inspiredBy: 'Inspired by Creed Aventus',
    volume: '30 ml',
    concentration: 'Eau de Parfum',
    price: '399 MAD',
  },
]

export function FeaturedCollectionPreview() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const cardRefs = useRef<Array<HTMLElement | null>>([])

  useEffect(() => {
    const elements = cardRefs.current.filter(Boolean) as HTMLElement[]
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'))
            setVisibleCards((current: number[]) => (current.includes(index) ? current : [...current, index]))
          }
        })
      },
      { threshold: 0.2 },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="featured-collection-preview" aria-labelledby="featured-collection-title">
      <Container>
        <div className="section-header featured-collection-preview__header">
          <div className="featured-collection-preview__intro">
            <p className="featured-collection-preview__eyebrow">The house selection</p>
            <SectionTitle id="featured-collection-title">Featured Collection</SectionTitle>
            <p className="featured-collection-preview__subtitle">
              Discover our most iconic fragrances, crafted for timeless elegance.
            </p>
          </div>
        </div>

        <div className="featured-collection-preview__grid">
          {products.map((product, index) => {
            const isVisible = visibleCards.includes(index)

            return (
              <article
                key={product.name}
                className={`featured-collection-preview__card${isVisible ? ' is-visible' : ''}`}
                data-index={index}
                ref={(element) => {
                  cardRefs.current[index] = element
                }}
                style={{
                  transition: 'transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease',
                  transform: isVisible ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: isVisible
                    ? '0 24px 60px rgba(12, 12, 12, 0.22)'
                    : '0 16px 38px rgba(12, 12, 12, 0.12)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 100%)',
                } as CSSProperties}
              >
                <div className="featured-collection-preview__media" style={{ position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={heroImage}
                    alt={product.name}
                    className="featured-collection-preview__image"
                    style={{ transition: 'transform 0.4s ease', transform: isVisible ? 'scale(1.04)' : 'scale(1)' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.28) 100%)',
                      pointerEvents: 'none',
                    }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      padding: '0.35rem 0.7rem',
                      borderRadius: '999px',
                      fontSize: '0.7rem',
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      background: 'rgba(255,255,255,0.14)',
                      color: '#f7efe7',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    Signature
                  </span>
                </div>

                <div className="featured-collection-preview__content" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    <h3 className="featured-collection-preview__name" style={{ margin: 0 }}>
                      {product.name}
                    </h3>
                    <p className="featured-collection-preview__inspired-by" style={{ margin: 0 }}>
                      {product.inspiredBy}
                    </p>
                    <p className="featured-collection-preview__specification" style={{ margin: 0 }}>
                      {product.volume}
                      <span aria-hidden="true"> · </span>
                      {product.concentration}
                    </p>
                  </div>

                  <div className="featured-collection-preview__meta" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.9rem' }}>
                    <span className="featured-collection-preview__price" style={{ fontSize: '1.2rem', fontWeight: 700 }}>
                      {product.price}
                    </span>
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                      <Button
                        variant="outline"
                        size="md"
                        className="featured-collection-preview__button"
                        style={{
                          borderColor: 'rgba(255,255,255,0.28)',
                          color: '#f7efe7',
                          background: 'rgba(255,255,255,0.05)',
                          transition: 'transform 0.25s ease, background 0.25s ease',
                        }}
                      >
                        View Details
                      </Button>
                      <Button
                        variant="primary"
                        size="md"
                        className="featured-collection-preview__button"
                        style={{
                          background: 'linear-gradient(135deg, #b88b4a 0%, #d9b06a 100%)',
                          border: '1px solid rgba(255,255,255,0.18)',
                          color: '#171717',
                          fontWeight: 700,
                          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                        }}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
