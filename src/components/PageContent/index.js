import React from 'react';

const PageContent = (props) => {

  return (
    <div className='container-fluid bg-dark'>
      {props.children}
    </div>
  );
};

export default PageContent;
