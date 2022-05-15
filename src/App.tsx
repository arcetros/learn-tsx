import Todos from "./components/Todos";
import "./styles.css";

let DUMMY_ITEMS = [
  { id: 1, name: "Learn React" },
  { id: 2, name: "Learn Typescript" }
];

export default function App() {
  return (
    <div className="App">
      <Todos items={DUMMY_ITEMS} />
    </div>
  );
}
