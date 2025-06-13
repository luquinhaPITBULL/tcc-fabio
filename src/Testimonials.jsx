import { useState } from 'react'

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([])
  const [form, setForm] = useState({ name: '', message: '' })
  const [editIndex, setEditIndex] = useState(null)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.name.trim() || !form.message.trim()) return alert('Preencha todos os campos')

    if (editIndex !== null) {
      // editar
      const updated = [...testimonials]
      updated[editIndex] = { ...form }
      setTestimonials(updated)
      setEditIndex(null)
    } else {
      // adicionar novo
      setTestimonials([...testimonials, form])
    }
    setForm({ name: '', message: '' })
  }

  function handleEdit(index) {
    setForm(testimonials[index])
    setEditIndex(index)
  }

  function handleDelete(index) {
    if (window.confirm('Quer mesmo deletar esse depoimento?')) {
      const filtered = testimonials.filter((_, i) => i !== index)
      setTestimonials(filtered)
      if (editIndex === index) {
        setEditIndex(null)
        setForm({ name: '', message: '' })
      }
    }
  }

  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Testemunhos</h2>

      <form onSubmit={handleSubmit} className="mb-6 max-w-md space-y-4 bg-white p-6 rounded-xl shadow-md">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Seu nome"
          className="input"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Seu depoimento"
          rows={4}
          className="input resize-none"
        />
        <button type="submit" className="btn btn-primary">
          {editIndex !== null ? 'Atualizar Depoimento' : 'Adicionar Depoimento'}
        </button>
      </form>

      {testimonials.length === 0 && <p>Nenhum depoimento cadastrado.</p>}

      <ul>
        {testimonials.map(({ name, message }, i) => (
          <li key={i} className="card mb-4">
            <p className="italic">"{message}"</p>
            <p className="mt-2 font-semibold">- {name}</p>
            <div className="mt-2 space-x-4">
              <button
                onClick={() => handleEdit(i)}
                className="btn btn-secondary"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(i)}
                className="btn btn-secondary bg-red-600 hover:bg-red-700"
              >
                Deletar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
