import { FC, FormEvent } from 'react'
import { Input } from './Input'
import { Button } from './Button'

interface LoginFormProps {
  onSubmit: (email: string, password: string) => Promise<void>
  isLoading?: boolean
}

export const LoginForm: FC<LoginFormProps> = ({ onSubmit, isLoading = false }) => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const email = (form.elements.namedItem('email') as HTMLInputElement).value
    const password = (form.elements.namedItem('password') as HTMLInputElement).value
    await onSubmit(email, password)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div className="space-y-2">
        <Input
          name="email"
          type="email"
          placeholder="Email"
          required
          autoComplete="email"
        />
      </div>
      <div className="space-y-2">
        <Input
          name="password"
          type="password"
          placeholder="Senha"
          required
          autoComplete="current-password"
        />
      </div>
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900"
      >
        {isLoading ? 'Entrando...' : 'Login'}
      </Button>
    </form>
  )
}
