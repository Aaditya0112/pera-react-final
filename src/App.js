import Home from './assets/pages/Home';
import Layout from './assets/pages/Layout';
import About from './assets/pages/About';
import Registration from './assets/pages/Registration';
import NoPage from './assets/pages/NoPage';
import ComingSoon from './assets/pages/ComingSoon';
import SpeakersList from './assets/pages/SpeakersList';
import Committee from './assets/pages/Committee';

// import speaker from './assets/js/speaker.js';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from "react-router-dom";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path='/' element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/committee" element={<Committee />} />
      <Route path="/speakers" element={<SpeakersList />} />
      <Route path="/eventDetails" element={<ComingSoon />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/studentSupport" element={<ComingSoon/>} />
      <Route path="/accomodation" element={<ComingSoon/>} />
      <Route path="/contact" element={<ComingSoon />} />

      <Route path="*" element={<NoPage />} /> 
    </Route>
  )
)

function App({routes}) {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
