import React from 'react';
import { importRemote } from '@module-federation/utilities';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
const App2Widget = React.lazy(() => import('App2/Widget'));
const App3Widget = React.lazy(() => import('App3/Widget'));

const MainPage = () => {
  return (<div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      }}
    >
    <h1>Webpack Module Federation Example 2 - Build Time Remotes with Env Files</h1>
    <h2>App 1</h2>
    <p>
      The Build Time Remotes with Env Files example will take advantage Module Federation <strong>remotes</strong> and{' '}
      <strong>exposes</strong>. The remote locations are included with an env file. You can use multiple env files during the build to change the location of remotes.
    </p>
    <Link to='app2'>Go to App 2 Widget</Link>
    <br />
    <Link to='app3'>Go to App 3 Widget</Link>
    <br />
  </div>)
}

function App() {
  return (
    <>
      <BrowserRouter>
        <React.Suspense fallback="Loading System">
          <Routes>
            <Route path='/' element= { <MainPage />}/>
            <Route path='app2/*' element= { <App2Widget/> } />
            <Route path='app3' element= { <App3Widget/> } />
            <Route path='*' element= { <h1>Error</h1> }/>
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
