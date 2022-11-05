import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/main.page';
import routes from './routes'

function App() {

  return (
    <BrowserRouter>
      <Main />
      {/* <Routes>
        {routes
          .filter(route => route.type === 'link')
          .map(({ displayName, component, path }) => (
          <Route 
            key={displayName} 
            path={path} 
            element={component} 
          />
        ))}
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
