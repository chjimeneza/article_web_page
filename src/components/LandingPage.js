import React from "react";
import AntioquiaMap from "./AntioquiaMap";
import "./LandingPage.css";
import vcd from "../assets/culture_drone.mp4";
import vcdw from "../assets/culture_drone.webm";
import LegendSection from "./LegendSection";

export default function LandingPage() {
  return (
    <div className="landing-container">
      {/* Sección con video de fondo */}
      <div className="header-with-video">
        <video
          className="video-background"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={vcdw} autoPlay muted />
          <source src={vcd} autoPlay muted />
          Tu navegador no soporta video HTML5.
        </video>

        <div className="header-content">
          <div className="header-text">
            <h1>Título del artículo</h1>
            <p className="authors">
              Autor1 – Autor2 – Autor3 - Autor4 – Autor5
            </p>
            <div className="abstract-box">
              <h3>Abstract</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non
                vehicula nisi. Nulla venenatis augue cursus, egestas nulla id,
                hendrerit dui. Aenean in rutrum odio. Nunc vulputate accumsan
                metus ac egestas. Curabitur euismod justo ut eros feugiat
                ultricies in vitae tortor. Aenean nec ex hendrerit, posuere tortor
                ut, molestie ante. Suspendisse blandit fringilla hendrerit. Nullam
                diam ex, convallis ut placerat at, egestas quis purus. Phasellus
                interdum dignissim ligula, ut tempor arcu viverra sit amet.
                Aliquam posuere justo id volutpat ullamcorper. Integer tincidunt
                lobortis eros, sed accumsan risus congue et.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Separador */}
      <hr style={{ margin: "2rem 0" }} />

      {/* Mapa */}
      <AntioquiaMap />
      
    </div>
  );
}
