import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
const loadScript = require('load-script');

var defaultScriptUrl = "https://cdn.ckeditor.com/4.6.2/standard/ckeditor.js";

/**
 * @author codeslayer1
 * @description CKEditor component to render a CKEditor textarea with defined configs and all CKEditor events handler
 */
class CKEditor extends React.Component {
  constructor(props) {
    super(props);

    //Bindings
    this.onLoad = this.onLoad.bind(this);
    this.registerEventHandlers = this.registerEventHandlers.bind(this);

    //State initialization
    this.state = {
      isScriptLoaded: this.props.isScriptLoaded,
      config: this.props.config
    };
  }

  //load ckeditor script as soon as component mounts if not already loaded
  componentDidMount() {
    if (!this.props.isScriptLoaded) {
      loadScript(this.props.scriptUrl, this.onLoad);
    } else {
      this.onLoad();
    }
  }

  componentWillUnmount() {
    this.unmounting = true;
    if (this.editorInstance) {
      this.editorInstance.removeAllListeners();
      window.CKEDITOR.remove(this.editorInstance);
    }
  }

  onLoad() {
    if (this.unmounting) return;

    this.setState({
      isScriptLoaded: true
    });

    if (!window.CKEDITOR) {
      console.error("CKEditor not found");
      return;
    }

    this.editorInstance = window.CKEDITOR.appendTo(
      ReactDOM.findDOMNode(this),
      this.state.config,
      this.props.content
    );

    //Register listener for change event.
    //PS - This prop is now deprecated since change event can now be directly listened via events prop.
    /*
    ******** DEPRECATED ********
    this.editorInstance.on("change", () => {
      const content = this.editorInstance.getData();

      //call onChange callback if present
      if(this.props.onChange){
        this.props.onChange(content);
      }
    });
    */

    this.registerEventHandlers(this.props.events);
  }

  registerEventHandlers(events, prevEvents) {
    prevEvents = prevEvents || {};

    //Register listener for custom events if any
    for (var event in events) {
      if (events[event] !== prevEvents[event]) {
        var prevEventHandler = prevEvents[event];
        if (prevEventHandler) this.editorInstance.removeListener(event, prevEventHandler);

        var eventHandler = events[event];
        this.editorInstance.on(event, eventHandler);
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    this.registerEventHandlers(nextProps.events, this.props.events);
  }

  render() {
    return <div className={this.props.activeClass} />;
  }
}

CKEditor.defaultProps = {
  content: "",
  config: {},
  isScriptLoaded: false,
  scriptUrl: defaultScriptUrl,
  activeClass: "",
  events: {}
};

CKEditor.propTypes = {
  content: PropTypes.any,
  config: PropTypes.object,
  isScriptLoaded: PropTypes.bool,
  scriptUrl: PropTypes.string,
  activeClass: PropTypes.string,
  events: PropTypes.object
};

export default CKEditor;
