import { BrowserRouter, useRoutes } from 'react-router-dom'
import { routeConfig } from '@/config/routes'
import { createRoutes } from '@/helpers/route.helper'

const routes = createRoutes(routeConfig)

const AppRoutes = () => {
  return useRoutes(routes)
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
