import { Home, Pizza, UtensilsCrossed } from 'lucide-react'

import { NavLink } from './nav-link'
import { Separator } from './ui/separator'

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6 ">
        <Pizza size={24} />
        <Separator orientation="vertical" className="h-6" />
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to={'/'}>
            <Home size={16} />
            Início
          </NavLink>
          <NavLink to={'/order'}>
            <UtensilsCrossed size={16} />
            Pedidos
          </NavLink>
        </nav>
      </div>
    </div>
  )
}
