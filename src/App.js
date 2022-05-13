import React,{useState} from 'react'
import Navbar from './Components/Navbar'
import Hero_Section from './Components/Hero_Section'
import Card_Section from './Components/Card_Section'

const App = () => {
  // Storing search result of user
  const [query, setQuery] = useState("fitness")
  //Function to set query states via its children
  function search_input(data){
    setQuery(data);
  }
  return (
    <div style={{background:"#171717"}}>
      <Navbar search_input={search_input}></Navbar>
      <Hero_Section></Hero_Section>
      <Card_Section search_query={query}></Card_Section>
    </div>
  )
}

export default App