import React, { useState } from "react"
import Logo from "../components/Header/Logo.js"
import FooterColumn from "../components/Footer/FooterColumn"
import FooterLink from "../components/Footer/FooterLink"
import FooterRow from "../components/Footer/FooterRow"
import FooterTitle from "../components/Footer/FooterTitle"
import FooterWrapper from "../components/Footer/FooterWrapper"
import { filmsData } from "../data/FilmsData"

function Browse() {
  const [activeMovie, setActiveMovie] = useState("")

  console.log("filmsData:", filmsData)

  console.log("active movie:", activeMovie)

  const thriller = filmsData
    .filter((item) => item.genre === "thriller")
    .map((item) => console.log(item.name))

  console.log("thr", thriller)

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
        {/* ************** Start Of The Drama Movies ******************* */}
        <div className="browse-drama">
          <p className="browse-drama-title">Drama</p>
          <div className="browse-drama-movies">
            {filmsData.map((item) =>
              item.genre === "drama" ? (
                <img
                  className="browse-drama-pic"
                  src={item.smallImage}
                  onClick={() => setActiveMovie(item.name)}
                ></img>
              ) : null
            )}
          </div>

          {filmsData
            .filter((item) => item.genre === "drama")
            .map((item) =>
              item.name === activeMovie ? (
                <div className="browse-drama-fight-club">
                  <div className={`browse-drama-${item.name}-desc`}>
                    <div className="browse-drama-fight-club-title-and-icon-wrapper">
                      <p className="browse-drama-fight-club-title">
                        {item.title}
                      </p>
                      <div className="browse-drama-fight-club-close-icon-wrapper">
                        <img
                          className="browse-drama-fight-club-close-icon"
                          src="/images/icons/close.png"
                          onClick={() => setActiveMovie("")}
                        ></img>
                      </div>
                    </div>
                    <p className="browse-drama-fight-club-subtitle">
                      {item.subTitle}
                    </p>
                    <button className="browse-header-play-button">Play</button>
                  </div>
                </div>
              ) : null
            )}
        </div>

        {/* **************** End Of The Drama Movies ********************** */}

        {/* **************** Start Of The Thriller Movies ***************** */}

        <div className="browse-thriller">
          <p className="browse-thriller-title">Thriller</p>
          <div className="browse-thriller-movies">
            {filmsData.map((item) =>
              item.genre === "thriller" ? (
                <img
                  className="browse-thriller-pic"
                  src={item.smallImage}
                  onClick={() => setActiveMovie(item.name)}
                ></img>
              ) : null
            )}
          </div>

          {filmsData
            .filter((item) => item.genre === "thriller")
            .map((item) =>
              item.name === activeMovie ? (
                <div className="browse-drama-night-crawler">
                  <div className={`browse-drama-${item.name}-desc`}>
                    <div className="browse-drama-night-crawler-title-and-icon-wrapper">
                      <p className="browse-drama-night-crawler-title">
                        {item.title}
                      </p>
                      <div className="browse-drama-night-crawler-close-icon-wrapper">
                        <img
                          className="browse-drama-night-crawler-close-icon"
                          src="/images/icons/close.png"
                          onClick={() => setActiveMovie("")}
                        ></img>
                      </div>
                    </div>
                    <p className="browse-drama-night-crawler-subtitle">
                      {item.subTitle}
                    </p>
                    <button className="browse-header-play-button">Play</button>
                  </div>
                </div>
              ) : null
            )}
        </div>

        {/* ****************** End Of Thriller Movies ******************* */}

        {/* ****************** Start Of Children Movies ******************* */}

        <div className="browse-children">
          <p className="browse-children-title">Children</p>
          <div className="browse-children-movies">
            {filmsData.map((item) =>
              item.genre === "children" ? (
                <img
                  className="browse-children-pic"
                  src={item.smallImage}
                  onClick={() => setActiveMovie(item.name)}
                ></img>
              ) : null
            )}

            {filmsData
              .filter((item) => item.genre === "children")
              .map((item) =>
                item.name === activeMovie ? (
                  <div className="browse-drama-up">
                    <div className={`browse-drama-${item.name}-desc`}>
                      <div className="browse-drama-up-title-and-icon-wrapper">
                        <p className="browse-drama-up-title">{item.title}</p>
                        <div className="browse-drama-up-close-icon-wrapper">
                          <img
                            className="browse-drama-up-close-icon"
                            src="/images/icons/close.png"
                            onClick={() => setActiveMovie("")}
                          ></img>
                        </div>
                      </div>
                      <p className="browse-drama-up-subtitle">
                        {item.subTitle}
                      </p>
                      <button className="browse-header-play-button">
                        Play
                      </button>
                    </div>
                  </div>
                ) : null
              )}
          </div>
        </div>

        {/* **************** End Of Children Movies ******************* */}

        {/* **************** Start Of Suspense Movies ******************* */}

        <div className="browse-suspense">
          <p className="browse-suspense-title">Suspense</p>
          <div className="browse-suspense-movies">
            {filmsData.map((item) =>
              item.genre === "suspense" ? (
                <img
                  className="browse-suspense-pic"
                  src={item.smallImage}
                  onClick={() => setActiveMovie(item.name)}
                ></img>
              ) : null
            )}

            {filmsData
              .filter((item) => item.genre === "suspense")
              .map((item) =>
                item.name === activeMovie ? (
                  <div className="browse-drama-up">
                    <div className={`browse-drama-${item.name}-desc`}>
                      <div className="browse-drama-up-title-and-icon-wrapper">
                        <p className="browse-drama-up-title">{item.title}</p>
                        <div className="browse-drama-up-close-icon-wrapper">
                          <img
                            className="browse-drama-up-close-icon"
                            src="/images/icons/close.png"
                            onClick={() => setActiveMovie("")}
                          ></img>
                        </div>
                      </div>
                      <p className="browse-drama-up-subtitle">
                        {item.subTitle}
                      </p>
                      <button className="browse-header-play-button">
                        Play
                      </button>
                    </div>
                  </div>
                ) : null
              )}
          </div>
        </div>

        <div className="browse-romance">
          <p className="browse-romance-title">Romance</p>
          <div className="browse-romance-movies">
            {filmsData.map((item) =>
              item.genre === "romance" ? (
                <img
                  className="browse-romance-pic"
                  src={item.smallImage}
                  onClick={() => setActiveMovie(item.name)}
                ></img>
              ) : null
            )}
          </div>
          {filmsData
            .filter((item) => item.genre === "romance")
            .map((item) =>
              item.name === activeMovie ? (
                <div className="browse-drama-the-notebook">
                  <div className={`browse-drama-${item.name}-desc`}>
                    <div className="browse-drama-the-notebook-title-and-icon-wrapper">
                      <p className="browse-drama-the-notebook-title">
                        {item.title}
                      </p>
                      <div className="browse-drama-the-notebook-close-icon-wrapper">
                        <img
                          className="browse-drama-the-notebook-close-icon"
                          src="/images/icons/close.png"
                          onClick={() => setActiveMovie("")}
                        ></img>
                      </div>
                    </div>
                    <p className="browse-drama-the-notebook-subtitle">
                      {item.subTitle}
                    </p>
                    <button className="browse-header-play-button">Play</button>
                  </div>
                </div>
              ) : null
            )}
        </div>
      </div>

      <FooterWrapper>
        <FooterTitle />

        <FooterRow>
          <FooterColumn>
            <FooterLink>FAQ</FooterLink>
            <FooterLink>Investor Relations</FooterLink>
            <FooterLink>Privacy</FooterLink>
            <FooterLink>Speed Test</FooterLink>
          </FooterColumn>

          <FooterColumn>
            <FooterLink>Help Center</FooterLink>
            <FooterLink>Jobs</FooterLink>
            <FooterLink>Cookie Preferences</FooterLink>
            <FooterLink>Legal Notices</FooterLink>
          </FooterColumn>

          <FooterColumn>
            <FooterLink>Account</FooterLink>
            <FooterLink>Ways To Watch</FooterLink>
            <FooterLink>Corporate Information</FooterLink>
            <FooterLink>Netflix Originals</FooterLink>
          </FooterColumn>

          <FooterColumn>
            <FooterLink>Media Center</FooterLink>
            <FooterLink>Terms Of Use</FooterLink>
            <FooterLink>Contact Us</FooterLink>
          </FooterColumn>
        </FooterRow>
      </FooterWrapper>
    </div>
  )
}

export default Browse
