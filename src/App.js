import { useState } from "react";
//Import Styles
import "./styles/app.scss";
//Import Components
import Player from "./components/Player";
import Song from "./components/Song";
import data from "./utils";

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
