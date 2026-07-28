import { HeroSection } from '../sections/HeroSection'
import { FeaturedCollectionPreview } from '../sections/FeaturedCollectionPreview'
import { BrandStoryPreview } from '../sections/BrandStoryPreview'
import { SignatureFragrancePreview } from '../sections/SignatureFragrancePreview'
import { LuxuryExperienceSection } from '../sections/LuxuryExperienceSection'
import { NewsletterCTA } from '../sections/NewsletterCTA'

export function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCollectionPreview />
      <BrandStoryPreview />
      <SignatureFragrancePreview />
      <LuxuryExperienceSection />
      <NewsletterCTA />
    </>
  )
}
