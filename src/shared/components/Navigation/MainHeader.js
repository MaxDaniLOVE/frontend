import React from 'react';

const MainHeader = (props) => {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-primary main-navigation">
      {props.children}
    </header>
  );
}

export default MainHeader;
