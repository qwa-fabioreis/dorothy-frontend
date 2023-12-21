import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Layout/Header/NavBar";
import Footer from "./Layout/Footer/Footer";
import AplicationsRouts from "./Configuration/ApplicationRouts";

function App() {
  return (
    <Router>
      <NavBar />
      <AplicationsRouts />
      <Footer />
    </Router>
  );
}

export default App;
