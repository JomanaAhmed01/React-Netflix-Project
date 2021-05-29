import React, {useState} from "react"
import Logo from "../components/Header/Logo.js"
import FooterColumn from "../components/Footer/FooterColumn"
import FooterLink from "../components/Footer/FooterLink"
import FooterRow from "../components/Footer/FooterRow"
import FooterTitle from "../components/Footer/FooterTitle"
import FooterWrapper from "../components/Footer/FooterWrapper"

function Browse() {
  const [showFightClubInfo, setShowFightClubInfo] = useState(false)

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
              onClick={() => setShowFightClubInfo(true)}
            />
            <img
              className="browse-drama-pic"
              src="/images/films/drama/the-prestige/small.jpg"
              alt="The Prestige"
            ></img>
            <img
              className="browse-drama-pic"
              src="/images/films/drama/the-social-network/small.jpg"
              alt="The Social Network"
            ></img>
            <img
              className="browse-drama-pic"
              src="/images/films/drama/the-revenant/small.jpg"
              alt="The Revenant"
            ></img>
            <img
              className="browse-drama-pic"
              src="/images/films/drama/kings-speech/small.jpg"
              alt="Kings Speech"
            ></img>
          </div>

          {showFightClubInfo ? (
            <div className="browse-drama-fight-club">
              <div className="browse-drama-fight-club-desc">
                <div className="browse-drama-fight-club-title-and-icon-wrapper">
                  <p className="browse-drama-fight-club-title">Fight Club</p>
                  <div className="browse-drama-fight-club-close-icon-wrapper">
                    <img
                      className="browse-drama-fight-club-close-icon"
                      src="/images/icons/close.png"
                      onClick={() => setShowFightClubInfo(false)}
                    ></img>
                  </div>
                </div>
                <p className="browse-drama-fight-club-subtitle">
                  Discontented with his capitalistic lifestyle, a white-collared
                  insomniac forms an underground fight club with Tyler, a
                  careless soap salesman. The project soon spirals down into
                  something sinister.
                </p>
                <button className="browse-header-play-button">Play</button>
              </div>
            </div>
          ) : null}
        </div>

        <div className="browse-thriller">
          <p className="browse-thriller-title">Thriller</p>
          <div className="browse-thriller-movies">
            <img
              className="browse-thriller-pic"
              src="/images/films/thriller/nightcrawler/small.jpg"
              alt="Night Crawler"
            ></img>
            <img
              className="browse-thriller-pic"
              src="/images/films/thriller/the-silence-of-the-lambs/small.jpg"
              alt="The Silence of The Lambs"
            ></img>
            <img
              className="browse-thriller-pic"
              src="/images/films/thriller/black-swan/small.jpg"
              alt="Black Swan"
            ></img>
            <img
              className="browse-thriller-pic"
              src="/images/films/thriller/joker/small.jpg"
              alt="Joker"
            ></img>
            <img
              className="browse-thriller-pic"
              src="/images/films/thriller/a-quiet-place/small.jpg"
              alt="A Quiet Place"
            ></img>
          </div>
        </div>

        <div className="browse-children">
          <p className="browse-children-title">Children</p>
          <div className="browse-children-movies">
            <img
              className="browse-children-pic"
              src="/images/films/children/hotel-transylvania/small.jpg"
              alt="Hotel Transylvania"
            ></img>
            <img
              className="browse-children-pic"
              src="/images/films/children/spirited-away/small.jpg"
              alt="Spirited Away"
            ></img>
            <img
              className="browse-children-pic"
              src="/images/films/children/up/small.jpg"
              alt="Up"
            ></img>
            <img
              className="browse-children-pic"
              src="/images/films/children/frozen/small.jpg"
              alt="Frozen"
            ></img>
            <img
              className="browse-children-pic"
              src="/images/films/children/despicable-me/small.jpg"
              alt="Despicable Me"
            ></img>
          </div>
        </div>

        <div className="browse-suspense">
          <p className="browse-suspense-title">Suspense</p>
          <div className="browse-suspense-movies">
            <img
              className="browse-suspense-pic"
              src="/images/films/suspense/shutter-island/small.jpg"
              alt="Hotel Transylvania"
            ></img>
            <img
              className="browse-suspense-pic"
              src="/images/films/suspense/seven/small.jpg"
              alt="Spirited Away"
            ></img>
            <img
              className="browse-suspense-pic"
              src="/images/films/suspense/prisoners/small.jpg"
              alt="Up"
            ></img>
            <img
              className="browse-suspense-pic"
              src="/images/films/suspense/zodiac/small.jpg"
              alt="Frozen"
            ></img>
            <img
              className="browse-suspense-pic"
              src="/images/films/suspense/gone-girl/small.jpg"
              alt="Despicable Me"
            ></img>
          </div>
        </div>

        <div className="browse-romance">
          <p className="browse-romance-title">Romance</p>
          <div className="browse-romance-movies">
            <img
              className="browse-romance-pic"
              src="/images/films/romance/la-la-land/small.jpg"
              alt="Hotel Transylvania"
            ></img>
            <img
              className="browse-romance-pic"
              src="/images/films/romance/titanic/small.jpg"
              alt="Spirited Away"
            ></img>
            <img
              className="browse-romance-pic"
              src="/images/films/romance/a-star-is-born/small.jpg"
              alt="Up"
            ></img>
            <img
              className="browse-romance-pic"
              src="/images/films/romance/the-notebook/small.jpg"
              alt="Frozen"
            ></img>
            <img
              className="browse-romance-pic"
              src="/images/films/romance/blue-valentine/small.jpg"
              alt="Despicable Me"
            ></img>
          </div>
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
