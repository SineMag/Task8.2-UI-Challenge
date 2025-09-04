import "./App.css";
import DifferentText from "./components/midSection/DifferentText";
import LeftTopNav from "./components/topNav/LeftTopNav";
import MidTopNav from "./components/topNav/MidTopNav";
import MainLeft from "./components/topSection/MainLeft";
import Paragraph from "./components/topSection/Paragraph";
import ShortLine from "./components/topSection/ShortLine";
import Image from "./components/topSection/Image";
// import MapImage from "./components/topSection/MapImage";
import ViewButton from "./components/topSection/ViewButton";
import Icons from "./components/midSection/SnappyIcons";
import SnappyIcons from "./components/midSection/SnappyIcons";
import Subheading from "./components/midSection/Subheading";
import ListNav from "./components/bottomSection/footer/ListNav";
import SocialIcons from "./components/bottomSection/footer/SocialIcons";
import Line from "./components/bottomSection/footer/Line";
import SubHeadings from "./components/bottomSection/footer/SubHeadings";
import MidMap from "./components/topSection/MidMap";
import MapImage from "./components/topSection/MapImage";
import BottomMapImage from "./components/midSection/BottomMapImage";

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
          <div className="map">{/* <MapImage /> */}</div>
          <div className="image">
            <Image />
            <BottomMapImage />
          </div>
        </div>
        {/* middle main conten */}
        <div className="middleMainContent">
          <div className="midmap">
            <MidMap />
          </div>
          <div className="weAreDiff">
            <DifferentText />
          </div>
          <div className="snappy">
            <SnappyIcons />
          </div>
          <div className="bottomSection">
            <Subheading />
            <MapImage/>
          </div>

          <footer className="footer">
            <SocialIcons />
            <Line />
            <ListNav />
            <SubHeadings />
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
