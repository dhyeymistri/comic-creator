import './App.css';
import React, { useState } from 'react';
import Alert from './Alert';

function App() {
  document.body.style.backgroundColor= '#332D2D';
  const [textInput1, setTextInput1] = useState('');
  const [textInput2, setTextInput2] = useState('');
  const [textInput3, setTextInput3] = useState('');
  const [textInput4, setTextInput4] = useState('');
  const [textInput5, setTextInput5] = useState('');
  const [textInput6, setTextInput6] = useState('');
  const [textInput7, setTextInput7] = useState('');
  const [textInput8, setTextInput8] = useState('');
  const [textInput9, setTextInput9] = useState('');
  const [textInput10, setTextInput10] = useState('');
  const [generatedImage1, setGeneratedImage1] = useState(null);
  const [generatedImage2, setGeneratedImage2] = useState(null);
  const [generatedImage3, setGeneratedImage3] = useState(null);
  const [generatedImage4, setGeneratedImage4] = useState(null);
  const [generatedImage5, setGeneratedImage5] = useState(null);
  const [generatedImage6, setGeneratedImage6] = useState(null);
  const [generatedImage7, setGeneratedImage7] = useState(null);
  const [generatedImage8, setGeneratedImage8] = useState(null);
  const [generatedImage9, setGeneratedImage9] = useState(null);
  const [generatedImage10, setGeneratedImage10] = useState(null);
  const [alert, setAlert] = useState(null);

  const handleInputChange1 = (e) => {
    setTextInput1(e.target.value);
  };
  const handleInputChange2 = (e) => {
    setTextInput2(e.target.value);
  };
  const handleInputChange3 = (e) => {
    setTextInput3(e.target.value);
  };
  const handleInputChange4 = (e) => {
    setTextInput4(e.target.value);
  };
  const handleInputChange5 = (e) => {
    setTextInput5(e.target.value);
  };
  const handleInputChange6 = (e) => {
    setTextInput6(e.target.value);
  };
  const handleInputChange7 = (e) => {
    setTextInput7(e.target.value);
  };
  const handleInputChange8 = (e) => {
    setTextInput8(e.target.value);
  };
  const handleInputChange9 = (e) => {
    setTextInput9(e.target.value);
  };
  const handleInputChange10 = (e) => {
    setTextInput10(e.target.value);
  };

  async function query(data) {
    const response = await fetch(
      "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
      {
        headers: {
          "Accept": "image/png",
          "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
  
    if (!response.ok) {
      showAlert(`HTTP error! Status: ${response.status}`, "danger");
    }
  
    const result = await response.blob();
    return result;
  }

  const handleGenerateImage = async () => {
    try {
      if(textInput1!=='' && textInput2!=='' && textInput3!=='' && textInput4!=='' && textInput5!=='' && textInput6!=='' && textInput7!=='' && textInput8!=='' && textInput9!=='' && textInput10!==''){
        showAlert("Loading Comic", "loading");
        setGeneratedImage1(null);
        setGeneratedImage2(null);
        setGeneratedImage3(null);
        setGeneratedImage4(null);
        setGeneratedImage5(null);
        setGeneratedImage6(null);
        setGeneratedImage7(null);
        setGeneratedImage8(null);
        setGeneratedImage9(null);
        setGeneratedImage10(null);
        const imageData1 = await query({ "inputs": textInput1 });
        setGeneratedImage1(URL.createObjectURL(imageData1));
        const imageData2 = await query({ "inputs": textInput2 });
        setGeneratedImage2(URL.createObjectURL(imageData2));
        const imageData3 = await query({ "inputs": textInput3 });
        setGeneratedImage3(URL.createObjectURL(imageData3));
        const imageData4 = await query({ "inputs": textInput4 });
        setGeneratedImage4(URL.createObjectURL(imageData4));
        const imageData5 = await query({ "inputs": textInput5 });
        setGeneratedImage5(URL.createObjectURL(imageData5));
        const imageData6 = await query({ "inputs": textInput6 });
        setGeneratedImage6(URL.createObjectURL(imageData6));
        const imageData7 = await query({ "inputs": textInput7 });
        setGeneratedImage7(URL.createObjectURL(imageData7));
        const imageData8 = await query({ "inputs": textInput8 });
        setGeneratedImage8(URL.createObjectURL(imageData8));
        const imageData9 = await query({ "inputs": textInput9 });
        setGeneratedImage9(URL.createObjectURL(imageData9));
        const imageData10 = await query({ "inputs": textInput10 });
        setGeneratedImage10(URL.createObjectURL(imageData10));
        showAlert("Image Generated", "success");
      } else{
        showAlert("Empty Input", "danger");
      }
    } catch (error) {
      showAlert(error, "danger");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  if(type==="success"){
      setTimeout(() => {
      setAlert(null);
    }, 5000);
  }
  else if(type!=="loading"){
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  }

  return (
    <div className='App'>
      <h1 className='headingh1'>Comic Creator Web App</h1>
      <Alert alert={alert}/>
      <div className='inputDiv'>
        <label htmlFor="textInput1">Enter Text for Panel 1</label>
        <textarea
          type="text"
          id="textInput1"
          className="textInput"
          rows='2'
          value={textInput1}
          onChange={handleInputChange1}
        />
      </div>
      <div className='inputDiv'>
        <label htmlFor="textInput2">Enter Text for Panel 2</label>
        <textarea
          type="text"
          id="textInput2"
          className="textInput"
          rows='2'
          value={textInput2}
          onChange={handleInputChange2}
        />
      </div>
      <div className='inputDiv'>
        <label htmlFor="textInput3">Enter Text for Panel 3</label>
        <textarea
          type="text"
          id="textInput3"
          className="textInput"
          rows='2'
          value={textInput3}
          onChange={handleInputChange3}
        />
      </div>
      <div className='inputDiv'>
        <label htmlFor="textInput4">Enter Text for Panel 4</label>
        <textarea
          type="text"
          id="textInput4"
          className="textInput"
          rows='2'
          value={textInput4}
          onChange={handleInputChange4}
        />
      </div>
      <div className='inputDiv'>
        <label htmlFor="textInput5">Enter Text for Panel 5</label>
        <textarea
          type="text"
          id="textInput5"
          className="textInput"
          rows='2'
          value={textInput5}
          onChange={handleInputChange5}
        />
      </div>
      <div className='inputDiv'>
        <label htmlFor="textInput6">Enter Text for Panel 6</label>
        <textarea
          type="text"
          id="textInput6"
          rows='2'
          className="textInput"
          value={textInput6}
          onChange={handleInputChange6}
        />
      </div>
      <div className='inputDiv'>
        <label htmlFor="textInput7">Enter Text for Panel 7</label>
        <textarea
          type="text"
          id="textInput7"
          rows='2'
          className="textInput"
          value={textInput7}
          onChange={handleInputChange7}
        />
      </div>
      <div className='inputDiv'>
        <label htmlFor="textInput8">Enter Text for Panel 8</label>
        <textarea
          type="text"
          id="textInput8"
          rows='2'
          className="textInput"
          value={textInput8}
          onChange={handleInputChange8}
        />
      </div>
      <div className='inputDiv'>
        <label htmlFor="textInput9">Enter Text for Panel 9</label>
        <textarea
          type="text"
          id="textInput9"
          rows='2'
          className="textInput"
          value={textInput9}
          onChange={handleInputChange9}
        />
      </div>
      <div className='inputDiv'>
        <label htmlFor="textInput10">Enter Text for Panel 10</label>
        <textarea
          type="text"
          id="textInput10"
          rows='2'
          className="textInput"
          value={textInput10}
          onChange={handleInputChange10}
        />
      </div>
      <div className='headingh1'>
        <button onClick={handleGenerateImage} className='generateBtn'>Generate </button>
      </div>
      <div className='comic-container-container'>
      <h2 className='heading2'>Generated Comic:</h2>
      <div className='comic-container'>
      {generatedImage1 && (
        <div className='generatedImgContainer card'>
          <img src={generatedImage1} alt="Generated" className='generatedImg'/>
        </div>
      )}
      {generatedImage2 && (
        <div className='generatedImgContainer card'>
          <img src={generatedImage2} alt="Generated" className='generatedImg'/>
        </div>
      )}
      {generatedImage3 && (
        <div className='generatedImgContainer card'>
          <img src={generatedImage3} alt="Generated" className='generatedImg'/>
        </div>
      )}
      {generatedImage4 && (
        <div className='generatedImgContainer card'>
          <img src={generatedImage4} alt="Generated" className='generatedImg'/>
        </div>
      )}
      {generatedImage5 && (
        <div className='generatedImgContainer card'>
          <img src={generatedImage5} alt="Generated" className='generatedImg'/>
        </div>
      )}
      {generatedImage6 && (
        <div className='generatedImgContainer card'>
          <img src={generatedImage6} alt="Generated" className='generatedImg'/>
        </div>
      )}
      {generatedImage7 && (
        <div className='generatedImgContainer card'>
          <img src={generatedImage7} alt="Generated" className='generatedImg'/>
        </div>
      )}
      {generatedImage8 && (
        <div className='generatedImgContainer card'>
          <img src={generatedImage8} alt="Generated" className='generatedImg'/>
        </div>
      )}
      {generatedImage9 && (
        <div className='generatedImgContainer card'>
          <img src={generatedImage9} alt="Generated" className='generatedImg'/>
        </div>
      )}
      {generatedImage10 && (
        <div className='generatedImgContainer card'>
          <img src={generatedImage10} alt="Generated" className='generatedImg'/>
        </div>
      )}
      </div>
      </div>
    </div>
  );
}

export default App;
