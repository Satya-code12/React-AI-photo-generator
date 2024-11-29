import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Content from './components/TextToImageGenerator';
// import TextToImageGenerator from './components/TextToImageGenerator';
// import "@fontsource/poppins";
const View: React.FC = () =>{
  return(
    <section className='h-screen w-full'>
    <div className="App container flex flex-col m-auto gap-4">
      <Navbar />
      <Header />
      <Content rows={3}/>
    </div>
    </section>
  );
}

export default View;