import './App.css';
import { Header } from './components/Header';
import { EditTemplate } from './components/organisms/EditTemplate';
import { ImportImageForm } from './components/organisms/ImportImageForm';

function App() {
  return (
    <div className="App">
      <Header />
      <ImportImageForm />
      <EditTemplate />
    </div>
  );
}

export default App;
