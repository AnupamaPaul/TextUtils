import { useState } from "react";

const TextField = (props) => {
  const [text, setText] = useState('');

  const changeHandler = (e) => {
    console.log(e.target.value)
    setText(e.target.value);
  }

  const clickHandlerToUpperCase = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  }

  const clickHandlerToLowerCase = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  }

  const clickHandlerClearText = () => {
    let newtext = "";
    setText(newtext);
  }

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
        <h2>Enter text here</h2>
        <textarea onChange={changeHandler} value={text} rows={10} cols={60} style={{ backgroundColor: props.mode === 'dark' ? 'rgba(75, 74, 74, 0.68)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
        <div>
          <button className="btn" onClick={clickHandlerToUpperCase}>Uppercase</button>
          <button className="btn" onClick={clickHandlerToLowerCase}>Lower case</button>
          <button className="btn" onClick={clickHandlerClearText}>Clear</button>
        </div>

      </div>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h3>Your text summary</h3>
        <p>Your text has {text.length ? text.trim().split(" ").length : 0} words and {text.length} character</p>
        <p> It took {0.008 * text.split(" ").length} minutes to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
};

export default TextField;