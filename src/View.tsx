import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Content from './components/IamgeGenerator';
import { Toaster } from 'react-hot-toast';
// import TextToImageGenerator from './components/TextToImageGenerator';
// import "@fontsource/poppins";
const View: React.FC = () =>{
  return(
    <section className='h-screen w-full p-2' 
    >
    <div className="container p-3 flex flex-col m-auto gap-4 bg-gray-300 rounded-xl">
      <Navbar />
      <Header />
    </div>
    <div>
    <Content/>
    <Toaster position='top-center'/>
    <Footer />
    </div>
    </section>
  );
}

export default View;