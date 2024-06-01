import "./App.css";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Before from "./Before";
import After from "./After";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Before />}/>
          <Route path="/after" element={<After />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
