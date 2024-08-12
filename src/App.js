import Home from './assets/pages/Home';
import Layout from './assets/pages/Layout';
import About from './assets/pages/About';
import Registration from './assets/pages/Registration';
import NoPage from './assets/pages/NoPage';
import ComingSoon from './assets/pages/ComingSoon';
import SpeakersList from './assets/pages/SpeakersList';
import Committee from './assets/pages/Committee';

// import speaker from './assets/js/speaker.js';
import { createBrowserRouter,Routes, Route, createRoutesFromElements, RouterProvider, BrowserRouter} from "react-router-dom";
import Contact from './assets/pages/Contact';



// const router = createBrowserRouter(
//   createRoutesFromElements(
    
//   )
// )

function App() {

  return (
    <>
      <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}>
      <Route path='/home' element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/committee" element={<Committee />} />
      <Route path="/speakers" element={<SpeakersList />} />
      <Route path="/eventDetails" element={<ComingSoon />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/studentSupport" element={<ComingSoon/>} />
      <Route path="/accomodation" element={<ComingSoon/>} />
      <Route path="/contact" element={<Contact />} />

      <Route path="*" element={<NoPage />} /> 
    </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
