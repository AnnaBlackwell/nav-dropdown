import React, {Component} from 'react';
import {
  Header,
  HeaderItem,
  headerItems,
  Logo,
} from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header>
          <Logo />
          {headerItems.map((item) => <HeaderItem item={item} />)}
        </Header>
      </div>
    );
  }
}


export default App;
