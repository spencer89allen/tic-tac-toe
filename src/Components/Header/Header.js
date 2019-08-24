import React, { Component } from 'react';

import Menu from './Menu/Menu';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';

class Header extends Component {

  state = {
    sideDrawerOpen: false,
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return{ sideDrawerOpen: !prevState.sideDrawerOpen } 
    })
  };

  backdropClickHandler = () => {
    this.setState({
      sideDrawerOpen: false,
    })
  }

  render() {

    let backdrop = null;
    if(this.state.sideDrawerOpen) {
      backdrop = <Backdrop closeBackdrop={this.backdropClickHandler}/>;
    }

    return (
      <div >
        <Menu drawerToggle={this.drawerToggleClickHandler}/>
        <SideDrawer display={this.state.sideDrawerOpen} closeBackdrop={this.backdropClickHandler}/>
        {backdrop}

      </div>
    );
  }
}

export default Header;
