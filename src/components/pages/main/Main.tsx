import React from 'react';
import { Button, Image, Info, Footer } from 'src/components/ui';
import tools from '../../../static/tools.svg';
import { Header } from 'src/components/ui';

import './Main.css';

const Page: React.FC = () => {
  const openSetting = () => {
    document.location.href = '/settings'
  }

  return (
    <div className="main-container">
      <Header />
      <main>
          <div>
            <Image src={tools} alt="Setting" />
          </div>
          <div className="main-info-massage">
            <Info type="info">Configure repository connection and synchronization settings</Info>
          </div>
          <div className="main-setting-btn">
            <Button onClick={openSetting}>
              <Info>Open settings</Info>
            </Button>
          </div>
      </main>
      <Footer />
    </div>
  );
}

export default Page;
