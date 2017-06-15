const React = require('react');
const ReactDOM = require('react-dom');
import CKEditor from "../src";

const Example = React.createClass({
  render() {
    return (
      <CKEditor />
    );
  }
});

ReactDOM.render(
  <Example />,
  document.getElementById('example')
);
