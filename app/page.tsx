import Header from "./component/Header";
import Relax from "./component/Relax";
import Service from "./component/Service";
import VideoSection from "./component/VideoSection";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <Service />
      <Relax />
      <VideoSection />
    </div>
  );
}
