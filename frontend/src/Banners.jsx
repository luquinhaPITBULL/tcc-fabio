import { useState } from 'react'

export default function Banners() {
  const [banners, setBanners] = useState([])
  const [form, setForm] = useState({ title: '', subtitle: '', image: '' })
  const [editIndex, setEditIndex] = useState(null)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.title.trim() || !form.subtitle.trim() || !form.image.trim())
      return alert('Preencha todos os campos')

    if (editIndex !== null) {
      const updated = [...banners]
      updated[editIndex] = { ...form }
      setBanners(updated)
      setEditIndex(null)
    } else {
      setBanners([...banners, form])
    }
    setForm({ title: '', subtitle: '', image: '' })
  }

  function handleEdit(index) {
    setForm(banners[index])
    setEditIndex(index)
  }

  function handleDelete(index) {
    if (window.confirm('Quer mesmo deletar esse banner?')) {
      const filtered = banners.filter((_, i) => i !== index)
      setBanners(filtered)
      if (editIndex === index) {
        setEditIndex(null)
        setForm({ title: '', subtitle: '', image: '' })
      }
    }
  }

  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Banners</h2>

      <form onSubmit={handleSubmit} className="mb-6 max-w-md space-y-4 bg-white p-6 rounded-xl shadow-md">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Título do banner"
          className="input"
        />
        <input
          name="subtitle"
          value={form.subtitle}
          onChange={handleChange}
          placeholder="Subtítulo"
          className="input"
        />
        <input
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="URL da imagem"
          className="input"
        />
        <button type="submit" className="btn btn-primary">
          {editIndex !== null ? 'Atualizar Banner' : 'Adicionar Banner'}
        </button>
      </form>

      {banners.length === 0 && <p>Nenhum banner cadastrado.</p>}

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {banners.map(({ title, subtitle, image }, i) => (
          <li key={i} className="card p-4 flex flex-col">
            <img src={image} alt={title} className="rounded-lg mb-4 object-cover h-48 w-full" />
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="mb-4 text-gray-700">{subtitle}</p>
            <div className="mt-auto space-x-4">
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
