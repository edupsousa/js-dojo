import DojoChat from "./components/DojoChat";
import DojoEditor from "./components/DojoEditor";
import DojoUtils from "./components/DojoUtils";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="app">
      <NavBar />
      <DojoEditor />
      <DojoUtils />
      <DojoChat />
    </div>
  );
}

export default App;
