import React, {useState,useRef,useEffect} from 'react';
import socket from '../socketConfig';
import CodeEditor from '@uiw/react-textarea-code-editor';

import axios from "axios";
 

const Form = ({isOpen,isOver,gameID, question})=>{
    const [code, setCode] = useState("");
    const [output, setOutput] = useState("");
    const [language, setLanguage] = useState("py");
    const [jobId, setJobId] = useState(null);
    const [testfile, setFile] = useState("");

    const [status, setStatus] = useState(null);
    const [jobDetails, setJobDetails] = useState(null);
    useEffect(() => {
      setCode(question.starter);
    }, [language]);
  
    useEffect(() => {
      const defaultLang = localStorage.getItem("default-language") || "py";
      setLanguage(defaultLang);
      setFile(question.file)
    }, []);
  
    let pollInterval;
    let test = question.file
    const handleSubmit = async () => {
      const payload = {
        language,
        code,
        testfile,
      };
      try {
        setOutput("");
       //5000
        const { data } = await axios.post(process.env.REACT_APP_RUN, payload);
        setOutput(data.output);
        socket.emit('userInput',{userInput:data.output,gameID});

      } catch ({ response }) {
        const errMsg = response.data.err.stderr;
        setOutput(errMsg);
      }
    };
  

    return (
      <div className="App">
        <h1>{question.title}</h1>
        <p>{question.text}</p>
        <p>Output: {question.output}</p>

      {isOpen || isOver ?  <></> :
        <CodeEditor
        language="py"

          readOnly={isOpen || isOver}
          value={code}
          padding={15}
          style={{
            fontSize: 12,
            backgroundColor: "#f5f5f5",
            fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
          }}
          onChange={(e) => {
            setCode(e.target.value);
          }}
        /> }
        <br />
        {isOpen || isOver ?  <></> :  <button onClick={handleSubmit}>Submit</button>}
        <p>{status}</p>
        <p>{jobId ? `Job ID: ${jobId}` : ""}</p>
        {/* <p>{renderTimeDetails()}</p> */}
        <p>{output}</p>
      </div>
    );
}

export default Form;
