import sifas from './assets/SiFAS.png'
import ChatBox from './Components/ChatBox'
import Header from './Components/Header'

function App() {
  return (
    <div className="bg-auto bg-no-repeat bg-center flex">
      <div className='w-1/2'>
        <img className="rounded-lg "
        src={sifas}
        alt="SiFAS" />
      </div>
      <div className='p-3 w-1/2'>
        <div className='object-top' >
          <Header />        
        </div>
        <div className='w-full bg-cyan-400 rounded-md p-5 h-3/4'>
          <ChatBox />
        </div>
      </div>
    </div>
  )
}

export default App
