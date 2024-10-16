import { RouterProvider } from 'react-router-dom'
import UserProvider from './context/UserProvider.jsx'
import router from './routes/router.jsx'
import './App.css'

function App() {

  return (
    <UserProvider>
      <RouterProvider router={ router } />
    </UserProvider>
  )
}

export default App
