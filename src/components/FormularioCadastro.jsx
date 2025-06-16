import { useState } from 'react'

function FormularioCadastro() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    const res = await fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    })

    const data = await res.json()

    if (res.ok) {
      alert('✅ Usuário criado com sucesso!')
    } else {
      alert(`❌ Erro: ${data.error}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Nome"
        className="w-full border p-2 rounded"
        required
      />
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
        type="email"
        className="w-full border p-2 rounded"
        required
      />
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Senha"
        type="password"
        className="w-full border p-2 rounded"
        required
      />
      <button
        type="submit"
        className="bg-yellow-400 px-4 py-2 rounded hover:bg-yellow-500"
      >
        Registrar
      </button>
    </form>
  )
}

export default FormularioCadastro
