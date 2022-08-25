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
      <nav className=''>
        <div className="flex-row row text-bg-info text-center m-6">
          {pages.map((Page) => (
            <div
              className={`mx-5 col-12 text-center m-2 ${
                currentPage.name === Page.name && 'navActive'
                }`}
              key={Page.name}
            >
              <button className='button bg-secondary text-white text-center col-8' onClick={() => setCurrentPage(Page)} >
                {capitalizeFirstLetter(Page.name)}
              </button>
            </div>
          ))}
        </div>
      </nav>
  );
}

export default Nav;
