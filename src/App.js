
import ComingSoon from './assets/pages/ComingSoon';
import Layout from './assets/pages/Layout';
import NoPage from './assets/pages/NoPage.jsx'

import { createBrowserRouter,Routes, Route, createRoutesFromElements, RouterProvider, BrowserRouter} from "react-router-dom";


import { NavBarTabs } from './Constants.js';




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

      {NavBarTabs.map((element) => {
        return(
          <Route path={element.path} element={element.component} />
        )
      })}
      <Route path="*" element={<NoPage />} /> 
    </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
