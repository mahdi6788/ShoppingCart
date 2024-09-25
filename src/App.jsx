import { Routes, Route } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navigationbar from './components/Navigationbar'
import { Container } from 'react-bootstrap'
import Shop from './pages/Shop'


function App() {
  
  return (
    <>
      <Container>
      <Navigationbar />

        <Routes>
          <Route path='/' element={<Shop />}/>
        </Routes>

      </Container>
    </>
  )
}

export default App
