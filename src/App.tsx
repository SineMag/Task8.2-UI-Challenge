import "./App.css";
import DifferentText from "./components/midSection/differentText";
import LeftTopNav from "./components/topNav/leftTopNav";
import MidTopNav from "./components/topNav/midTopNav";
import MainLeft from "./components/topSection/mainLeft";
import Paragraph from "./components/topSection/paragraph";
import ShortLine from "./components/topSection/ShortLine";
import Image from "./components/topSection/image";

function App() {
  return (
    <>
      <div className="container">
        <div className="navSection">
          <div id="logo">
            <LeftTopNav />
          </div>
          <div id="midTopNav">
            <MidTopNav />
          </div>
        </div>

        {/* main content ..top purple */}
        <div className="mainContent">
          <div className="textContent">
            <ShortLine />
            <MainLeft />
            <Paragraph />
          </div>
          <div className="image"></div>
        </div>
      </div>
    </>
  );
}

export default App;
