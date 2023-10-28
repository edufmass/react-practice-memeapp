import { useState } from 'react';
import html2canvas from 'html2canvas';
import './App.css';

function App() {

  const [topTxt, setTopTxt] = useState('');
  const [bottomTxt, setBottomTxt] = useState('');
  const [memeImg, setMemeImg] = useState('');

  const onChangeTopTxt = function(e) {
    //console.log(e.target.value);
    setTopTxt(e.target.value);
  }

  const onChangeBottomTxt = function(e) {
    setBottomTxt(e.target.value);
  }

  const onChangeMemeImg = function(e) {
    setMemeImg(e.target.value);
  }

  const onClickExport = function() {
    // console.log('export');
    html2canvas(document.querySelector('#meme'))
      .then(canvas => {
        let img = canvas.toDataURL("image/png");
        let link = document.createElement('a');
        link.download = 'meme.png';
        link.href = img;
        link.click();
      });
  }

  return (
    <div className="App">

      {/* ToDo: select meme image */}
      <select onChange={onChangeMemeImg}>
        <option value="fire">House on fire</option>
        <option value="futurama">Fry thinking</option>
        <option value="history">Ovnis guy</option>
        <option value="matrix">Morfeo matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart guy</option>
      </select>
      <br />

      {/* ToDo: input top text */}
      <input onChange={onChangeTopTxt} type="text" placeholder="Top text" />
      <br />

      {/* ToDo: input bottom text */}
      <input onChange={onChangeBottomTxt} type="text" placeholder="Bottom text" />
      <br />

      {/* ToDo: export meme image with text */}
      <button onClick={onClickExport}>Export</button>
      <br />

      {/* ToDo: meme preview */}
      <div id="meme" className="meme">
        <span>{topTxt}</span> <br />
        <span>{bottomTxt}</span>
        <img src={"images/" + memeImg + ".jpg"} />
      </div>

    </div>
  );
}

export default App;
