import GlobalStyles from './styles/global'

import FirstAndSecond from './components/FirstAndSecond'

import { Main, Section, Sticky, Container } from './styles'
import Header from './components/Header';

function App() {
  return (
    <>
      <GlobalStyles />

      <Header />

      <Main style={{ height: '1610vh'}}>
        <Section style={{ height: '72.7%'}}>
          <FirstAndSecond />
        </Section>

        <Section style={{ height: '9.7%'}}>
          <Sticky className="third" />
        </Section>

        <Section style={{ height: '10.1%'}}>
          <Sticky className="fourth" />
        </Section>    
      </Main>
    </>
  );
}

export default App;
