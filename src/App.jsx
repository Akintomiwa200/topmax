// import Home from "./pages/Home"
// import About from "./pages/About"
// import Contact from "./pages/Contact"
// import Projects from "./pages/Projects"
// import Product from './pages/Product'
// import Footer from './pages/Footer'
// import router from './router'
// import  from 'react-router-dom'



// const App = () => {
//   return (
//     <div>
//         <Home/>
//         <About/>
//         <Projects/>
//         <Product/>
//         <Contact/>
//         <Footer/>


//     </div>
//   )
// }

// export default App


import router from './router'
import {RouterProvider} from 'react-router-dom'
function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}
export default App;
