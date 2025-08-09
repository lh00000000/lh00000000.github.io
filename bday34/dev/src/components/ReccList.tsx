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

function ReccList(props: ReccListProps) {
  const { title, reccs } = props;

  return (
    <div style={{ padding: "5px", width: "100vw" }}>
      {reccs.map((item, idx) => (
        <>
          <span>
            <h3 style={{ display: "inline" }}>{item.name}: </h3>
          </span>
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
                <>
                  <a
                    key={`${lnk.name}-${lidx}`}
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
                    <span>{" / "}</span>
                  ) : null}
                </>
              ))
            : null}
        </>
      ))}
    </div>
  );
}

export default ReccList;
