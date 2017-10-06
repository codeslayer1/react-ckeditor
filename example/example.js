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

  onChange(evt){
    console.log("onChange fired with event info: ",evt, "and data: ",evt.editor.getData());
  }

  onBlur(evt){
    console.log("onBlur fired with event info: ",evt);
  }

  afterPaste(evt){
    console.log("afterPaste fired with event info: ",evt);
  }

  render() {
    return (
      <CKEditor
        content={this.state.content}
        events={{
          blur: this.onBlur,
          afterPaste: this.afterPaste,
          change: this.onChange
        }}
      />
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('example')
);
