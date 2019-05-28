import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class App extends React.Component {
    render(){
      return (
        <div>
            <Header username= 'Alex'/>
            <Greeting />
        </div>
      );
    };
};

class Header extends React.Component {
    render() {
        return (
        <header>
            <p>Welcome, {this.props.username}!</p>
        </header>
        );
    };
};



class Greeting extends Component {
    render() {
        let timeOfDay
        const date = new Date()
        const hours = date.getHours()
        if (hours < 12) {
            timeOfDay = "morning";
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon";
        } else {
            timeOfDay = "night";
        }
        return(
            <h1>Good {timeOfDay} to you, sir or madam!</h1>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

