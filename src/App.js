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
    const {selected} = this.state;
    return headerItems.filter((item) => selected === 'teacher@school.org' ? item.teacherView : item.studentView);
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
      <Header>
        <Logo />
        {this.getHeaderItems().map((item) => (
          <HeaderItem 
            item={item} 
            key={item.value} 
          />
        ))}
        <HeaderDropdown 
          selected={this.state.selected} 
          options={options} 
          onSelect={this.onSelect} 
        />
      </Header>
    );
  }
}

export default App;
