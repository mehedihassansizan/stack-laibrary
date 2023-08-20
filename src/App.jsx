import './App.css'
import Header from './component/Header/Header'
import Hr from './component/Hr/Hr'
import Laibrary from './component/Laibrary/Laibrary'
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <div className='App'>
      <Header></Header>
      <Hr></Hr>
      <Laibrary></Laibrary>
      <Toaster />
    </div>
  )
}

export default App
