import './App.css';
import { Header } from './components/Header';
import { EditTemplate } from './components/organisms/EditTemplate';
import { ImageArea } from './components/organisms/ImageArea';
import { ImportImageForm } from './components/organisms/ImportImageForm';

function App() {
  return (
    <div className="App">
      <Header />
      <ImportImageForm />
      <EditTemplate />
      <ImageArea />
    </div>
  );
}

export default App;
