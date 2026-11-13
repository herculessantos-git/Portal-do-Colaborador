import { Outlet } from "react-router-dom"
import { BottomNav } from "./BottomNav"
import { Sidebar } from "./Sidebar"
import { Topbar } from "./Topbar"

export function AppLayout() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar />
        <main className="flex-1 px-4 pt-6 pb-24 sm:px-8 sm:pt-8 lg:pb-8">
          <div className="max-w-content mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
      <BottomNav />
    </div>
  )
}
