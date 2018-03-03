import React, {Component} from 'react';
import {
  Header,
  HeaderItem,
  Logo,
} from './components/Header';
import headerItems from './content/headerItems';

class App extends Component {
  state = {
    view: 'teacher',
  };

  getHeaderItems = () => {
    const {view} = this.state;
    return headerItems.filter((item) => {
      if (view === 'teacher') {
        return item.teacherView;
      } else {
        return item.studentView;
      }
    });
  }

  render() {
    return (
      <div>
        <Header>
          <Logo />
          {this.getHeaderItems().map((item) => (
            <HeaderItem 
              item={item} 
              key={item.id} 
            />
          ))}
        </Header>
      </div>
    );
  }
}

export default App;
