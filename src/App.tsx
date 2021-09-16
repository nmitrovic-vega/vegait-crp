import React, { Suspense, useRef } from 'react';
import { useVisible } from './hooks/useVisible';
import logo from './assets/images/omega.png';
import astronaut from './assets/images/astronaut.jpg';
// import RocketLoader from './components/RocketLoader/RocketLoader';
import './App.css';
const RocketLoader = React.lazy(() => import('./components/RocketLoader/RocketLoader'));

function App() {
  const sectionTwoRef = useRef<HTMLDivElement>(null);
  const isVisible = useVisible(sectionTwoRef);
  console.log('SECTION 2 is visible', isVisible);

  return (
    <>
      <div className="section section--first">
        <img src={logo} className="omega__logo" alt="logo" />
      </div>
      <div ref={sectionTwoRef} className="section section--second">
        <img src={astronaut} className="omega__logo" alt="logo" />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        {isVisible && <RocketLoader />}
      </Suspense>
    </>
  );
}

export default App;
