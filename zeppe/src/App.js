import './App.css';
import Banner from './Component/Banner';
import { Data } from './Component/Data';
import Footer from './Component/Footer';
import Header from './Component/Header';


function App() {
  console.log(Data)
  return (
    <div className='app'>
      <Header />
      <Banner />
      <Footer />
    </div>

  );
}

export default App;
