import "./App.css";
import Microphone from "./components/Microphone";

function App() {
  return (
    <div className="app">
      <header className="app-header"></header>
      <main className="app-main">
        <Microphone />
      </main>
      <footer className="app-footer"></footer>
    </div>
  );
}

export default App;
