import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

// function App() {
//   const [selectedTab, setSelectedTab] = useState(0);
//   return (
//     <div className="App">
//       <ul className="menu-bar">
//         <li className={selectedTab === 0 ? "selected" : ""} onClick={() => setSelectedTab(0)}>all</li>
//         <li className={selectedTab === 1 ? "selected" : ""} onClick={() => setSelectedTab(1)}>images</li>
//         <li className={selectedTab === 2 ? "selected" : ""} onClick={() => setSelectedTab(2)}>videos</li>
//       </ul>
//     </div>

//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 0,
    };

    this.setSelectedTab = function (value) {
      this.setState(this.setState({ selectedTab: value }));
      console.log(this.state);
    };
  }
  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <ul className="menu-bar">
          <li
            className={selectedTab === 0 ? 'selected' : ''}
            onClick={() => this.setSelectedTab(0)}
          >
            all
          </li>
          <li
            className={selectedTab === 1 ? 'selected' : ''}
            onClick={() => this.setSelectedTab(1)}
          >
            images
          </li>
          <li
            className={selectedTab === 2 ? 'selected' : ''}
            onClick={() => this.setSelectedTab(2)}
          >
            videos
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
