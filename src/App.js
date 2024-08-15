import { Route, Routes } from "react-router-dom"; // Navigate
import Overview from "./components/Overview";
import Authentication from "./components/Authentication";
import Endpoints from "./components/Endpoints";
import Tutorial from "./components/Tutorial";
import CodeExamples from "./components/CodeExamples";
import Pricing from "./components/Pricing";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/endpoints" element={<Endpoints />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="code-examples" element={<CodeExamples />} />
        <Route path="pricing" element={<Pricing />} />
      </Routes>
    </div>
  );
}

export default App;
