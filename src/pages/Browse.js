import React from "react"
import Logo from "../components/Header/Logo.js"


function Browse() {
  return (
    <div className="browse-wrapper">
      <div className="browse-first-part">
        <div className="browse-navbar">
          <Logo className="browse-logo" />
          <div className="browse-navbar-text">
            <a href="#" className="browse-films">
              Films
            </a>
            <a href="#" className="browse-series">
              Series
            </a>
          </div>
        </div>

        <div className="browse-header">
          <p className="browse-title">Watch The Irish Man</p>
          <p className="browse-subtitle">
            Hit man Frank Sheeran looks back at the secrets he kept as a loyal
            member of the Bufalino crime family in this acclaimed film from
            Martin Scorsese.
          </p>
          <button className="browse-header-play-button">Play</button>
        </div>
      </div>

      <div className="browse-movies">
        <div className="browse-drama">
          <p className="browse-drama-title">Drama</p>
          <div className="browse-drama-movies">
            <img
              className="browse-drama-pic"
              src="/images/films/drama/fight-club/small.jpg"
              alt="Fight Club"
            ></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Browse
