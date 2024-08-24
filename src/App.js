import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./containers/Home";

function App() {
  return (
    <main >
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
