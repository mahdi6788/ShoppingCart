import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navigationbar from './components/Navigationbar'
import { Container } from 'react-bootstrap'


function App() {
  
  return (
    <>
      <Container>
        <Navigationbar />
      </Container>
    </>
  )
}

export default App
