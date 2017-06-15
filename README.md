# react-ckeditor-component

**React component for CKEditor**

## Installation

[![react-ckeditor-component](https://nodei.co/npm/react-ckeditor-component.png)](https://npmjs.org/package/react-ckeditor-component)

## Usage

```js
import CKEditor from "react-ckeditor-component";

class Example extends Component {
    constructor(props) {
        super(props);
        this.updateContent = this.updateContent.bind(this);
        this.state = {
            content: 'content',
        }
    }

    updateContent(newContent) {
        this.setState({
            content: newContent
        })
    }

    render() {
        return (
            <CKEditor activeClass="p10" content={this.state.content} onChange={this.updateContent} />
        )
    }
}
```

The package also includes an in-built example under the `/example` folder. Run the sample application by cloning project and running npm start.

## Props

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 15%;">name</th>
        <th style="width: 15%;">type</th>
        <th style="width: 15%;">default</th>
        <th style="width: 15%;">mandatory</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>content</td>
          <td>any</td>
          <td></td>
          <td>No</td>
          <td>Default value to be set in CKEditor</td>
        </tr>
        <tr>
          <td>onChange</td>
          <td>function</td>
          <td></td>
          <td>No</td>
          <td>Callback function to be called onChange</td>
        </tr>
        <tr>
          <td>config</td>
          <td>object</td>
          <td></td>
          <td>No</td>
          <td>Configs to be passed in CKEditor</td>
        </tr>
        <tr>
          <td>isScriptLoaded</td>
          <td>boolean</td>
          <td>false</td>
          <td>No</td>
          <td>Pass true if ckeditor script is already loaded in project</td>
        </tr>
        <tr>
          <td>scriptUrl</td>
          <td>string</td>
          <td>Standard CKEditor</td>
          <td>No</td>
          <td>The CKEditor script that needs to be loaded. Pass a custom script with plugins if you need a customized CKEditor.</td>
        </tr>
        <tr>
          <td>activeClass</td>
          <td>string</td>
          <td></td>
          <td>No</td>
          <td>Any Css class to be used with CKEditor container div.</td>
        </tr>
    </tbody>
</table>

## License

`react-ckeditor-component` is released under the `MIT license`.
