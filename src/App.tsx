import "./App.css";
import DifferentText from "./components/midSection/DifferentText";
import LeftTopNav from "./components/topNav/LeftTopNav";
import MidTopNav from "./components/topNav/MidTopNav";
import MainLeft from "./components/topSection/MainLeft";
import Paragraph from "./components/topSection/Paragraph";
import ShortLine from "./components/topSection/ShortLine";
import Image from "./components/topSection/Image";
import MapImage from "./components/topSection/MapImage";
import ViewButton from "./components/topSection/ViewButton";
import Icons from "./components/midSection/SnappyIcons";
import SnappyIcons from "./components/midSection/SnappyIcons";
import Subheading from "./components/midSection/Subheading";
import ListNav from "./components/bottomSection/footer/ListNav";
import SocialIcons from "./components/bottomSection/footer/SocialIcons";

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
            <ViewButton />
          </div>
          <div className="image"></div>
        </div>
        {/* middle main conten */}
        <div className="middleMainContent">
          <div className="weAreDiff">
            
            <DifferentText />
          </div>
          <div className="snappy">
            <SnappyIcons />
          </div>
          <div className="bottomSection">
            <Subheading />
          </div>

          <div className="bottomNav">
            <ListNav />
          </div>
          <footer className="footer">
            <SocialIcons />
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
