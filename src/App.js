import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: 'aicha',
      bio: 'A  developer',
      imgSrc: 'https://th.bing.com/th?q=Belle+Bebe&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-XA&cc=TN&setlang=fr&adlt=strict&t=1&mw=247',
      profession: 'developper',
    },
    show: true,
    time: 0,
  };

  componentDidMount() {
 setInterval(() => { this.setState(
        (a) => ({ time: a.time + 1 }));
    }, 1000);
  }

  Profile = () => {
    this.setState((State) => ({
      show: !State.show,
    }));
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.Profile}>Profile</button>
        {this.state.show && (
          <div>
            <h2>{this.state.person.fullName}</h2>
            <p>{this.state.person.bio}</p>
            <p>Profession: {this.state.person.profession}</p>
            <img src={this.state.person.imgSrc} alt={this.state.person.fullName} />
          </div>
        )}
        <p>Time : {this.state.time} seconds</p>
      </div>
    );
  }
}

export default App;