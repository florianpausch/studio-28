import React, { useEffect } from "react";
import { InstagramPosts } from "../constants";

const InstagramEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "//www.instagram.com/embed.js";
    document.body.appendChild(script);
  }, []);

  return (
    <div className="relative w-full py-12 max-w-4xl mx-auto">
      {/* Überschrift hinzufügen */}
      <h2 className="text-[40px] font-bold text-center mb-4">
        Erfahre mehr von <span className="text-gold">Paul Mitchell</span>
      </h2>

      <div
        className="flex space-x-8 animate-marquee"
        style={{ width: `${InstagramPosts.length * 340 * 2}px` }} // Doppelte Breite für doppelte Posts
      >
        {[...InstagramPosts, ...InstagramPosts].map((postLink, index) => (
          <div
            key={index}
            className="w-80 flex-none"
            style={{ width: "340px", height: "480px" }}
          >
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={postLink}
              data-instgrm-version="14"
              style={{
                background: "#FFF",
                border: 0,
                borderRadius: "3px",
                boxShadow:
                  "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                margin: "1px",
                padding: 0,
                width: "100%",
                maxWidth: "340px",
              }}
            >
              <div style={{ padding: "16px" }}>
                <a
                  href={postLink}
                  style={{
                    background: "#FFF",
                    lineHeight: 0,
                    padding: 0,
                    textAlign: "center",
                    textDecoration: "none",
                    width: "100%",
                  }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div style={{ padding: "19% 0" }} />
                  <p style={{ color: "#c9c8cd", textAlign: "center" }}>
                    Sieh dir diesen Beitrag auf Instagram an
                  </p>
                </a>
              </div>
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramEmbed;
