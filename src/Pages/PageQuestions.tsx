import React, { useContext } from 'react';
import { AppStateContext } from '../App';
import Container from '../components/Container';

function PageQuestions() {
  const appContext = React.useContext(AppStateContext);

  return (
    <Container>
      <div className="w-[250px]">
        <p>Hello World</p>
      </div>
    </Container>
  );
}

export default PageQuestions;
