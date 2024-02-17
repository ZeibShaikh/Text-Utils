import React from "react";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const TextArea = (props) => {
  const [text, setText] = useState();
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const UpperCase = () => {
    let textOne = text.toUpperCase();
    setText(textOne);
    props.showAlert("Converted to UpperCase", "success");
  };
  const LowerCase = () => {
    let textTwo = text.toLowerCase();
    setText(textTwo);
    props.showAlert("Converted to LowerCase", "success");
  };
  // const capT = () => {
  //   // let textThree=text.charAt(0).toUpperCase()
  //   // let textFour=textThree+text.slice(1)
  //   // setText(textFour)
  //   let a = text;
  //   let b = a.split(" ");
  //   for (let c = 0; c < b.length; c++) {
  //     let d = b[c].
  //     let e=d.charAt(0).toUpperCase();
  //     let f = e + b[c].slice(1);
  //     setText(e);
  //   }
  // };
  const clearText = () => {
    setText("");
    props.showAlert("TextArea cleared", "success");
  };
  const whiteSpace = () => {
    setText(text.trim());
    props.showAlert("WhiteSpaces Removed", "success");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };
  return (
    <>
      <div className="mb-3">
        <h1>Try Text-Utils- Easily manage your text here and preview it!  </h1>
        <textarea
          className="form-control my-3"
          id="exampsleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <button disabled={text?.length==0} className="btn btn-primary my-3 mx-3" onClick={UpperCase}>
          Uppercase
        </button>
        <button disabled={text?.length==0} className="btn btn-primary my-3 mx-3" onClick={LowerCase}>
          Lowercase
        </button>
        {/* <button className="btn btn-primary my-3 mx-3" onClick={capT}>
          Capitalize
        </button> */}
        <button disabled={text?.length==0} className="btn btn-primary my-3 mx-3" onClick={clearText}>
          Clear
        </button>
        <button disabled={text?.length==0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text?.length==0} className="btn btn-primary my-3 mx-3" onClick={whiteSpace}>
          Remove WhiteSpaces
        </button>
      </div>
      <div className="analyzetext">
        <h3>Analyze Your Text Here</h3>
        <p>
          Number of Words:{text?.split(" ").filter((element)=>{
            return element.length!=0
          }).length}
        </p>
        <p>
          Number of Letters:{text?.split("").length}
        </p>
        <h3>Preview Your Text</h3>
        <p>{text}</p>
      </div>
    </>
  );
};

export default TextArea;
