import React, { Component } from 'react';
import * as globalConst from  '../common/globalConst'
import { Link } from "react-router-dom";

class Navibar extends Component {
  render() { 
    return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href={globalConst.currentHost}>Tag-System</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/search">Search</Link>
            <Link className="nav-link" to="/tagmanager">Tag manager</Link>
            <Link className="nav-link" to="/settings">Settings</Link>
          </div>
        </div>
      </div>
    </nav>
    );
  }
}

export default Navibar;