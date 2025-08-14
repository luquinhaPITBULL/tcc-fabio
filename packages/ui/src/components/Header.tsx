import { FC } from 'react'
import { Button } from './Button'

interface NavLink {
  href: string
  label: string
}

interface HeaderProps {
  brandName?: string
  navLinks?: NavLink[]
  onLoginClick?: () => void
  isLoggedIn?: boolean
  onLogoutClick?: () => void
  LoginButton?: React.ReactNode
}

export const Header: FC<HeaderProps> = ({
  brandName = 'MuscleMax',
  navLinks = [
    { href: '/', label: 'Início' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/contato', label: 'Contato' }
  ],
  onLoginClick,
  isLoggedIn = false,
  onLogoutClick,
  LoginButton
}) => {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-5 flex justify-between items-center shadow-lg sticky top-0 z-50">
      <h1 className="text-2xl font-extrabold tracking-wide cursor-pointer select-none">
        {brandName}
      </h1>
      <nav className="space-x-6 text-lg font-medium">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
        {LoginButton || (
          <Button
            onClick={isLoggedIn ? onLogoutClick : onLoginClick}
            className="bg-yellow-400 text-blue-900 hover:bg-yellow-300"
          >
            {isLoggedIn ? 'Sair' : 'Entrar'}
          </Button>
        )}
      </nav>
    </header>
  )
}
