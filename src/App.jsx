import EstilosGlobais from "./Componentes/EstilosGlobais"
import Depoimentos from "./Paginas/Depoimentos"
import Footer from "./Paginas/Footer"
import Header from "./Paginas/Header"
import Inicio from "./Paginas/Inicio"
import QuemSouEu from "./Paginas/QuemSouEu"
import Tratamentos from "./Paginas/Tratamentos"

function App() {
  return (
    <>
      <EstilosGlobais />
      <Header />
      <Inicio />
      <Tratamentos />
      <QuemSouEu />
      <Depoimentos />
      <Footer />
    </>
  )
}

export default App
