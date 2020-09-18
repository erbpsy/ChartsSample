import React, { Component } from 'react';
import './App.css';
import PageContent from './Component/PageContent';
import { Route } from 'react-router-dom';
class App extends Component {
  constructor(props) {
    super(props);
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
    this.state = {
      openMenu: true,
      isLoaded: false,
      items: []
    }
  }

  handleToggleMenu() {
    this.setState({ openMenu: !this.state.openMenu });
  }

  render() {
    return (
      <div id="page-wrapper" className={this.state.openMenu ? "open" : ""}>
       {/* Sidebar  */}
       <div id="sidebar-wrapper">
        <ul className="sidebar">
          <li className="sidebar-main">
            <a onClick={this.handleToggleMenu}>
            Demo Project
              <span className="menu-icon glyphicon glyphicon-transfer"></span>
            </a>
          </li>
          <li className="sidebar-title"><span>NAVIGATION</span></li>
          <li className="sidebar-list">
            <a href="/">Dashboard <span className="menu-icon fa fa-tachometer"></span></a>
          </li>
          {/* <li className="sidebar-list">
            <a href="/tables">Tables <span className="menu-icon fa fa-table"></span></a>
          </li> */}
        </ul>
        <div className="sidebar-footer">
          <div className="col-xs-4">
            <a>
              Github
            </a>
          </div>
          <div className="col-xs-4">
            <a>
              About
            </a>
          </div>
          <div className="col-xs-4">
            <a>
              Support
            </a>
          </div>
        </div>
      </div>
      {/* <!-- End Sidebar --> */}
        <div id="content-wrapper">
          <div className="page-content">

            {/* <!-- Header Bar --> */}
            <div className="row header">
              <div className="col-xs-12">
                <div className="user pull-right">

                </div>

                <div className="search-company">

                  <div className="row">
                    <div className="col-md-9">
                      <div className="pull-left">Search By:</div>
                      <div className="pull-right"><input className="search-input-text form-control" type="text" id="txtSearch" name="txtSearch" placeholder="Prov. ID/Prov. Name/Group Name/Facility Name/GP ID/GRP Name" ></input></div>
                    <div className="clearfix"></div>
                    </div>
                    <div className="col-md-3">
                    <input className="search-input-button btn btn-xs btn-success" type="submit" id="bthSearch" name="bthSearch" value="Search"></input>
                    </div>
                  </div>
                  

                </div>
              </div>
            </div>
            {/* <!-- End Header Bar --> */}
            {/* <!-- Main Content --> */}
            {/* <!-- uiView:  --> */}
            <Route exact path="/" component={PageContent} />
            {/* <Route path="/tables" component={Tables}/> */}
          </div> {/* <!-- End Page Content -->*/}
        </div>{/* <!-- End Content Wrapper -->*/}
      </div>
    );
  }
}
export default App;
