import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import { useState } from "react";

function DojoEditor() {
  const [code, setCode] = useState("function add(a, b) {\n  return a + b;\n}");
  return (
    <Editor
      value={code}
      onValueChange={(code) => setCode(code)}
      highlight={(code) =>
        Prism.highlight(code, Prism.languages.javascript, "javascript")
      }
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
      }}
    />
  );
}

export default DojoEditor;
