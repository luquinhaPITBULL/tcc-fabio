import { FC } from 'react'
import { Button } from './Button'

interface BannerProps {
  title?: string
  description?: string
  ctaText?: string
  onCtaClick?: () => void
}

export const Banner: FC<BannerProps> = ({
  title = 'Transforme seu treino com inteligência',
  description = 'IA + Realidade Aumentada para treinos personalizados e resultados surpreendentes.',
  ctaText = 'Comece Agora',
  onCtaClick
}) => {
  return (
    <section className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-blue-900 text-center py-16 px-6 rounded-lg mx-auto max-w-5xl shadow-lg">
      <h2 className="text-4xl font-extrabold mb-4 leading-tight">
        {title}
      </h2>
      <p className="text-lg mb-8 max-w-xl mx-auto">
        {description}
      </p>
      <Button
        onClick={onCtaClick}
        variant="default"
        size="lg"
        className="bg-blue-900 text-yellow-400 hover:bg-blue-800"
      >
        {ctaText}
      </Button>
    </section>
  )
}
