
// import React from 'react';
// import './App.css';
// import ParentComponent from './ParentComponent';

// function App() {
//   return (
//     <div className="App">
//       <ParentComponent />
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import './App.css';
// import ThemeProvider from './ThemeProvider';
// import ThemeSwitcher from './ThemeSwitcher';
// import Header from './Header';
// import Footer from './Footer';
// import Content from './Content';
// import ParentComponent from './ParentComponent';

// function App() {
//   return (
//     <ThemeProvider>
//       <div className="App">
//         <ParentComponent />
//         <ThemeSwitcher />
//         <Header />
//         <Content />
//         <Footer />
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;

// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Login from './Login';
import Home from './Home';
import Dashboard from './Dashboard';

function App() {
  return (
    <AuthProvider>
      {/* <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router> */}
<Router>
<Routes>
  {/* <Route path="/" exact element={<Home />} /> */}
  <Route path="/" element={<Login />} />
  <Route path="/dashboard" element={<Dashboard/>}/>
</Routes>
</Router>
   
    </AuthProvider>
  );
}

export default App;