import React, { Component } from 'react';
import AceEditor from 'react-ace';
 
import 'brace/mode/java';
import 'brace/theme/github';

class Editor extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {};
    }
    onChange(e) {
        console.log(e);
    }
    render() {
      return (
        <AceEditor
            mode="java"
            theme="github"
            onChange={this.onChange}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{$blockScrolling: true}}
        />
      );
    }
}
export default Editor;