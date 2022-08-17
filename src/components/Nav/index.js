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
      <nav className='align-items-center'>
        <ul className="flex-row">
          {pages.map((Page) => (
            <li
              className={`mx-5 text-bg-info ${
                currentPage.name === Page.name && 'navActive'
                }`}
              key={Page.name}
            >
              <button className='button'
                onClick={() => setCurrentPage(Page)}
              >
                {capitalizeFirstLetter(Page.name)}
              </button>
            </li>
          ))}
        </ul>
      </nav>
  );
}

export default Nav;
