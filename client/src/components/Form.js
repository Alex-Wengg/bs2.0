import React, {useState,useRef,useEffect} from 'react';
import socket from '../socketConfig';

import axios from "axios";
import stubs from "./stubs";
import moment from "moment";
 

const Form = ({isOpen,isOver,gameID})=>{
    const [code, setCode] = useState("");
    const [output, setOutput] = useState("");
    const [language, setLanguage] = useState("py");
    const [jobId, setJobId] = useState(null);
    const [status, setStatus] = useState(null);
    const [jobDetails, setJobDetails] = useState(null);
  
    useEffect(() => {
      setCode(stubs[language]);
    }, [language]);
  
    useEffect(() => {
      const defaultLang = localStorage.getItem("default-language") || "py";
      setLanguage(defaultLang);
    }, []);
  
    let pollInterval;
  
    const handleSubmit = async () => {
      const payload = {
        language,
        code,
      };
      try {
        setOutput("");
        const { data } = await axios.post("https://coderace-ohjzsdclpa-uc.a.run.app/run", payload);

        setOutput(data.output);
        socket.emit('userInput',{userInput:data.output,gameID});

      } catch ({ response }) {
        const errMsg = response.data.err.stderr;
        setOutput(errMsg);
      }
    };
  
    // const setDefaultLanguage = () => {
    //   localStorage.setItem("default-language", language);
    //   console.log(`${language} set as default!`);
    // };
  
    // const renderTimeDetails = () => {
    //   if (!jobDetails) {
    //     return "";
    //   }
    //   let { submittedAt, startedAt, completedAt } = jobDetails;
    //   let result = "";
    //   submittedAt = moment(submittedAt).toString();
    //   result += `Job Submitted At: ${submittedAt}  `;
    //   if (!startedAt || !completedAt) return result;
    //   const start = moment(startedAt);
    //   const end = moment(completedAt);
    //   const diff = end.diff(start, "seconds", true);
    //   result += `Execution Time: ${diff}s`;
    //   return result;
    // };
  
    return (
      <div className="App">
        <h1>Online Code Compiler</h1>
        <p>Add Two Numbers</p>
        {/* <div>
          <label>Language:</label>
          <select
            value={language}
            onChange={(e) => {
              const shouldSwitch = window.confirm(
                "Are you sure you want to change language? WARNING: Your current code will be lost."
              );
              if (shouldSwitch) {
                setLanguage(e.target.value);
              }
            }}
          >
            <option value="cpp">C++</option>
            <option value="py">Python</option>
          </select>
        </div> */}
        {/* <br />
        <div>
          <button onClick={setDefaultLanguage}>Set Default</button>
        </div>
        <br /> */}
        <textarea
          rows="20"
          cols="75"
          readOnly={isOpen || isOver}
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
          }}
        ></textarea>
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
