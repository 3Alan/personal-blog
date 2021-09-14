import ReactFullpage from '@fullpage/react-fullpage';
import { FC, useState } from 'react';
import { Button, Modal } from '@3alan/ui';
import '@3alan/ui/dist/index.css';

const Resume: FC = () => {
  const [visible, setVisible] = useState(false);
  return (
    <ReactFullpage
      licenseKey="YOUR_KEY_HERE"
      scrollingSpeed={1000} /* Options here */
      render={({ fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section bg-red-400">
              <Button
                onClick={() => {
                  setVisible(true);
                }}
              >
                open
              </Button>
              <Modal visible={visible} onClose={() => setVisible(false)}>
                awesome
              </Modal>
              <p>Section 1 (welcome to fullpage.js)</p>
              <Button onClick={() => fullpageApi.moveSectionDown()}>move down</Button>
            </div>
            <div className="section bg-yellow-400">
              <p>Section 2</p>
            </div>
            <div className="section bg-blue-400">
              <p>Section 3</p>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default Resume;
