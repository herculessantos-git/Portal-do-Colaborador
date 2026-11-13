import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  Lock,
  ListChecks,
} from "lucide-react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Button } from "../../components/Button"
import { Card } from "../../components/Card"
import { ProgressBar } from "../../components/ProgressBar"
import { useAppData } from "../../hooks/useAppData"
import { useToast } from "../../hooks/useToast"
import { formatDate } from "../../lib/format"
import { QuestionField } from "./QuestionField"

type AnswerValue = string | string[] | number | undefined
type Step = "intro" | "form" | "review" | "confirmation"

function optionLabel(
  options: { id: string; label: string }[] | undefined,
  id: string,
): string {
  return options?.find((o) => o.id === id)?.label ?? id
}

export function SurveyDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { surveys, answerSurvey } = useAppData()
  const { showToast } = useToast()

  const survey = surveys.find((s) => s.id === id)

  const [step, setStep] = useState<Step>("intro")
  const [questionIndex, setQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, AnswerValue>>({})

  if (!survey) {
    return (
      <div>
        <Button variant="ghost" icon={<ArrowLeft size={16} />} onClick={() => navigate("/pesquisas")}>
          Voltar
        </Button>
        <Card className="mt-4 text-center py-12">
          <p className="text-sm text-text-secondary dark:text-text-secondary-dark">
            Pesquisa não encontrada.
          </p>
        </Card>
      </div>
    )
  }

  const questions = survey.questions ?? []
  const currentQuestion = questions[questionIndex]

  const goBack = () => navigate("/pesquisas")

  const handleSubmit = () => {
    answerSurvey(survey.id)
    setStep("confirmation")
    showToast("Resposta enviada! Obrigado pela participação.")
  }

  // ---------- Encerrada ----------
  if (survey.status === "closed") {
    return (
      <div>
        <BackButton onClick={goBack} />
        <Card className="text-center py-12">
          <Lock size={32} className="mx-auto mb-4 text-text-secondary dark:text-text-secondary-dark" />
          <h1 className="text-lg text-text-primary dark:text-text-primary-dark mb-2">
            {survey.title}
          </h1>
          <p className="text-sm text-text-secondary dark:text-text-secondary-dark max-w-md mx-auto">
            {survey.description}
          </p>
          <p className="text-xs text-text-secondary dark:text-text-secondary-dark mt-4">
            Esta pesquisa encerrou em {formatDate(survey.dueDate)} e não aceita mais
            respostas.
          </p>
        </Card>
      </div>
    )
  }

  // ---------- Já respondida ----------
  if (survey.status === "answered" && step !== "confirmation") {
    return (
      <div>
        <BackButton onClick={goBack} />
        <Card className="text-center py-12">
          <CheckCircle2 size={32} className="mx-auto mb-4 text-success" />
          <h1 className="text-lg text-text-primary dark:text-text-primary-dark mb-2">
            {survey.title}
          </h1>
          <p className="text-sm text-text-secondary dark:text-text-secondary-dark max-w-md mx-auto">
            Você já respondeu esta pesquisa
            {survey.answeredAt ? ` em ${formatDate(survey.answeredAt)}` : ""}. Obrigado
            pela participação!
          </p>
        </Card>
      </div>
    )
  }

  // ---------- Confirmação ----------
  if (step === "confirmation") {
    return (
      <div>
        <Card className="text-center py-12">
          <CheckCircle2 size={40} className="mx-auto mb-4 text-success" />
          <h1 className="text-lg text-text-primary dark:text-text-primary-dark mb-2">
            Resposta enviada!
          </h1>
          <p className="text-sm text-text-secondary dark:text-text-secondary-dark max-w-md mx-auto mb-6">
            Obrigado pela participação. Sua resposta foi registrada com sucesso.
          </p>
          <Button onClick={() => navigate("/pesquisas")}>Voltar para Pesquisas</Button>
        </Card>
      </div>
    )
  }

  // ---------- Revisão ----------
  if (step === "review") {
    return (
      <div>
        <BackButton onClick={() => setStep("form")} label="Voltar para o formulário" />
        <Card>
          <h1 className="text-lg text-text-primary dark:text-text-primary-dark mb-1">
            Revise suas respostas
          </h1>
          <p className="text-sm text-text-secondary dark:text-text-secondary-dark mb-6">
            {survey.title}
          </p>

          <div className="flex flex-col gap-5 mb-6">
            {questions.map((q, i) => {
              const value = answers[q.id]
              let display = "—"
              if (q.type === "radio" && typeof value === "string") {
                display = optionLabel(q.options, value)
              } else if (q.type === "checkbox" && Array.isArray(value)) {
                display = value.length
                  ? value.map((v) => optionLabel(q.options, v)).join(", ")
                  : "—"
              } else if (q.type === "scale" && typeof value === "number") {
                display = `${value} de ${q.scaleMax ?? 5}`
              }
              return (
                <div key={q.id} className="border-b border-border dark:border-border-dark pb-4 last:border-0 last:pb-0">
                  <p className="text-xs text-text-secondary dark:text-text-secondary-dark mb-1">
                    Pergunta {i + 1} de {questions.length}
                  </p>
                  <p className="text-sm font-medium text-text-primary dark:text-text-primary-dark mb-1.5">
                    {q.text}
                  </p>
                  <p className="text-sm text-primary">{display}</p>
                </div>
              )
            })}
          </div>

          <Button onClick={handleSubmit} className="w-full sm:w-auto">
            Enviar resposta
          </Button>
        </Card>
      </div>
    )
  }

  // ---------- Formulário ----------
  if (step === "form" && currentQuestion) {
    const isLast = questionIndex === questions.length - 1
    const canAdvance = answers[currentQuestion.id] !== undefined &&
      !(Array.isArray(answers[currentQuestion.id]) && (answers[currentQuestion.id] as string[]).length === 0)

    return (
      <div>
        <BackButton
          onClick={() =>
            questionIndex === 0 ? setStep("intro") : setQuestionIndex((i) => i - 1)
          }
          label="Voltar"
        />
        <Card>
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-text-secondary dark:text-text-secondary-dark">
                Pergunta {questionIndex + 1} de {questions.length}
              </span>
            </div>
            <ProgressBar
              progress={((questionIndex + 1) / questions.length) * 100}
              size="sm"
            />
          </div>

          <h2 className="text-lg text-text-primary dark:text-text-primary-dark mb-5">
            {currentQuestion.text}
          </h2>

          <QuestionField
            question={currentQuestion}
            value={answers[currentQuestion.id]}
            onChange={(value) =>
              setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }))
            }
          />

          <div className="mt-8 flex items-center justify-between">
            <Button
              variant="ghost"
              disabled={questionIndex === 0}
              onClick={() => setQuestionIndex((i) => Math.max(0, i - 1))}
            >
              Anterior
            </Button>
            <Button
              disabled={!canAdvance}
              onClick={() =>
                isLast ? setStep("review") : setQuestionIndex((i) => i + 1)
              }
            >
              {isLast ? "Revisar respostas" : "Próxima"}
            </Button>
          </div>
        </Card>
      </div>
    )
  }

  // ---------- Intro ----------
  return (
    <div>
      <BackButton onClick={goBack} />
      <Card>
        <div className="flex items-center gap-2 mb-4">
          <ListChecks size={18} className="text-primary" />
          <span className="text-xs font-medium text-text-secondary dark:text-text-secondary-dark">
            {survey.category}
          </span>
        </div>

        <h1 className="text-xl text-text-primary dark:text-text-primary-dark mb-3">
          {survey.title}
        </h1>
        <p className="text-sm text-text-secondary dark:text-text-secondary-dark mb-6 max-w-lg">
          {survey.description}
        </p>

        <div className="flex items-center gap-6 mb-8 text-sm text-text-secondary dark:text-text-secondary-dark">
          <span className="flex items-center gap-1.5">
            <ListChecks size={16} /> {questions.length}{" "}
            {questions.length === 1 ? "pergunta" : "perguntas"}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={16} /> ~{survey.estimatedMinutes}{" "}
            {survey.estimatedMinutes === 1 ? "minuto" : "minutos"}
          </span>
        </div>

        <Button
          onClick={() => {
            setQuestionIndex(0)
            setStep("form")
          }}
        >
          Começar
        </Button>
      </Card>
    </div>
  )
}

function BackButton({ onClick, label = "Voltar para Pesquisas" }: { onClick: () => void; label?: string }) {
  return (
    <Button
      variant="ghost"
      icon={<ArrowLeft size={16} />}
      onClick={onClick}
      className="mb-4 -ml-2"
    >
      {label}
    </Button>
  )
}
