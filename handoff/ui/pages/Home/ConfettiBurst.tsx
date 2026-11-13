import { useMemo, type CSSProperties } from "react"

const COLORS = ["#1769AA", "#20B8C5", "#19A974", "#F5A623"]
const PARTICLE_COUNT = 32

interface Particle {
  left: number
  color: string
  delay: number
  size: number
  x: number
  rotate: number
}

/**
 * Explosão de confete em CSS puro (sem lib de animação) — cada partícula é
 * um div posicionado via --confetti-x/--confetti-rotate (consumidos pela
 * keyframe `confetti-fall` do tailwind.config.js). Respeita
 * prefers-reduced-motion: não renderiza nada nesse caso, o troféu/mensagem
 * ainda aparecem via `celebrate-fade-in`.
 */
export function ConfettiBurst({ active }: { active: boolean }) {
  const prefersReducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
    [],
  )

  const particles = useMemo<Particle[]>(() => {
    if (!active || prefersReducedMotion) return []
    return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      left: 5 + Math.random() * 90,
      color: COLORS[i % COLORS.length],
      delay: Math.random() * 0.25,
      size: 5 + Math.random() * 4,
      x: (Math.random() - 0.5) * 170,
      rotate: 180 + Math.random() * 540 * (Math.random() > 0.5 ? 1 : -1),
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])

  if (!active || prefersReducedMotion) return null

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute top-2 rounded-sm animate-confetti-fall"
          style={
            {
              left: `${p.left}%`,
              width: p.size,
              height: p.size * 0.4,
              backgroundColor: p.color,
              animationDelay: `${p.delay}s`,
              "--confetti-x": `${p.x}px`,
              "--confetti-rotate": `${p.rotate}deg`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}
