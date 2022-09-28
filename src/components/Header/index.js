import React from 'react';

function Header(props) {

  return (
    <header className="row bg-dark">
      <h1 className='text-center'>CLAN WARS!</h1>
      {props.children}
    </header>
  );
}

export default Header;
