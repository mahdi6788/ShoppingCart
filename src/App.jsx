import { Routes, Route } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navigationbar from './components/Navigationbar'
import { Container } from 'react-bootstrap'
import Shop from './pages/Shop'
import CartProvider from './context/CartContext'

function App() {
  
  return (
    <>
    <CartProvider>
      <Container>
      <Navigationbar />

        <Routes>
          <Route path='/' element={<Shop />}/>
        </Routes>

      </Container>
      </CartProvider>
    </>
  )
}

export default App
