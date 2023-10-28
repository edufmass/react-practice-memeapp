import { useState } from 'react';
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
      <button>Export</button>
      <br />

      {/* ToDo: meme preview */}
      <div>
        <span>{topTxt}</span> <br />
        <span>{bottomTxt}</span>
        <img src={"images/" + memeImg + ".jpg"} />
      </div>

    </div>
  );
}

export default App;
