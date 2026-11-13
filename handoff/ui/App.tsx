import { Navigate, Outlet, Route, Routes } from "react-router-dom"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { AppLayout } from "./layouts/AppLayout"
import { EmConstrucao } from "./components/EmConstrucao"
import { AppDataProvider } from "./hooks/useAppData"
import { AuthProvider, useAuth } from "./hooks/useAuth"
import { HomePage } from "./pages/Home/HomePage"
import { LoginPage } from "./pages/Login/LoginPage"
import { CommunicationListPage } from "./pages/Communication/CommunicationListPage"
import { CommunicationDetailPage } from "./pages/Communication/CommunicationDetailPage"
import { GoalsPage } from "./pages/Goals/GoalsPage"
import { SurveysListPage } from "./pages/Surveys/SurveysListPage"
import { SurveyDetailPage } from "./pages/Surveys/SurveyDetailPage"
import { DevelopmentPage } from "./pages/Development/DevelopmentPage"
import { DesignSystemPage } from "./pages/DesignSystem/DesignSystemPage"

// Sem sessão, qualquer rota de produto manda pro login — o guard fica aqui,
// um nível acima do AppLayout, pra nenhuma rota escapar dele.
function RequireAuth() {
  const { isAuthenticated } = useAuth()
  if (!isAuthenticated) return <Navigate to="/login" replace />
  return <Outlet />
}

function App() {
  return (
    <TooltipProvider delayDuration={200}>
      <AuthProvider>
        <AppDataProvider>
          <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route element={<RequireAuth />}>
              <Route element={<AppLayout />}>
                <Route index element={<HomePage />} />
                <Route path="comunicacao" element={<CommunicationListPage />} />
                <Route path="comunicacao/:id" element={<CommunicationDetailPage />} />
                <Route path="metas" element={<GoalsPage />} />
                <Route path="pesquisas" element={<SurveysListPage />} />
                <Route path="pesquisas/:id" element={<SurveyDetailPage />} />
                <Route path="desenvolvimento" element={<DevelopmentPage />} />
                {/* Itens "Em breve" do sidebar (ver navItems.ts) — mesmo
                    placeholder, título diferente por rota. */}
                <Route path="documentos" element={<EmConstrucao titulo="Documentos" />} />
                <Route path="rh-dp" element={<EmConstrucao titulo="RH / DP" />} />
              </Route>
            </Route>
            {/* Documentação do Design System — fora do AppLayout de produto
                (tem a própria navegação interna por seção). */}
            <Route path="design-system" element={<DesignSystemPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Toaster />
        </AppDataProvider>
      </AuthProvider>
    </TooltipProvider>
  )
}

export default App
