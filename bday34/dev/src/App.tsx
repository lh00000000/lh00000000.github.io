import "./style.css";

// TypeScript interface for the blog entry structure
interface BlogEntry {
  id: number;
  date: string;
  caption: string;
  image: string;
  hasImage: boolean;
  isVideo?: boolean;
}

function App() {
  return (
    <div
      style={{
        color: "#222",
        // fontFamily: "monospace",
      }}
    >
      <span>
        hello. on 2025-08-16 i will be celebrating my 34th birthday and i'd
        like&nbsp;
      </span>
      <div
        style={{
          display: "inline-block",
          lineHeight: "0.9",
          // backgroundColor: "#222",
          position: "relative",
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
      <span>&nbsp;to come.</span>
      <div>
        <h2 className="inline">PHASE 1</h2>
        <span className="inline">WHERE? sunset park (the actual park)</span>
        <span className="inline">WHEN? 2025-08-16 18:00</span>
        <span className="inline">WHAT? very normal picnic</span>
      </div>
      <div>
        <h2 className="inline">PHASE 2</h2>
        <span className="inline">
          WHERE?{" "}
          <span className="inline">
            <a href="https://www.judys.nyc/">judys</a>
          </span>
        </span>
        <span className="inline">WHEN? 2025-08-16 18:00</span>
        <span className="inline">WHAT? it is a Wine Bar</span>
        <span className="inline">
          BONUSGIFT? tip in cash / don't close out 1000 times
        </span>
      </div>
      <div>
        <h2 className="inline">GIFT</h2>
        <span className="inline">i'd like you to listen to these artists</span>
      </div>
    </div>
  );
}

export default App;
