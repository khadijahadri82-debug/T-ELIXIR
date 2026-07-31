import { useEffect, useRef, useState } from 'react'
import { Container } from '../components/display/Container'
import { SectionTitle } from '../components/display/SectionTitle'
import { Button } from '../components/ui/Button'
import heroImage from '../assets/hero.png'

const products = [
  {
    name: 'T-ÉLIXIR Noir',
    inspiredBy: 'Inspired by Tom Ford Ombre Leather',
    price: '299 MAD',
  },
  {
    name: 'T-ÉLIXIR Gold',
    inspiredBy: 'Inspired by Baccarat Rouge 540',
    price: '349 MAD',
  },
  {
    name: 'T-ÉLIXIR Royal',
    inspiredBy: 'Inspired by Creed Aventus',
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
            setVisibleCards((current) => (current.includes(index) ? current : [...current, index]))
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
            <p className="featured-collection-preview__eyebrow">Curated edit</p>
            <SectionTitle id="featured-collection-title">Featured Collection</SectionTitle>
            <p className="featured-collection-preview__subtitle">
              Discover our most iconic fragrances, crafted for timeless elegance.
            </p>
          </div>
        </div>

        <div className="featured-collection-preview__grid">
          {products.map((product, index) => (
            <article
              key={product.name}
              className={`featured-collection-preview__card${visibleCards.includes(index) ? ' is-visible' : ''}`}
              data-index={index}
              ref={(element) => {
                cardRefs.current[index] = element
              }}
            >
              <div className="featured-collection-preview__media">
                <img src={heroImage} alt={product.name} className="featured-collection-preview__image" />
              </div>

              <div className="featured-collection-preview__content">
                <div>
                  <h3 className="featured-collection-preview__name">{product.name}</h3>
                  <p className="featured-collection-preview__inspired-by">{product.inspiredBy}</p>
                </div>

                <div className="featured-collection-preview__meta">
                  <span className="featured-collection-preview__price">{product.price}</span>
                  <Button variant="outline" size="md" className="featured-collection-preview__button">
                    Discover
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
