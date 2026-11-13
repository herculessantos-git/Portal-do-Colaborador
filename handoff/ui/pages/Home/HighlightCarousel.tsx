import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import bannerAchievement from "../../assets/banners/banner-achievement.jpg"
import bannerCareers from "../../assets/banners/banner-careers.jpg"
import bannerEvent from "../../assets/banners/banner-event.jpg"

interface Slide {
  id: string
  image: string
  eyebrow: string
  title: string
  description: string
  cta: string
  to: string
}

// Reaproveita comunicados que já existem nos dados — o carrossel não
// inventa conteúdo novo, só dá um destaque visual a algo que o colaborador
// já pode abrir e ler por inteiro.
const SLIDES: Slide[] = [
  {
    id: "event",
    image: bannerEvent,
    eyebrow: "Evento Nexify",
    title: "Confraternização de fim de ano",
    description: "12 de dezembro, a partir das 19h — Vila Rooftop. Confirme presença até 28/11.",
    cta: "Ver detalhes",
    to: "/comunicacao/c007",
  },
  {
    id: "careers",
    image: bannerCareers,
    eyebrow: "Oportunidade interna",
    title: "Vagas abertas no time de Dados",
    description: "3 posições — colaboradores em transição de carreira interna têm prioridade.",
    cta: "Ver comunicado",
    to: "/comunicacao/c006",
  },
  {
    id: "achievement",
    image: bannerAchievement,
    eyebrow: "Resultado da pesquisa",
    title: "87% de participação na pesquisa de clima",
    description: "Recorde histórico de engajamento — confira os destaques por área.",
    cta: "Ver resultado",
    to: "/comunicacao/c003",
  },
]

const AUTO_ADVANCE_MS = 6000

export function HighlightCarousel() {
  const navigate = useNavigate()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length)
    }, AUTO_ADVANCE_MS)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [paused])

  const goTo = (i: number) => setIndex((i + SLIDES.length) % SLIDES.length)

  return (
    <div
      className="relative w-full overflow-hidden rounded-md mb-8 h-64 sm:h-72"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role="region"
      aria-roledescription="carrossel"
      aria-label="Destaques da Nexify"
    >
      {SLIDES.map((s, i) => (
        <button
          key={s.id}
          onClick={() => navigate(s.to)}
          aria-hidden={i !== index}
          tabIndex={i === index ? 0 : -1}
          className={`absolute inset-0 w-full h-full text-left transition-opacity duration-500 ${
            i === index ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
          }`}
        >
          <img
            src={s.image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
          />
          {/* Sombra concentrada nos 40% da esquerda (onde o texto fica) e
              esvaziando logo depois — mais escura perto da borda do que a
              versão antiga, que espalhava um tom fraco até 80% da imagem. */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(8,16,26,0.78) 0%, rgba(8,16,26,0.65) 40%, rgba(8,16,26,0) 65%)",
            }}
            aria-hidden="true"
          />

          <div className="relative h-full flex flex-col justify-center gap-1.5 px-6 sm:px-8 max-w-[70%] sm:max-w-[60%]">
            <span className="text-xs font-semibold uppercase tracking-wide text-cyan">
              {s.eyebrow}
            </span>
            <h2 className="text-lg sm:text-xl text-white leading-snug">{s.title}</h2>
            <p className="text-sm text-white/80 line-clamp-2">{s.description}</p>
            <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan w-fit">
              {s.cta}
              <ArrowRight size={16} />
            </span>
          </div>
        </button>
      ))}

      {/* controles */}
      <button
        onClick={() => goTo(index - 1)}
        aria-label="Destaque anterior"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/25 text-white hover:bg-black/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={() => goTo(index + 1)}
        aria-label="Próximo destaque"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/25 text-white hover:bg-black/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <ChevronRight size={18} />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            aria-label={`Ir para o destaque ${i + 1}: ${s.title}`}
            aria-current={i === index}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-5 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
