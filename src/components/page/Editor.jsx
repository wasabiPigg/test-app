import { useState, useCallback } from 'react';
import { EditTemplate } from '../templates/EditTemplate';
import { FooterMenuLarge } from '../organisms/FooterMenuLarge';
import { FooterMenuMedium } from '../organisms/FooterMenuMedium';
import { ImageArea } from '../templates/ImageArea';
import { ImportImageForm } from '../organisms/ImportImageForm';
import { Header } from '../Header';

export const Editor = () => {
    const [showFooterMenuMedium, setShowFooterMenuMedium] = useState(true);
    const [showFooterMenuLarge, setShowFooterMenuLarge] = useState(false);
    const onClickCloseFooterMenuMedium = useCallback(() => {
      setShowFooterMenuMedium(false);
      setShowFooterMenuLarge(true);
    }, [])
  
    return (
      <div className="App">
        <Header />
        <ImportImageForm />
        <EditTemplate />
        <ImageArea />
        <FooterMenuMedium show={showFooterMenuMedium} onClickClose = {onClickCloseFooterMenuMedium}/>
        <FooterMenuLarge show={showFooterMenuLarge}/>
      </div>
    );
}