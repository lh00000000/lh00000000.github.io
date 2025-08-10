import React from "react";

export interface RecommendationLink {
  name: string;
  link: string;
}

export interface RecommendationItem {
  name: string;
  blurb?: string;
  role?: string; // e.g. "musician" | "filmmaker"
  links?: RecommendationLink[];
}

interface ReccListProps {
  title?: string;
  reccs: RecommendationItem[];
}

const randomSequence = Array.from({ length: 100 }, (_, i) => i).map((i) =>
  Math.random()
);

function ReccList(props: ReccListProps) {
  const { title, reccs } = props;
  const [orderedReccs, setOrderedReccs] =
    React.useState<RecommendationItem[]>(reccs);
  const [scrollY, setScrollY] = React.useState(0);
  const [elementPositions, setElementPositions] = React.useState<number[]>([]);
  const [elementWidths, setElementWidths] = React.useState<number[]>([]);
  const elementRefs = React.useRef<(HTMLHeadingElement | null)[]>([]);

  React.useEffect(() => {
    setOrderedReccs(reccs);
    handleRandomize();
  }, [reccs]);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update element positions and widths when component mounts or reorders
  React.useEffect(() => {
    const positions = elementRefs.current
      .filter((ref) => ref !== null)
      .map((ref) => {
        const rect = ref!.getBoundingClientRect();
        return rect.top;
      });
    setElementPositions(positions);

    const widths = elementRefs.current
      .filter((ref) => ref !== null)
      .map((ref) => ref!.scrollWidth + 20); // Add 20px padding
    setElementWidths(widths);
  }, [orderedReccs]);

  const handleSortByName = () => {
    const sorted = [...orderedReccs].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setOrderedReccs(sorted);
  };

  const handleRandomize = () => {
    const shuffled = [...orderedReccs];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setOrderedReccs(shuffled);
  };

  return (
    <div style={{ display: "inline", padding: "5px", width: "100vw" }}>
      <h2 style={{ display: "inline", margin: "0px" }}>GIFT </h2>
      <span style={{ display: "inline" }}>
        to me: i'd like you to listen/watch these people that have filled my
        last year with WARMTHNESS.
      </span>
      {title ? <h2 style={{ margin: "0px 0px 8px 0px" }}>{title}</h2> : null}
      <button
        onClick={handleSortByName}
        style={{
          display: "inline",
          padding: "6px 8px",
          margin: "0px",
          cursor: "pointer",
          backgroundColor: "transparent",
          border: "none",
          fontWeight: "bold",
          fontSize: "2rem",
          color: "blue",
          textDecoration: "underline",
        }}
      >
        A-Z
      </button>
      <button
        onClick={handleRandomize}
        style={{
          display: "inline",
          padding: "6px 8px",
          margin: "0px",
          cursor: "pointer",
          backgroundColor: "transparent",
          border: "none",
          fontWeight: "bold",
          fontSize: "2rem",
          color: "blue",
          textDecoration: "underline",
        }}
      >
        RANDO
      </button>

      {orderedReccs.map((item, idx) => {
        const targetTop = randomSequence[idx] * 100;

        return (
          <React.Fragment key={`recc-${item.name}`}>
            {/* Fixed-width container that maintains dimensions during rotation */}
            <h3
              ref={(el) => {
                elementRefs.current[idx] = el;
              }}
              style={{
                display: "inline",
                position: "sticky",
                top: `${targetTop}px`,
                whiteSpace: "nowrap",
              }}
            >
              {item.name}:
            </h3>

            {item.role ? (
              <span style={{ marginLeft: "8px", color: "#666" }}>
                ({item.role})
              </span>
            ) : null}
            {item.blurb ? (
              <span style={{ margin: "2px 0px 6px 0px", color: "#333" }}>
                {item.blurb}
              </span>
            ) : null}
            {item.links && item.links.length > 0
              ? item.links.map((lnk, lidx) => (
                  <span key={`${lnk.name}-${lidx}`}>
                    <a
                      href={lnk.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      style={{
                        display: "inline",
                        margin: "0px",
                        textDecoration: "none",
                        lineHeight: 1.6,
                      }}
                    >
                      {lnk.name}{" "}
                    </a>
                    {lidx < (item.links?.length ?? 0) - 1 ? (
                      <span
                        style={{
                          display: "inline",
                        }}
                      >
                        {" / "}
                      </span>
                    ) : null}
                  </span>
                ))
              : null}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default ReccList;
