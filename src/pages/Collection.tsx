import { useMemo, useState } from 'react'
import { Container } from '../components/display/Container'
import { SearchInput } from '../components/forms/SearchInput'
import { Select } from '../components/forms/Select'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Chip } from '../components/ui/Chip'
import { IconButton } from '../components/ui/IconButton'
import heroImage from '../assets/perfume-bottle.svg'

type CollectionFilter = 'All' | 'Men' | 'Women' | 'Unisex' | 'Limited Edition' | 'Best Sellers' | 'New Arrivals'
type SortOption = 'newest' | 'price-ascending' | 'price-descending' | 'rating' | 'popular'

interface Fragrance {
  id: string
  name: string
  inspiredBy: string
  price: number
  categories: Exclude<CollectionFilter, 'All'>[]
  rating: number
  popularity: number
  launchOrder: number
}

const filters: CollectionFilter[] = ['All', 'Men', 'Women', 'Unisex', 'Limited Edition', 'Best Sellers', 'New Arrivals']

const fragrances: Fragrance[] = [
  { id: 'noir', name: 'T-ÉLIXIR Noir', inspiredBy: 'Inspired by Tom Ford Ombre Leather', price: 299, categories: ['Men', 'Unisex', 'Best Sellers'], rating: 4.9, popularity: 98, launchOrder: 5 },
  { id: 'royal', name: 'T-ÉLIXIR Royal', inspiredBy: 'Inspired by Creed Aventus', price: 399, categories: ['Men', 'Best Sellers'], rating: 4.8, popularity: 96, launchOrder: 4 },
  { id: 'gold', name: 'T-ÉLIXIR Gold', inspiredBy: 'Inspired by Baccarat Rouge 540', price: 349, categories: ['Women', 'Unisex', 'Best Sellers'], rating: 4.9, popularity: 99, launchOrder: 8 },
  { id: 'velvet', name: 'T-ÉLIXIR Velvet', inspiredBy: 'Inspired by Maison Francis Kurkdjian Oud Satin Mood', price: 379, categories: ['Women', 'Unisex', 'Limited Edition'], rating: 4.7, popularity: 88, launchOrder: 3 },
  { id: 'imperial', name: 'T-ÉLIXIR Imperial', inspiredBy: 'Inspired by Louis Vuitton Imagination', price: 419, categories: ['Men', 'New Arrivals'], rating: 4.8, popularity: 92, launchOrder: 7 },
  { id: 'eclipse', name: 'T-ÉLIXIR Éclipse', inspiredBy: 'Inspired by Chanel Bleu de Chanel', price: 329, categories: ['Men', 'Unisex'], rating: 4.6, popularity: 84, launchOrder: 2 },
  { id: 'mystic', name: 'T-ÉLIXIR Mystic', inspiredBy: 'Inspired by Dior Ambre Nuit', price: 389, categories: ['Women', 'Unisex', 'Limited Edition'], rating: 4.8, popularity: 90, launchOrder: 6 },
  { id: 'infinity', name: 'T-ÉLIXIR Infinity', inspiredBy: 'Inspired by Byredo Bal d’Afrique', price: 359, categories: ['Women', 'Unisex', 'New Arrivals'], rating: 4.7, popularity: 91, launchOrder: 1 },
]

const sorters: Record<SortOption, (left: Fragrance, right: Fragrance) => number> = {
  newest: (left, right) => right.launchOrder - left.launchOrder,
  'price-ascending': (left, right) => left.price - right.price,
  'price-descending': (left, right) => right.price - left.price,
  rating: (left, right) => right.rating - left.rating,
  popular: (left, right) => right.popularity - left.popularity,
}

export function Collection() {
  const [activeFilter, setActiveFilter] = useState<CollectionFilter>('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOption, setSortOption] = useState<SortOption>('newest')
  const [wishlistedProducts, setWishlistedProducts] = useState<Set<string>>(() => new Set())

  const visibleFragrances = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLocaleLowerCase()

    return fragrances
      .filter((fragrance) => activeFilter === 'All' || fragrance.categories.includes(activeFilter))
      .filter((fragrance) => !normalizedSearch || `${fragrance.name} ${fragrance.inspiredBy}`.toLocaleLowerCase().includes(normalizedSearch))
      .toSorted(sorters[sortOption])
  }, [activeFilter, searchTerm, sortOption])

  const toggleWishlist = (productId: string) => {
    setWishlistedProducts((current) => {
      const next = new Set(current)
      if (next.has(productId)) next.delete(productId)
      else next.add(productId)
      return next
    })
  }

  return (
    <div className="collection-page">
      <section className="collection-page__hero" aria-labelledby="collection-page-title">
        <div className="collection-page__hero-atmosphere" aria-hidden="true">
          <span className="collection-page__particle collection-page__particle--one" />
          <span className="collection-page__particle collection-page__particle--two" />
          <span className="collection-page__particle collection-page__particle--three" />
        </div>
        <Container>
          <div className="collection-page__hero-content">
            <p className="collection-page__eyebrow">Haute parfumerie</p>
            <h1 id="collection-page-title" className="collection-page__title">The Collection</h1>
            <p className="collection-page__lead">
              Discover every creation of the House of T-ÉLIXIR. Each fragrance is crafted to become an unforgettable signature.
            </p>
          </div>
        </Container>
      </section>

      <section className="collection-page__catalogue" aria-label="T-ÉLIXIR fragrance catalogue">
        <Container>
          <div className="collection-page__controls">
            <div className="collection-page__filters" aria-label="Filter fragrances">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={`collection-page__filter${activeFilter === filter ? ' is-active' : ''}`}
                  aria-pressed={activeFilter === filter}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="collection-page__utility-row">
              <SearchInput
                label="Search fragrances"
                placeholder="Search your fragrance..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="collection-page__search"
              />
              <Select
                label="Sort fragrances"
                value={sortOption}
                onChange={(event) => setSortOption(event.target.value as SortOption)}
                className="collection-page__sort"
              >
                <option value="newest">Newest</option>
                <option value="price-ascending">Price Low → High</option>
                <option value="price-descending">Price High → Low</option>
                <option value="rating">Best Rated</option>
                <option value="popular">Most Popular</option>
              </Select>
            </div>
          </div>

          <p className="collection-page__results" aria-live="polite">{visibleFragrances.length} creations selected</p>

          <div className="collection-page__grid">
            {visibleFragrances.map((fragrance) => {
              const isWishlisted = wishlistedProducts.has(fragrance.id)

              return (
                <Card as="article" key={fragrance.id} className="collection-card">
                  <div className="collection-card__media">
                    <Chip className="collection-card__size">30 ml</Chip>
                    <IconButton
                      icon={<span aria-hidden="true">{isWishlisted ? '♥' : '♡'}</span>}
                      label={isWishlisted ? `Remove ${fragrance.name} from wishlist` : `Add ${fragrance.name} to wishlist`}
                      aria-pressed={isWishlisted}
                      className={`collection-card__wishlist${isWishlisted ? ' is-active' : ''}`}
                      onClick={() => toggleWishlist(fragrance.id)}
                    />
                    <img src={heroImage} alt={fragrance.name} className="collection-card__image" loading="lazy" />
                  </div>

                  <div className="collection-card__content">
                    <div>
                      <h2 className="collection-card__name">{fragrance.name}</h2>
                      <p className="collection-card__inspiration">{fragrance.inspiredBy}</p>
                    </div>
                    <div className="collection-card__purchase">
                      <span className="collection-card__price">{fragrance.price} MAD</span>
                      <div className="collection-card__actions">
                        <Button variant="primary" size="sm" className="collection-card__add">Add to Cart</Button>
                        <Button variant="outline" size="sm" className="collection-card__quick-view">Quick View</Button>
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          {!visibleFragrances.length && (
            <p className="collection-page__empty">No fragrance matches this selection.</p>
          )}
        </Container>
      </section>
    </div>
  )
}
