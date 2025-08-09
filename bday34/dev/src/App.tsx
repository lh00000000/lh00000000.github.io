import "./style.css";
import ReccList from "./components/ReccList";
import { useEffect, useRef } from "react";

function App() {
  const animatedRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let rafId = 0;
    const start = performance.now();
    const amplitude = 0.08; // 8% size oscillation
    const periodMs = 1600; // 1.6s per cycle

    const animate = (now: number) => {
      const elapsed = now - start;
      const phase = (2 * Math.PI * (elapsed % periodMs)) / periodMs;
      const scale = 1 + amplitude * Math.sin(phase);
      if (animatedRef.current) {
        animatedRef.current.style.transform = `scale(${scale})`;
      }
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);
  return (
    <div
      style={{
        color: "#222",
        // fontFamily: "monospace",
      }}
    >
      <span style={{ fontSize: "3rem" }}>
        hello. on 2025-08-16 i will be celebrating my 34th birthday and i'd like
      </span>

      <div
        ref={animatedRef}
        style={{
          display: "inline-block",
          lineHeight: "0.9",
          // backgroundColor: "#222",
          position: "relative",
          transformOrigin: "center",
        }}
      >
        <span
          style={{
            fontSize: "12rem",
          }}
        >
          🫵
        </span>
        <span
          style={{
            position: "absolute",
            top: "40px",
            left: "60px",
            fontSize: "7rem",
          }}
        >
          YOU
        </span>
      </div>
      <span> to come.</span>
      <div>
        <h2 style={{ display: "inline", margin: "0px" }}>PHASE 1:&nbsp;</h2>
        <span style={{ display: "inline" }}>
          <b>WHERE:</b>{" "}
          <a href="https://www.google.com/maps/place/Sunset+Park,+Brooklyn,+NY/@40.6514644,-74.0074178,14z/data=!3m1!4b1!4m6!3m5!1s0x89c25ab3e466657d:0x83eb32ea80df632!8m2!3d40.6526345!4d-74.0091872!16zL20vMDJubmxo?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D">
            sunset park (the actual park)
          </a>
          &nbsp;
        </span>
        <span style={{ display: "inline" }}>
          <b>WHEN:</b> 2025-08-16 17:00 to 20:00&nbsp;
        </span>
        <span style={{ display: "inline" }}>
          <b>WHAT:</b> very Normal Picnic&nbsp;
        </span>
      </div>
      <div>
        <h2 style={{ display: "inline", margin: "0px" }}>PHASE 2:&nbsp;</h2>
        <span style={{ display: "inline" }}>
          <b>WHERE:</b>{" "}
          <span style={{ display: "inline" }}>
            <a href="https://maps.app.goo.gl/SnzGEKzthw4pAK1F7/">judys</a>
          </span>
          &nbsp;
        </span>
        <span style={{ display: "inline" }}>
          <b>WHEN:</b> 2025-08-16 21:00 to 23:59 &nbsp;
        </span>
        <span style={{ display: "inline" }}>
          <b>WHAT:</b> it is a Wine Bar. i will probably get Some Bottles.
          <span style={{ display: "inline", fontSize: "1.2rem" }}>
            please Consolidate your orders / tip Cash if you want other things.
          </span>
        </span>
      </div>
      <div>
        <h2 style={{ display: "inline", margin: "0px" }}>GIFT&nbsp;</h2>

        <ReccList
          reccs={[
            {
              name: "william h travis",
              links: [
                {
                  name: "ruby LP",
                  link: "https://store.squareofopposition.com/collections/sofo-releases/products/william-h-travis-ruby-lp",
                },
                {
                  name: "ig",
                  link: "https://www.instagram.com/williamhtravis/",
                },
                {
                  name: "bandcamp",
                  link: "https://williamhtravis.bandcamp.com/track/unfuck-my-mind",
                },
                {
                  name: "spotify",
                  link: "https://open.spotify.com/artist/3fCdfTlmlwGZBbJbVR2Ce5",
                },
              ],
            },
            {
              name: "piper hill",
              links: [
                {
                  name: "small dragon: alpha demo 1",
                  link: "https://piper-hill.itch.io/small-dragon-tiny-alpha-demo",
                },
                {
                  name: "website",
                  link: "https://piperhill.org/",
                },
                {
                  name: "ig",
                  link: "https://www.instagram.com/piper.e.hill/",
                },
              ],
            },
            {
              name: "grace carney",
              links: [
                {
                  name: "ig",
                  link: "https://www.instagram.com/grr.radio/",
                },
              ],
            },
            {
              name: "ewe dew",
              links: [
                {
                  name: "bandcamp",
                  link: "https://ewedew.bandcamp.com/album/selfish-songs",
                },
                {
                  name: "spotify",
                  link: "https://open.spotify.com/artist/20000000000000000000000000000000",
                },
              ],
            },
            {
              name: "caroline kuhn",
            },
            {
              name: "border house",
              links: [
                {
                  name: "bandcamp",
                  link: "https://borderhouse.bandcamp.com/track/finishing-the-record",
                },
              ],
            },
            {
              name: "micelf",
            },
            {
              name: "amelia gillis",
            },
            {
              name: "audrey morgan",
              links: [
                {
                  name: "tiktok",
                  link: "https://www.tiktok.com/@audreymorg",
                },
              ],
            },
            {
              name: "juliet by night",
            },
            {
              name: "sunskip",
            },
            {
              name: "mauro",
            },
            {
              name: "alex wolfe",
              links: [
                {
                  name: "website",
                  link: "https://atwolfe.com/",
                },
                {
                  name: "substack",
                  link: "https://pedestrian.substack.com",
                },
              ],
            },
            {
              name: "a forgotten place",
              links: [
                {
                  name: "nobudge",
                  link: "https://www.nobudge.com/videos/a-forgotten-place?fbclid=PAZXh0bgNhZW0CMTEAAafGPtw_Zg471LhPWs_HWYWoZqg_dq_EGlU0QpelenkOMsKt9xzCHpCU4vaWBw_aem_Jlye_Ep4DlmlmKG3D8SEdw",
                },
              ],
            },
            {
              name: "michael richard klics",
              links: [
                {
                  name: "apple music",
                  link: "https://music.apple.com/us/artist/michael-richard-klics/1435668770",
                },
                {
                  name: "spotify",
                  link: "https://open.spotify.com/artist/6Z9iTgCKmojLhnhKEXQI9p",
                },
              ],
            },
            {
              name: "nervous - tension",
              links: [
                {
                  name: "bandcamp",
                  link: "https://nervous-nyc.bandcamp.com/album/tension",
                },
                {
                  name: "apple music",
                  link: "https://music.apple.com/us/album/tension/1817984570",
                },
                {
                  name: "spotify",
                  link: "https://open.spotify.com/album/65toYBy1QzfMWuKSWgNj16?si=FRjvM91iQGa5r7U0V81spw",
                },
              ],
            },
            {
              name: "sarabeth",
            },
          ]}
        ></ReccList>
      </div>
      <div style={{ height: "100vh" }}></div>
    </div>
  );
}

export default App;
