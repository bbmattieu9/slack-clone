import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'

function App() {
  return (
    <div className="App">
        <h1>Slack Clone with ReactJs</h1>


      {/* Header */}
      <Header />
      
      <Sidebar />
    </div>
  );
}

export default App;
