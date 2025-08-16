import "./style.css";
import ReccList from "./components/ReccList";
import { useEffect, useRef, useState } from "react";
import CloudinaryImage from "./components/CloudinaryImage";

function App() {
  return (
    <div
      style={{
        color: "#222",
        maxWidth: "400px",
        margin: "0 auto",
        // fontFamily: "monospace",
      }}
    >
      <div
        style={{
          maxWidth: "250px",
          height: "auto",
          margin: "0 auto",
          borderRadius: "10px",
        }}
      >
        <CloudinaryImage
          src="https://lh00000000-public.s3.amazonaws.com/2025/albumaugust.jpg"
          alt="albumaugust"
          style={{
            width: "100%",
            height: "auto",
            margin: "0 auto",
          }}
          width={250}
          height={250}
        />
      </div>
      <p>(posted 2025-08-14)</p>
      <p>
        hello, today i am releasing “albumaugust” on nbd, an upcoming
        anti-polish anti-spotify music platform that Isaac Gillespie and Jordan
        Sucher are making and planning to officially release aug 24.
      </p>

      <p>
        "albumaugust" is 8 single-take unedited performances of 6 new(er) songs
        and 2 older ones i arranged for "openmic mode". it is kind of a seed and
        a “preview” for `album`, which i plan to work on later this year with
        the help of the amazing daniel markus. `album` will have more songs,
        more instrumentation, and (hopefully) more guest stars. ;) `album` is my
        attempt to work with more immediacy and intuition and less neuroticism
        and solipsism.
      </p>

      <p>
        one reason for "albumaugust" was to accept the final homework assignment
        from Philip Weinrobe's School of Song class on home production, which
        was to release an album on your next birthday. thank you phillip and
        school of song. forever grateful for the teachings of mr weinrobe and
        the work of school of song.
      </p>

      <p>
        another reason was to accept Isaac's prompt to release a "lofi album" by
        the end of august. i'm so immensely thankful for isaac and caitlin for
        the songwriter circle at the owl. they have made a space where some of
        my favorite musicians alive share their work when it's only weeks, days,
        or even just a few hours old. YOU🫵 really should come next tuesday.
      </p>

      <p>
        another reason was because i wanted a stepping stone between `liao` and
        `album`. `liao` took 7 years, but it really could have taken 7 months,
        because i was basically by myself, in my DAW, my notebooks, and my file
        system, remaking it over and over again in a perpetually delayed
        reaction to my amorphous idealization and infinitely unresolved self
        criticism. today is the start of my 34th year of living in this world as
        i'm still continue to try to be more and more "in this world" than
        before. i see "albumaugust" as the latest part of that pursuit.
      </p>

      <p>
        i'm especially grateful today for the people that already knew
        everything i mentioned above already, because they've been there for me
        as i stressed and spiraled, for years worth of different creative
        journeys and personal chapters, not just this one, inspiring me to grow
        with them. thank you christina, diana, hannah, jennifer, jocelyn, and
        travis.
      </p>

      <p>
        and i’m grateful this year for alice. i'm still so amazed i somehow
        stumbled upon a partner that inspires me so much with their work, life,
        mind, empathy, creativity, intuition, and ambition. i'm amazed at all
        the ways my life has quickly changed having someone truly with me,
        listening. we've been making so many dreams happen, one after another,
        and i can't wait to make more of them happen this year. thank you for
        singing with me ❤️❤️❤️❤️❤️❤️❤️❤️
      </p>
    </div>
  );
}

export default App;
