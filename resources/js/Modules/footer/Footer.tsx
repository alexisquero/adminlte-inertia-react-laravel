
import React from 'react';

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer className="main-footer">
      <div className="float-right d-none d-sm-block">
        Version : 3.2.0
      </div>
      <strong>
        Copyright &copy; 2014-{year}{" "}
        <a href="https://adminlte.io" target="_blank" rel="noopener noreferrer">
        AdminLTE.io
        </a>
        .
      </strong>{" "}
      All rights reserved.
    </footer>
  );
};

export default Footer;
