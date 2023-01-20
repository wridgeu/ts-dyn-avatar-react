import "./App.css";
import Avatar from "./components/Avatar";
import Dismissible from "./components/Dismissible";

export default function App() {
  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <Dismissible
          headline="Welcome to the new feed!"
          description="someText"
          feedbackUrl="someLink"
        />
        <br />
        <Avatar />
      </div>
    </div>
  );
}
