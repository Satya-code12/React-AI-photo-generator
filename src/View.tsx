import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Content from './components/IamgeGenerator';
// import TextToImageGenerator from './components/TextToImageGenerator';
// import "@fontsource/poppins";
const View: React.FC = () =>{
  return(
    <section className='h-screen w-full p-2' 
    // style={{
    //   backgroundImage: 'url(https://img.freepik.com/free-vector/abstract-geometric-shapes-3d-background_52683-34615.jpg?t=st=1732950679~exp=1732954279~hmac=71fe15876cdc2e4ea54efb7dab08e61ae9f99f6a621b7db2b0c3749ffbf9a648&w=740)',
    //   backgroundSize: "cover",
    //   backgroundRepeat: "no-repeat",
    //   width: '100%',
    //   minHeight: '100vh',
    // }}
    >
    <div className="container p-2 flex flex-col m-auto gap-4 bg-gray-300 rounded-3xl">
      <Navbar />
      <Header />
    </div>
    <div>
    <Content/>
    <Footer />
    </div>
    </section>
  );
}

export default View;