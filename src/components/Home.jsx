import ganeshaLogo from "../../public/ganeshaMain.jpg"
import Upload from "./Upload";
function Home() {
  return (
    <div>
   <img src={ganeshaLogo} alt="ganeshaLogo" className="h-full" />
    <Upload/>
    </div>
  );
}

export default Home;