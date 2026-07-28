import { ReactNode } from 'react'
import { Navbar } from '../components/navigation/Navbar'
import { Footer } from '../components/navigation/Footer'
import { NavLink } from '../components/navigation/NavLink'
import { Container } from '../components/display/Container'
import { Button } from '../components/ui/Button'

interface MainLayoutProps {
  children: ReactNode
}

function AnnouncementBar() {
  return (
    <section className="announcement-bar" aria-label="Site announcement">
      <Container>
        <p>Experience T-ÉLIXIR worldwide — the art of couture fragrance.</p>
      </Container>
    </section>
  )
}

function HeaderNavigation() {
  return (
    <header className="site-header" aria-label="Primary site navigation">
      <Container>
        <div className="header-top">
          <div className="brand-area" aria-label="Brand identity">
            <NavLink href="/" className="brand-logo">
              T-ÉLIXIR
            </NavLink>
          </div>

          <div className="header-actions">
            <Button variant="ghost" size="sm" aria-label="Search" className="header-action-button">
              Search
            </Button>
            <Button variant="ghost" size="sm" aria-label="Wishlist" className="header-action-button">
              Wishlist
            </Button>
            <Button variant="ghost" size="sm" aria-label="Cart" className="header-action-button">
              Cart
            </Button>
            <Button variant="ghost" size="sm" aria-label="Account" className="header-action-button">
              Account
            </Button>
          </div>
        </div>

        <Navbar className="desktop-navigation" aria-label="Desktop navigation">
          <div className="navigation-links">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/collection">Collection</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>

          <div className="mobile-navigation">
            <Button variant="outline" size="sm" aria-label="Open mobile menu">
              Menu
            </Button>
          </div>
        </Navbar>
      </Container>
    </header>
  )
}

function ScrollProgressBar() {
  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress__bar" />
    </div>
  )
}

function FooterLayout() {
  return (
    <Footer className="site-footer">
      <Container>
        <div className="footer-grid">
          <div className="footer-section footer-section--brand">
            <p className="footer-brand">T-ÉLIXIR</p>
            <p className="footer-copy">Crafted for the modern connoisseur of scent.</p>
          </div>

          <div className="footer-section footer-section--collections">
            <p className="footer-title">Collections</p>
            <NavLink href="/collection">Fragrances</NavLink>
            <NavLink href="/collection">Limited Editions</NavLink>
            <NavLink href="/collection">New Arrivals</NavLink>
          </div>

          <div className="footer-section footer-section--company">
            <p className="footer-title">Company</p>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <NavLink href="#">Careers</NavLink>
          </div>

          <div className="footer-section footer-section--support">
            <p className="footer-title">Support</p>
            <NavLink href="#">Customer Care</NavLink>
            <NavLink href="#">Shipping</NavLink>
            <NavLink href="#">Returns</NavLink>
          </div>

          <div className="footer-section footer-section--social">
            <p className="footer-title">Connect</p>
            <NavLink href="#">Instagram</NavLink>
            <NavLink href="#">LinkedIn</NavLink>
            <NavLink href="#">Pinterest</NavLink>
          </div>

          <div className="footer-section footer-section--newsletter">
            <p className="footer-title">Newsletter</p>
            <p>Stay informed on launches and experiences.</p>
            <form className="footer-newsletter" aria-label="Newsletter subscription">
              <input type="email" placeholder="Email address" aria-label="Newsletter email address" />
              <Button type="button" variant="primary" size="sm">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} T-ÉLIXIR. All rights reserved.</p>
          <div className="footer-legal">
            <NavLink href="#">Privacy</NavLink>
            <NavLink href="#">Terms</NavLink>
            <NavLink href="#">Accessibility</NavLink>
          </div>
        </div>
      </Container>
    </Footer>
  )
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="app-shell">
      <a href="#top" className="skip-link">
        Skip to content
      </a>

      <div id="top" />
      <AnnouncementBar />
      <HeaderNavigation />
      <ScrollProgressBar />

      <main className="main-content" aria-label="Page content">
        <Container>{children}</Container>
      </main>

      <FooterLayout />
    </div>
  )
}
