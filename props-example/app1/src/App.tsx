import React from 'react';
import { importRemote } from '@module-federation/utilities';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import remoteListJson from './remotes.json';

const MainPage = () => {
  return (<div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      }}
    >
    <h1>Webpack Module Federation Example 3 - Runtime Remotes</h1>
    <h2>App 1</h2>
    <p>
      The Runtime Remotes example will take advantage Module Federation <strong>remotes</strong> and{' '}
      <strong>exposes</strong>. It will use a json file at the <a href='https://github.com/module-federation/utilities/blob/main/runtime/importRemote/README.md'>importRemote</a> utility to load remotes during execution. See
      
    </p>
    <Link to='app2'>Go to App 2</Link>
    <br />
    <Link to='app3'>Go to App 3</Link>
    <br />
  </div>)
}

const AppComponent = (elementJson: any, index: number) => {
  const RemoteComponent = React.lazy(() => importRemote(
    { url: elementJson.url,
      scope: elementJson.scope,
      module: elementJson.module
    })
  );

  const path = `${elementJson.scope}/*`;
  return (<Route key={index} path={path} element={ <RemoteComponent hostPassedProp='Hello from the Host!' /> } />); 
}

function App() {
  return (
    <>
      <BrowserRouter>
        <React.Suspense fallback="Loading System">
          <Routes>
            <Route path='/' element= { <MainPage />}/>
            {remoteListJson.remotes.map((elementJson, index) => AppComponent(elementJson, index))}
            <Route path='*' element= { <h1>Error</h1> }/>
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;