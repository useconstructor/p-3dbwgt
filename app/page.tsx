'use client'

import { FormEvent, useState } from 'react'

export default function Home() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('loading')

    const form = event.currentTarget
    const values = Object.fromEntries(new FormData(form).entries())

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CONSTRUCTOR_API}/v1/forms/${process.env.NEXT_PUBLIC_PROJECT_ID}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        },
      )

      if (!response.ok) throw new Error('No se pudo enviar el formulario')

      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-10 px-6 py-16">
      <h1 className="text-4xl font-bold">Constructor Template</h1>
      <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold">Solicita una cita</h2>
        <input
          className="w-full rounded-md border px-3 py-2"
          name="nombre"
          placeholder="Nombre completo"
          required
        />
        <input
          className="w-full rounded-md border px-3 py-2"
          name="email"
          type="email"
          placeholder="Correo electrónico"
          required
        />
        <input
          className="w-full rounded-md border px-3 py-2"
          name="telefono"
          type="tel"
          placeholder="Teléfono"
          required
        />
        <textarea
          className="min-h-28 w-full rounded-md border px-3 py-2"
          name="mensaje"
          placeholder="Cuéntanos qué tratamiento te interesa"
          required
        />
        <button
          className="w-full rounded-md bg-black px-4 py-2 text-white disabled:opacity-60"
          type="submit"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Enviando…' : 'Enviar solicitud'}
        </button>
        {status === 'success' && (
          <p role="status">Gracias. Hemos recibido tu solicitud.</p>
        )}
        {status === 'error' && (
          <p role="alert">No pudimos enviar la solicitud. Inténtalo de nuevo.</p>
        )}
      </form>
    </main>
  )
}
