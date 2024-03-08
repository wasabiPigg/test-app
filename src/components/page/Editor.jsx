import { EditTemplate } from '../templates/EditTemplate';
import { ImageArea } from '../templates/ImageArea';
import { ImportImageForm } from '../organisms/ImportImageForm';
import { Header } from '../Header';
import { MainMenu } from 'components/parts/menues/MainMenu';

export const Editor = () => {
  return (
    <div className="App">
      <Header />
      <ImportImageForm />
      <EditTemplate />
      <ImageArea />
      <MainMenu />
    </div>
  );
}