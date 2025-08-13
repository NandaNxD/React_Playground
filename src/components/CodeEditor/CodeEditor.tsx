import { Editor } from "@monaco-editor/react";
import { useEffect, useState } from "react";

const CodeEditor = () => {

    const [code]=useState('const a=12;console.log(a);')

  return (
    <Editor height="100%" defaultLanguage="javascript" defaultValue={code} theme="vs-dark" />
  );
}

export default CodeEditor