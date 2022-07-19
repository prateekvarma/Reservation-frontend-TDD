import React from "react";

const Header = () => {
  return (
    <nav className="py-3 border-bottom navbar navbar-expand navbar-light">
      <a data-testid="logo" href="/#" className="navbar-brand">Logo</a>
      <form data-testid="search" className="mr-auto w-50 form-inline">
        <input placeholder="Search Homes" type="text" className="w-50 form-control" />
      </form>
      <div data-testid="menu" className="ml-auto text-uppercase navbar-nav">
        <a href="#home" className="nav-link">Become a host</a>
        <a href="#home" className="nav-link">Help</a>
        <a href="#home" className="nav-link">Sign up</a>
        <a href="#link" className="nav-link">Login</a>
      </div>
    </nav>
  );
};

export default Header;
