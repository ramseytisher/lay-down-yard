import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <h1>Quarry Brothers LLC</h1>
            <h2>Website Under Construction .. Contact Mike @ 740-509-2693 For Inquiries</h2>
          </div>
        </header>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.0039667211568!2d-81.53632568445603!3d39.76588490288757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8837d3fdc5d706bb%3A0x9816db9814b2d51d!2sQuarry+Brothers+LLC+Properties!5e1!3m2!1sen!2sus!4v1532626206009" 
            title="lay-down-yard-location"
            width="100%" 
            height="600" 
            frameborder="0" 
            style={{ border: 0 }} 
            allowfullscree
            />

        </div>
      </div>
    );
  }
}

export default App;
