import Hello from './components/Hello'
import ComponentA from './components/ComponentsA'


import Store from './store/Store'
import ApiStore from './store/ApiStore'
import Words from './components/Words'
import Search from './components/Search'



 
function App() {
  
  return (
    <div className="App">
     
     <ApiStore>
      <Hello/>
      </ApiStore>

     <Store>
      <ComponentA  />
      </Store>
    <Words />
    <Search />
    </div>
  )
}

export default App
