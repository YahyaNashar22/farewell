import './App.css';
import { useState } from 'react';
import EnvelopFadi from './components/EnvelopFadi/EnvelopFadi';
import EnvelopNermine from './components/EnvelopNermine/EnvelopNermine';
import EnvelopOmar from './components/EnvelopOmar/EnvelopOmar';
import EnvelopT04 from './components/EnvelopT04/EnvelopT04';
import OmarSingleView from './components/OmarSingleView/OmarSingleView';
import NermineSingleView from './components/NermineSingleView/NermineSingleView';
import FadiSingleView from './components/FadiSingleView/FadiSingleView';
import T04SingleView from './components/T04SingleView/T04SingleView';

function App() {

  const [isFadi, setIsFadi] = useState(false);
  const [isOmar, setIsOmar] = useState(false);
  const [isNermine, setIsNermine] = useState(false);
  const [isT04, setIsT04] = useState(false);

  return (
    <main className="App">
      {
        isOmar && <OmarSingleView isOmar={isOmar} />
      }
      {
        isNermine && <NermineSingleView isNermine={isNermine} />
      }
      {
        isFadi && <FadiSingleView isFadi={isFadi} />
      }
      {
        isT04 && <T04SingleView isT04={isT04} />
      }
      <EnvelopFadi isT04={isT04} isFadi={isFadi} isOmar={isOmar} isNermine={isNermine} setIsFadi={setIsFadi} />
      <EnvelopOmar isT04={isT04} isFadi={isFadi} isOmar={isOmar} isNermine={isNermine} setIsOmar={setIsOmar} />
      <EnvelopNermine isT04={isT04} isFadi={isFadi} isOmar={isOmar} isNermine={isNermine} setIsNermine={setIsNermine} />
      <EnvelopT04 isT04={isT04} isFadi={isFadi} isOmar={isOmar} isNermine={isNermine} setIsT04={setIsT04} />
    </main>
  );
}

export default App;
