import { currentUser } from "../../data/user"
import { formatDateLong, getGreeting } from "../../lib/format"

export function GreetingHeader() {
  const today = new Date()

  return (
    <div className="mb-6">
      <h1 className="text-xl text-text-primary dark:text-text-primary-dark">
        {getGreeting(today)}, {currentUser.name.split(" ")[0]} 👋
      </h1>
      <p className="mt-1 text-sm text-text-secondary dark:text-text-secondary-dark">
        {currentUser.role} · {currentUser.department} — {formatDateLong(today.toISOString().slice(0, 10))}
      </p>
    </div>
  )
}
