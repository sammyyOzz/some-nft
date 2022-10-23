import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navigation/navbar.component';
import routes from './routes'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {routes
          .filter(route => route.type === 'link')
          .map(({ displayName, component, path }) => (
          <Route 
            key={displayName} 
            path={path} 
            element={component} 
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
