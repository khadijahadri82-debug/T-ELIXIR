import { ROUTE_PATHS } from '../router/routes'

export function Navbar() {
  return (
    <nav aria-label="Primary navigation">
      <a href={ROUTE_PATHS.home}>Home</a>
      <a href={ROUTE_PATHS.collection}>Collection</a>
      <a href={ROUTE_PATHS.about}>About</a>
      <a href={ROUTE_PATHS.contact}>Contact</a>
    </nav>
  )
}
