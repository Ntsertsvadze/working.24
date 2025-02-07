import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes/index';

function App() {
  return(
    <div>
      <RouterProvider router={createBrowserRouter(routes)}/>
    </div>
  )
}

export default App