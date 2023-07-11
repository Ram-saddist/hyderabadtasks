import MessageList from './components/MessageList';

function App() {
  return (
    <div className="App">
      <MessageList/>
    </div>
  );
}

export default App;

// import React, { Component } from 'react'
// import './App.css';
// import Home from './container/Home'
// import About from './container/About'
// import Contact from './container/Contact'
// import Navigationbar from './container/Navbar'
// import NotFound from './container/NotFound'
// import {BrowserRouter,Routes,Route} from 'react-router-dom'


// export default class App extends Component {

//   render() {
//     console.log("user details",this.state.user)
//     return (
//       <div>
//          <BrowserRouter>
//               <Navigationbar/>
//                 <Routes>
//                   <Route path="/" element={<Home/>}/>
//                   <Route path="/about" element={<About/>}/>
//                   <Route path="/contact" element={<Contact/>}/>
//                   <Route path="*" element={<NotFound/>}/>
//                 </Routes>
//              </BrowserRouter> 
//       </div>
//     )
//   }
// }