import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Books from './components/Books'
import Button from './components/Button'
// Imports! 
  // imports bring information or tools in from other files and other resources in the app

// Functional Component
  // function declaration
  // Component name which is always PascalCase
  const App = () => {
  // and a return of JSX
    // Always has to be one element at the top level
    return (
    <>
      <h1> Hello World, A basic functional component</h1>
      <Header/>
      <Books/>
      <Books/>
    </>
  )}

// Every component needs to be exported 
export default App;


// SPA 