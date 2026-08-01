import { useEffect, useRef } from 'react'
import { HeroSection } from '../sections/HeroSection'
import { FeaturedCollectionPreview } from '../sections/FeaturedCollectionPreview'
import { BrandStoryPreview } from '../sections/BrandStoryPreview'
import { SignatureFragrancePreview } from '../sections/SignatureFragrancePreview'
import { LuxuryExperienceSection } from '../sections/LuxuryExperienceSection'
import { NewsletterCTA } from '../sections/NewsletterCTA'

export function Home() {
  const homeRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const home = homeRef.current
    if (!home || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const sections = Array.from(home.querySelectorAll<HTMLElement>(':scope > section:not(.hero-section)'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-cinematic-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8%' },
    )

    document.documentElement.classList.add('cinematic-motion-enabled')
    sections.forEach((section) => {
      section.classList.add('cinematic-reveal')
      observer.observe(section)
    })

    let frameId = 0
    const updateParallax = () => {
      const hero = home.querySelector<HTMLElement>('.hero-section')
      if (hero) {
        hero.style.setProperty('--cinematic-background-offset', `${Math.min(window.scrollY * 0.027, 14)}px`)
        hero.style.setProperty('--cinematic-glow-offset', `${Math.max(window.scrollY * -0.014, -8)}px`)
      }
      frameId = 0
    }

    const onScroll = () => {
      if (!frameId) frameId = requestAnimationFrame(updateParallax)
    }

    let pointerFrameId = 0
    let pointerX = 0
    let pointerY = 0
    const updatePointerLight = () => {
      home.style.setProperty('--cinematic-pointer-x', `${pointerX}px`)
      home.style.setProperty('--cinematic-pointer-y', `${pointerY}px`)
      pointerFrameId = 0
    }

    const onPointerMove = (event: PointerEvent) => {
      pointerX = ((event.clientX / window.innerWidth) - 0.5) * 14
      pointerY = ((event.clientY / window.innerHeight) - 0.5) * 10
      if (!pointerFrameId) pointerFrameId = requestAnimationFrame(updatePointerLight)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    updateParallax()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('pointermove', onPointerMove)
      if (frameId) cancelAnimationFrame(frameId)
      if (pointerFrameId) cancelAnimationFrame(pointerFrameId)
      document.documentElement.classList.remove('cinematic-motion-enabled')
    }
  }, [])

  return (
    <div ref={homeRef} className="home-experience">
      <HeroSection />
      <FeaturedCollectionPreview />
      <LuxuryExperienceSection />
      <BrandStoryPreview />
      <SignatureFragrancePreview />
      <NewsletterCTA />
    </div>
  )
}
