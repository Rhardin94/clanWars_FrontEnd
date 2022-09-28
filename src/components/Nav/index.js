import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';


function Nav(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]);

  return (    
      <nav className='bg-info text-center m-1'>
        <div className="row text-center m-6">
          {pages.map((Page) => (
            <div
              className={`text-center m-2 ${
                currentPage.name === Page.name && 'navActive'
                }`}
              key={Page.name}
            >
              <button className='button bg-dark text-white text-center col-6' onClick={() => setCurrentPage(Page)} >
                {capitalizeFirstLetter(Page.name)}
              </button>
            </div>
          ))}
        </div>
      </nav>
  );
}

export default Nav;
