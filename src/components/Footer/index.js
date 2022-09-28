import React from 'react';

function Footer() {

  // Replace links with social media profiles
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/"
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/"
    },
    {
      name: "fab fa-stack-overflow",
      link: "https://stackoverflow.com/"
    }
  ]

  return (
    <footer className="flex-row row text-center">
      <h1 className='col-lg-12'>2022 &copy;</h1>
    </footer>
  );
}

export default Footer;
