import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import SideBar from './components/SideBar'
import DashboardPage from './pages/Dashboard'
import ClientsPage from './pages/Clients'
import ProjectsPage from './pages/Projects'
import FinancePage from './pages/Finance'
import SettingsPage from './pages/Settings'



const AppContent = () => {
  return(

    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/clients" element={<ClientsPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/finans" element={<FinancePage />} />

      <Route path="/settings" element={<SettingsPage />} />

      
    </Routes>
  )
}


function App() {

  
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-900">

        <SideBar />

        <div className="flex flex-col md:pl-64">
          <main className="flex-1 p-6">
            <AppContent />
          </main>
        </div>

      </div>
    </BrowserRouter>
  )
}


export default App
