import React from "react";
import ReactDOM from "react-dom";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import "filepond/dist/filepond.min.css";

import "./styles.css";

registerPlugin(FilePondPluginImagePreview);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">File Pond file upload </h1>
        </header>
        <FilePond allowMultiple={true} server="www.google.com" />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
