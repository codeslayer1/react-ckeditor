const React = require('react');
const ReactDOM = require('react-dom');
import CKEditor from "../src";

class Example extends React.Component {
  constructor(props){
    super(props);

    //State initialization
    this.state = {
      content: "Hello World"
    };

    //setInterval(this.setContent.bind(this), 1000)
  }

  //------ Test for race condition ------ //
  // setContent(){
  //   console.log("Setting content");
  //   this.setState({
  //     content: "Hello World " + Math.random()
  //   })
  // }

  render() {
    return (
      <CKEditor content={this.state.content}/>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('example')
);
