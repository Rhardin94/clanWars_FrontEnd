import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import PageContent from './components/PageContent';
import Home from "./pages/Home";
import Green from "./pages/Green";
import Red from "./pages/Red";
import Blue from "./pages/Blue";
import Yellow from "./pages/Yellow";

function App() {
  const [pages] = useState([
    {
      name: "home"
    },
    { 
      name: "green" 
    },
    { 
      name: "red" 
    },
    {
      name: "blue" 
    },
    {
      name: "yellow"
    }
  ]);

  const renderPage = () => {
    switch (currentPage.name) {
      case 'home':
        return <Home />;
      case 'red':
        return <Red />;
      case 'blue':
        return <Blue />;
      case 'yellow':
        return <Yellow />;
      case "green":
        return <Green />;
      default:
        return <Home />;
    }
  };

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className="container">
      <Header>
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Nav>
      </Header>
      <main>
        <PageContent >{renderPage()}</PageContent>
      </main>
      <Footer />
    </div>
  );
}


export default App;
