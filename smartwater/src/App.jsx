import './App.css'
import ItemListContainer from './assets/components/ItemListContainer/ItemListContainer'
import Navbar from './assets/components/Navbar/Navbar/'

function App() {
const greeting= "Bienvenidos"
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={greeting} />
    </>
  )
}

export default App
