import type { Question } from "../../types"

type AnswerValue = string | string[] | number | undefined

export function QuestionField({
  question,
  value,
  onChange,
}: {
  question: Question
  value: AnswerValue
  onChange: (value: AnswerValue) => void
}) {
  if (question.type === "radio") {
    return (
      <div className="flex flex-col gap-2">
        {question.options?.map((option) => {
          const checked = value === option.id
          return (
            <label
              key={option.id}
              className={`flex items-center gap-3 rounded-sm border px-4 py-3 cursor-pointer transition-colors ${
                checked
                  ? "border-primary bg-primary/5 dark:bg-primary/10"
                  : "border-border hover:border-primary/40 dark:border-border-dark"
              }`}
            >
              <input
                type="radio"
                name={question.id}
                checked={checked}
                onChange={() => onChange(option.id)}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-sm text-text-primary dark:text-text-primary-dark">
                {option.label}
              </span>
            </label>
          )
        })}
      </div>
    )
  }

  if (question.type === "checkbox") {
    const selected = Array.isArray(value) ? value : []
    const toggle = (optionId: string) => {
      if (selected.includes(optionId)) {
        onChange(selected.filter((id) => id !== optionId))
      } else {
        onChange([...selected, optionId])
      }
    }
    return (
      <div className="flex flex-col gap-2">
        {question.options?.map((option) => {
          const checked = selected.includes(option.id)
          return (
            <label
              key={option.id}
              className={`flex items-center gap-3 rounded-sm border px-4 py-3 cursor-pointer transition-colors ${
                checked
                  ? "border-primary bg-primary/5 dark:bg-primary/10"
                  : "border-border hover:border-primary/40 dark:border-border-dark"
              }`}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => toggle(option.id)}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-sm text-text-primary dark:text-text-primary-dark">
                {option.label}
              </span>
            </label>
          )
        })}
      </div>
    )
  }

  // scale
  const min = question.scaleMin ?? 1
  const max = question.scaleMax ?? 5
  const options = Array.from({ length: max - min + 1 }, (_, i) => min + i)
  const selectedScale = typeof value === "number" ? value : undefined

  return (
    <div>
      <div className="flex items-center gap-2 sm:gap-3">
        {options.map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => onChange(n)}
            className={`flex-1 h-12 rounded-sm border text-sm font-semibold transition-colors ${
              selectedScale === n
                ? "border-primary bg-primary text-white"
                : "border-border text-text-primary hover:border-primary/50 dark:border-border-dark dark:text-text-primary-dark"
            }`}
          >
            {n}
          </button>
        ))}
      </div>
      {question.scaleLabels && (
        <div className="flex justify-between mt-2 text-xs text-text-secondary dark:text-text-secondary-dark">
          <span>{question.scaleLabels.min}</span>
          <span>{question.scaleLabels.max}</span>
        </div>
      )}
    </div>
  )
}
