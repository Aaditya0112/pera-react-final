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
      <Route path='pera-react-final/' element={<Home />} />
      <Route path="pera-react-final/about" element={<About />} />
      <Route path="pera-react-final/committee" element={<Committee />} />
      <Route path="pera-react-final/speakers" element={<SpeakersList />} />
      <Route path="pera-react-final/eventDetails" element={<ComingSoon />} />
      <Route path="pera-react-final/registration" element={<Registration />} />
      <Route path="pera-react-final/studentSupport" element={<ComingSoon/>} />
      <Route path="pera-react-final/accomodation" element={<ComingSoon/>} />
      <Route path="pera-react-final/contact" element={<ComingSoon />} />

      <Route path="*" element={<NoPage />} /> 
    </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
