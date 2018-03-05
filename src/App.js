import React, {Component} from 'react';
import {
  Header,
  HeaderItem,
  Logo,
  HeaderDropdown,
} from './components/Header';
import headerItems from './content/headerItems';

class App extends Component {
  state = {
    selected: 'teacher@school.org',
  };

  getHeaderItems = () => {
    return headerItems.filter((item) => {
      if (this.state.selected === 'teacher@school.org') {
        return item.teacherView;
      } else {
        return item.studentView;
      }
    });
  }

  onSelect = (selected) => {
    this.setState({selected});
  }

  render() {
    const options = [
        {value: "student@school.org"},
        {value: "teacher@school.org"},
        {
            value: "Settings",
            url: "/settings",
        },
        {
            value: "Sign Out",
            url: "/sign-out",
        },
    ];
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
          <HeaderDropdown 
            selected={this.state.selected} 
            options={options} 
            onSelect={this.onSelect} 
          />
        </Header>
      </div>
    );
  }
}

export default App;
