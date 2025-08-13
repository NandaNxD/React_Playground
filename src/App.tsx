import { RouterProvider } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { router } from './router'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {

  return (
    <>
      <Header/>
      <Provider store={store}>
         <RouterProvider router={router}>

        </RouterProvider>
      </Provider>
     
      <Footer/>
    </>
  )
}

export default App
