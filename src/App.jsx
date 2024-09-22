import Nav from "./components/Nav/Nav"
import RouteController from "./routes/RouteController"
import { useLocation } from "react-router-dom"


function App() {

  const {pathname} = useLocation()

  return (
    <>
      {pathname !== '/login' && pathname !== '/register' && pathname !== '/profile' && pathname !== '/*' && <Nav/>}
      <RouteController/>
    </>
  )
}

export default App
