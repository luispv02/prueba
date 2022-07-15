import Configuracion from "./components/Configuracion"
import Datos from "./components/Datos"
import Inicio from "./components/Inicio"

import Listado from "./components/Listado"
import Sidebar from "./components/Sidebar"
import AppRouter from "./routers/AppRouter"

function App() {

  return (
    <div className="contenedor">
      <AppRouter />
    </div>
  )
}

export default App
