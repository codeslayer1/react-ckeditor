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
    this.setContent = this.setContent.bind(this)
  }

  //------ Test for race condition ------ //
  setContent(){
    console.log("Setting content");
    this.setState({
      content: "Hello World " + Math.random()
    })
  }

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
      <div>
        <button onClick={() => this.setContent()} children='Set content' />
        <CKEditor
          content={this.state.content}
          events={{
            blur: this.onBlur,
            afterPaste: this.afterPaste,
            change: this.onChange
          }}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('example')
);
