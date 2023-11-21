import Widget from './Widget';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
  <div>
    <h2>App 2</h2>
    <BrowserRouter>
      <Widget />
    </BrowserRouter>
  </div>
);

export default App;
