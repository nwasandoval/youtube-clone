import "./App.css";
import { CardVideo } from "./components/CardVideo";
import { CardShort } from "./components/CardShort";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { SidebarDrawer } from "./components/SidebarDrawer";

import videos from "./constantes/videos.json";
import shorts from "./constantes/shorts.json";

function App() {
  const videosPrimary = videos.slice(0, 8);
  const videosSecondary = videos.slice(8, videos.length);

  const shortsPrimary = shorts.slice(0, 12);
  const shortsSecondary = shorts.slice(12, shorts.length);

  return (
    <>
      <div className="layout">
        <header className="layout__header">
          <Navbar />
        </header>

        <div className="layout__body">
          <Sidebar />

          <main className="pages">
            <div className="sections-videos">
              {videosPrimary.map((video) => (
                <CardVideo
                  key={video.title}
                  title={video.title}
                  views={video.views}
                  time={video.time}
                  image={video.image}
                  duration={video.duration}
                  channelName={video.channel.name}
                  channelImage={video.channel.avatar}
                />
              ))}
            </div>

            <div className="sections-shorts">
              {shortsPrimary.map((short) => (
                <CardShort
                  key={short.title}
                  title={short.title}
                  image={short.image}
                  views={short.views}
                />
              ))}
            </div>

            <div className="sections-videos">
              {videosSecondary.map((video) => (
                <CardVideo
                  key={video.title}
                  title={video.title}
                  views={video.views}
                  time={video.time}
                  image={video.image}
                  duration={video.duration}
                  channelName={video.channel.name}
                  channelImage={video.channel.avatar}
                />
              ))}
            </div>

            <div className="sections-shorts">
              {shortsSecondary.map((short) => (
                <CardShort
                  key={short.title}
                  title={short.title}
                  image={short.image}
                  views={short.views}
                />
              ))}
            </div>
          </main>
        </div>
      </div>

      <SidebarDrawer />
    </>
  );
}

export default App;
