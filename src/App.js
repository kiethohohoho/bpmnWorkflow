import { useEffect, useState } from "react";
import ReactBpmn from "react-bpmn";
import xml from "./assets/diagram.bpmn";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";

function App(props) {
  function onShown() {
    console.log("diagram shown");
  }

  function onLoading() {
    console.log("diagram loading");
  }

  function onError(err) {
    console.log("failed to show diagram");
  }

  const [diagram, setDiagram] = useState("");

  useEffect(() => {
    fetch(xml)
      .then((xml) => xml.text())
      .then((xml) => {
        setDiagram(xml);
      });
  }, []);

  return (
    <ReactBpmn
      diagramXML={diagram}
      onShown={onShown}
      onLoading={onLoading}
      onError={onError}
    />
  );
}
export default App;
