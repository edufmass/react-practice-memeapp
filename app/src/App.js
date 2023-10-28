import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      {/* ToDo: select meme image */}
      <select>
        <option value="fire">House on fire</option>
        <option value="futurama">Fry thinking</option>
        <option value="history">Ovnis guy</option>
        <option value="matrix">Morfeo matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart guy</option>
      </select>
      <br />

      {/* ToDo: input top text */}
      <input type="text" placeholder="Top text" />
      <br />

      {/* ToDo: input bottom text */}
      <input type="text" placeholder="Bottom text" />
      <br />

      {/* ToDo: export meme image with text */}
      <button>Export</button>
      <br />

      {/* ToDo: meme preview */}
      <div>
        <span>Top text</span>
        <span>Bottom text</span>
        <img src="" />
      </div>

    </div>
  );
}

export default App;
