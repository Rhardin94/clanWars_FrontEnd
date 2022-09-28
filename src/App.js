import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import PageContent from './components/PageContent';
import Home from "./pages/Home";
import Points from "./pages/Points";
function App() {
  const [pages] = useState([
    {
      name: "home"
    },
    {
      name: "points"
    }
    // { 
    //   name: "green" 
    // },
    // { 
    //   name: "red" 
    // },
    // {
    //   name: "blue" 
    // },
    // {
    //   name: "yellow"
    // }
  ]);


  const renderPage = () => {
    switch (currentPage.name) {
      case 'home':
        return <Home />;
      case 'points':
        return <Points />;
      default:
        return <Home />;
    }
  };

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className="bg-secondary container-fluid">
      <Header>
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Nav>
      </Header>
      <main className="row">
        <PageContent >{renderPage()}</PageContent>
      </main>
      {/* <Footer /> */}
    </div>
  );
}


export default App;
