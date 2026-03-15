import "./App.css";
import { Avatar, Intro, SkillList } from "./pagecomponent.js";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}

export default App;
