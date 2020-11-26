import React from 'react';
import { Button } from 'components/Button/Button';
import Icon from 'assets/icons/path.svg';

const App: React.FC = () => (
  <>
    <Button icon={Icon}>Кнопка с иконкой</Button>    
    <Button icon={Icon} />
  </>
);

export default App;