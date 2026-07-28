import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'
import { Home } from '../pages/Home'
import { Collection } from '../pages/Collection'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'
import { ROUTE_PATHS } from './routes'

export function AppRouter() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path={ROUTE_PATHS.home} element={<Home />} />
          <Route path={ROUTE_PATHS.collection} element={<Collection />} />
          <Route path={ROUTE_PATHS.about} element={<About />} />
          <Route path={ROUTE_PATHS.contact} element={<Contact />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}
