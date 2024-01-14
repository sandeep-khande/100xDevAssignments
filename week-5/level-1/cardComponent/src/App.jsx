

import './App.css'
import { Card } from './components/Card.jsx'

function App() {
  
  

  return (
    <>
      <Card 
        username="Sandeep" 
        description="Java Developer" 
        interests="cricket, anime"
        linkedIn="https://www.linkedin.com/feed/"
        twitter="https://twitter.com/home"
        />
        <br />
        <br />
      <Card 
        username="Virat" 
        description="React Developer" 
        interests="books"
        linkedIn="https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAACTkm1QBskapOM_r-3L-tX5Nz7KCzt9NHiA&keywords=Puttapaka%20Saikrishna&origin=ENTITY_SEARCH_HOME_HISTORY&sid=~x%3A"
        twitter="https://twitter.com/MrBeast"
        />
    </>
  )
}

export default App
