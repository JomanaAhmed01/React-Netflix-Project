import React, { useState } from "react"
import Logo from "../components/Header/Logo.js"
import FooterColumn from "../components/Footer/FooterColumn"
import FooterLink from "../components/Footer/FooterLink"
import FooterRow from "../components/Footer/FooterRow"
import FooterTitle from "../components/Footer/FooterTitle"
import FooterWrapper from "../components/Footer/FooterWrapper"

function Browse() {
  const [showFightClubInfo, setShowFightClubInfo] = useState(false)
  const [activeMovie, setActiveMovie] = useState('')
  const [showThePrestigeInfo, setShowThePrestigeInfo] = useState(false)
  const [showTheSocialNetworkInfo, setShowTheSocialNetworkInfo] =
    useState(false)
  const [showTheRevenantInfo, setShowTheRevenantInfo] = useState(false)
  const [showKingsSpeechInfo, setShowKingsSpeechInfo] = useState(false)

  console.log( 'active movie:',activeMovie)

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
            <img
              className="browse-drama-pic"
              src="/images/films/drama/fight-club/small.jpg"
              alt="Fight Club"
              onClick={() => setActiveMovie("fight-club")}
            />
            <img
              className="browse-drama-pic"
              src="/images/films/drama/the-prestige/small.jpg"
              alt="The Prestige"
              onClick={() => setActiveMovie("the-prestige")}
            ></img>
            <img
              className="browse-drama-pic"
              src="/images/films/drama/the-social-network/small.jpg"
              alt="The Social Network"
              onClick={() => setActiveMovie("the-social-network")}
            ></img>
            <img
              className="browse-drama-pic"
              src="/images/films/drama/the-revenant/small.jpg"
              alt="The Revenant"
              onClick={() => setActiveMovie("the-revenant")}
            ></img>
            <img
              className="browse-drama-pic"
              src="/images/films/drama/kings-speech/small.jpg"
              alt="Kings Speech"
              onClick={() => setActiveMovie("kings-speech")}
            ></img>
          </div>

          {/* ***************** Fight Club Info ******************* */}

          {activeMovie === "fight-club" ? (
            <div className="browse-drama-fight-club">
              <div className="browse-drama-fight-club-desc">
                <div className="browse-drama-fight-club-title-and-icon-wrapper">
                  <p className="browse-drama-fight-club-title">Fight Club</p>
                  <div className="browse-drama-fight-club-close-icon-wrapper">
                    <img
                      className="browse-drama-fight-club-close-icon"
                      src="/images/icons/close.png"
                      onClick={() => setActiveMovie("")}
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

          {/* ***************** The Prestige Info ******************* */}

          {activeMovie === "the-prestige" ? (
            <div className="browse-drama-the-prestige">
              <div className="browse-drama-the-prestige-desc">
                <div className="browse-drama-the-prestige-title-and-icon-wrapper">
                  <p className="browse-drama-the-prestige-title">
                    The Prestige
                  </p>
                  <div className="browse-drama-the-prestige-close-icon-wrapper">
                    <img
                      className="browse-drama-the-prestige-close-icon"
                      src="/images/icons/close.png"
                      onClick={() => setActiveMovie("")}
                    ></img>
                  </div>
                </div>
                <p className="browse-drama-the-prestige-subtitle">
                  Two friends and fellow magicians become bitter enemies after a
                  sudden tragedy. As they devote themselves to this rivalry,
                  they make sacrifices that bring them fame but with terrible
                  consequences.
                </p>
                <button className="browse-header-play-button">Play</button>
              </div>
            </div>
          ) : null}

          {/* ***************** The Social Network Info ******************* */}

          {activeMovie === "the-social-network" ? (
            <div className="browse-drama-the-social-network">
              <div className="browse-drama-the-social-network-desc">
                <div className="browse-drama-the-social-network-title-and-icon-wrapper">
                  <p className="browse-drama-the-social-network-title">
                    The Social Network
                  </p>
                  <div className="browse-drama-the-social-network-close-icon-wrapper">
                    <img
                      className="browse-drama-the-social-network-close-icon"
                      src="/images/icons/close.png"
                      onClick={() => setActiveMovie("")}
                    ></img>
                  </div>
                </div>
                <p className="browse-drama-the-social-network-subtitle">
                  Mark Zuckerberg creates a social networking site, Facebook,
                  with the help of his friend Eduardo Saverin. But soon, a
                  string of lies tears their relationship apart even as Facebook
                  connects people.
                </p>
                <button className="browse-header-play-button">Play</button>
              </div>
            </div>
          ) : null}

          {/* ***************** The Revenant Info ******************* */}

          {activeMovie === "the-revenant" ? (
            <div className="browse-drama-the-revenant">
              <div className="browse-drama-the-revenant-desc">
                <div className="browse-drama-the-revenant-title-and-icon-wrapper">
                  <p className="browse-drama-the-revenant-title">
                    The Revenant
                  </p>
                  <div className="browse-drama-the-revenant-close-icon-wrapper">
                    <img
                      className="browse-drama-the-revenant-close-icon"
                      src="/images/icons/close.png"
                      onClick={() => setActiveMovie("")}
                    ></img>
                  </div>
                </div>
                <p className="browse-drama-the-revenant-subtitle">
                  Hugh Glass, a legendary frontiersman, is severely injured in a
                  bear attack and is abandoned by his hunting crew. He uses his
                  skills to survive and take revenge on his companion, who
                  betrayed him.
                </p>
                <button className="browse-header-play-button">Play</button>
              </div>
            </div>
          ) : null}

          {/* ***************** Kings Speech Info ******************* */}

          {activeMovie === "kings-speech" ? (
            <div className="browse-drama-kings-speech">
              <div className="browse-drama-kings-speech-desc">
                <div className="browse-drama-kings-speech-title-and-icon-wrapper">
                  <p className="browse-drama-kings-speech-title">
                    Kings Speech
                  </p>
                  <div className="browse-drama-kings-speech-close-icon-wrapper">
                    <img
                      className="browse-drama-kings-speech-close-icon"
                      src="/images/icons/close.png"
                      onClick={() => setActiveMovie("")}
                    ></img>
                  </div>
                </div>
                <p className="browse-drama-kings-speech-subtitle">
                  King George VI tries to overcome his stammering problem with
                  the help of speech therapist Lionel Logue and makes himself
                  worthy enough to lead his country through World War II.
                </p>
                <button className="browse-header-play-button">Play</button>
              </div>
            </div>
          ) : null}
        </div>

        {/* **************** End Of The Drama Movies ********************** */}

        {/* **************** Start Of The Thriller Movies ***************** */}

        <div className="browse-thriller">
          <p className="browse-thriller-title">Thriller</p>
          <div className="browse-thriller-movies">
            <img
              className="browse-thriller-pic"
              src="/images/films/thriller/nightcrawler/small.jpg"
              alt="Night Crawler"
              onClick={() => setActiveMovie("night-crawler")}
            ></img>
            <img
              className="browse-thriller-pic"
              src="/images/films/thriller/the-silence-of-the-lambs/small.jpg"
              alt="The Silence of The Lambs"
              onClick={() => setActiveMovie("the-silence-of-the-lambs")}
            ></img>
            <img
              className="browse-thriller-pic"
              src="/images/films/thriller/black-swan/small.jpg"
              alt="Black Swan"
              onClick={() => setActiveMovie("black-swan")}
            ></img>
            <img
              className="browse-thriller-pic"
              src="/images/films/thriller/joker/small.jpg"
              alt="Joker"
              onClick={() => setActiveMovie("joker")}
            ></img>
            <img
              className="browse-thriller-pic"
              src="/images/films/thriller/a-quiet-place/small.jpg"
              alt="A Quiet Place"
              onClick={() => setActiveMovie("a-quiet-place")}
            ></img>
          </div>

          {/* ***************** Night Crawler Info **********************/}

          {activeMovie === "night-crawler" ? (
            <div className="browse-drama-night-crawler">
              <div className="browse-drama-night-crawler-desc">
                <div className="browse-drama-night-crawler-title-and-icon-wrapper">
                  <p className="browse-drama-night-crawler-title">
                    Night Crawler
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
                  Louis Bloom, a petty thief, realises that he can make money by
                  capturing photographs of criminal activities and starts
                  resorting to extreme tactics to get them.
                </p>
                <button className="browse-header-play-button">Play</button>
              </div>
            </div>
          ) : null}

          {/* ***************** The Silence Of The Lambs Info **********************/}

          {activeMovie === "the-silence-of-the-lambs" ? (
            <div className="browse-drama-the-silence-of-the-lambs">
              <div className="browse-drama-the-silence-of-the-lambs-desc">
                <div className="browse-drama-the-silence-of-the-lambs-title-and-icon-wrapper">
                  <p className="browse-drama-the-silence-of-the-lambs-title">
                    The Silence Of The Lambs
                  </p>
                  <div className="browse-drama-the-silence-of-the-lambs-close-icon-wrapper">
                    <img
                      className="browse-drama-the-silence-of-the-lambs-close-icon"
                      src="/images/icons/close.png"
                      onClick={() => setActiveMovie("")}
                    ></img>
                  </div>
                </div>
                <p className="browse-drama-the-silence-of-the-lambs-subtitle">
                  Clarice Starling, an FBI agent, seeks help from Hannibal
                  Lecter, a psychopathic serial killer and former psychiatrist,
                  in order to apprehend another serial killer who has been
                  claiming female victims.
                </p>
                <button className="browse-header-play-button">Play</button>
              </div>
            </div>
          ) : null}

          {/* ***************** Black Swan Info **********************/}

          {activeMovie === "black-swan" ? (
            <div className="browse-drama-black-swan">
              <div className="browse-drama-black-swan-desc">
                <div className="browse-drama-black-swan-title-and-icon-wrapper">
                  <p className="browse-drama-black-swan-title">Black Swan</p>
                  <div className="browse-drama-black-swan-close-icon-wrapper">
                    <img
                      className="browse-drama-black-swan-close-icon"
                      src="/images/icons/close.png"
                      onClick={() => setActiveMovie("")}
                    ></img>
                  </div>
                </div>
                <p className="browse-drama-black-swan-subtitle">
                  Nina, a ballerina, gets the chance to play the White Swan,
                  Princess Odette. But she finds herself slipping into madness
                  when Thomas, the artistic director, decides that Lily might
                  fit the role better.
                </p>
                <button className="browse-header-play-button">Play</button>
              </div>
            </div>
          ) : null}

          {/* ***************** Joker Info **********************/}

          {activeMovie === "joker" ? (
            <div className="browse-drama-joker">
              <div className="browse-drama-joker-desc">
                <div className="browse-drama-joker-title-and-icon-wrapper">
                  <p className="browse-drama-joker-title">Joker</p>
                  <div className="browse-drama-joker-close-icon-wrapper">
                    <img
                      className="browse-drama-joker-close-icon"
                      src="/images/icons/close.png"
                      onClick={() => setActiveMovie("")}
                    ></img>
                  </div>
                </div>
                <p className="browse-drama-joker-subtitle">
                  Forever alone in a crowd, failed comedian Arthur Fleck seeks
                  connection as he walks the streets of Gotham City.
                </p>
                <button className="browse-header-play-button">Play</button>
              </div>
            </div>
          ) : null}

          {/* ***************** A Quiet Place Info **********************/}

          {activeMovie === "a-quiet-place" ? (
            <div className="browse-drama-a-quiet-place">
              <div className="browse-drama-a-quiet-place-desc">
                <div className="browse-drama-a-quiet-place-title-and-icon-wrapper">
                  <p className="browse-drama-a-quiet-place-title">
                    A Quiet Place
                  </p>
                  <div className="browse-drama-a-quiet-place-close-icon-wrapper">
                    <img
                      className="browse-drama-a-quiet-place-close-icon"
                      src="/images/icons/close.png"
                      onClick={() => setActiveMovie("")}
                    ></img>
                  </div>
                </div>
                <p className="browse-drama-a-quiet-place-subtitle">
                  The Abbott family must now face the terrors of the outside
                  world as they fight for survival in silence. Forced to venture
                  into the unknown, they realize that the creatures that hunt by
                  sound are not the only threats that lurk beyond the sand path.
                </p>
                <button className="browse-header-play-button">Play</button>
              </div>
            </div>
          ) : null}
        </div>

        {/* ****************** End Of Thriller Movies ******************* */}

        {/* ****************** Start Of Children Movies ******************* */}

        <div className="browse-children">
          <p className="browse-children-title">Children</p>
          <div className="browse-children-movies">
            <img
              className="browse-children-pic"
              src="/images/films/children/hotel-transylvania/small.jpg"
              alt="Hotel Transylvania"
              onClick={() => setActiveMovie("hotel-transylvania")}
            ></img>
            <img
              className="browse-children-pic"
              src="/images/films/children/spirited-away/small.jpg"
              alt="Spirited Away"
              onClick={() => setActiveMovie("spirited-away")}
            ></img>
            <img
              className="browse-children-pic"
              src="/images/films/children/up/small.jpg"
              alt="Up"
              onClick={() => setActiveMovie("up")}
            ></img>
            <img
              className="browse-children-pic"
              src="/images/films/children/frozen/small.jpg"
              alt="Frozen"
              onClick={() => setActiveMovie("frozen")}
            ></img>
            <img
              className="browse-children-pic"
              src="/images/films/children/despicable-me/small.jpg"
              alt="Despicable Me"
              onClick={() => setActiveMovie("despicable-me")}
            ></img>
          </div>

          {/* ***************** Hotel Transylvania Info ******************** */}

          {activeMovie === "hotel-transylvania" ? (
            <div className="browse-drama-hotel-transylvania">
              <div className="browse-drama-hotel-transylvania-desc">
                <div className="browse-drama-hotel-transylvania-title-and-icon-wrapper">
                  <p className="browse-drama-hotel-transylvania-title">
                    Hotel Transylvania
                  </p>
                  <div className="browse-drama-hotel-transylvania-close-icon-wrapper">
                    <img
                      className="browse-drama-hotel-transylvania-close-icon"
                      src="/images/icons/close.png"
                      onClick={() => setActiveMovie("")}
                    ></img>
                  </div>
                </div>
                <p className="browse-drama-hotel-transylvania-subtitle">
                  Dracula, who owns a high-end resort for monsters, attempts to
                  keep his daughter from falling in love with Jonathan, a human.
                </p>
                <button className="browse-header-play-button">Play</button>
              </div>
            </div>
          ) : null}

          {/* ***************** Spirited Away Info ******************** */}

          {activeMovie === "spirited-away" ? (
            <div className="browse-drama-spirited-away">
              <div className="browse-drama-spirited-away-desc">
                <div className="browse-drama-spirited-away-title-and-icon-wrapper">
                  <p className="browse-drama-spirited-away-title">
                    Spirited Away
                  </p>
                  <div className="browse-drama-spirited-away-close-icon-wrapper">
                    <img
                      className="browse-drama-spirited-away-close-icon"
                      src="/images/icons/close.png"
                      onClick={() => setActiveMovie("")}
                    ></img>
                  </div>
                </div>
                <p className="browse-drama-spirited-away-subtitle">
                  In this animated feature by noted Japanese director Hayao
                  Miyazaki, 10-year-old Chihiro (Rumi Hiiragi) and her parents
                  (Takashi Naitô, Yasuko Sawaguchi) stumble upon a seemingly
                  abandoned amusement park.
                </p>
                <button className="browse-header-play-button">Play</button>
              </div>
            </div>
          ) : null}

          {/* ***************** Up Info ******************** */}

          {activeMovie === "up" ? (
            <div className="browse-drama-up">
              <div className="browse-drama-up-desc">
                <div className="browse-drama-up-title-and-icon-wrapper">
                  <p className="browse-drama-up-title">Up</p>
                  <div className="browse-drama-up-close-icon-wrapper">
                    <img
                      className="browse-drama-up-close-icon"
                      src="/images/icons/close.png"
                      onClick={() => setActiveMovie("")}
                    ></img>
                  </div>
                </div>
                <p className="browse-drama-up-subtitle">
                  Carl, an old widower, goes off on an adventure in his flying
                  house in search of Paradise Falls, his wife's dream
                  destination.
                </p>
                <button className="browse-header-play-button">Play</button>
              </div>
            </div>
          ) : null}

          {/* ***************** Frozen Info ******************** */}

          {activeMovie === "frozen" ? (
            <div className="browse-drama-frozen">
              <div className="browse-drama-frozen-desc">
                <div className="browse-drama-frozen-title-and-icon-wrapper">
                  <p className="browse-drama-frozen-title">Frozen</p>
                  <div className="browse-drama-frozen-close-icon-wrapper">
                    <img
                      className="browse-drama-frozen-close-icon"
                      src="/images/icons/close.png"
                      onClick={() => setActiveMovie("")}
                    ></img>
                  </div>
                </div>
                <p className="browse-drama-frozen-subtitle">
                  Anna sets out on a journey with an iceman, Kristoff, and his
                  reindeer, Sven, in order to find her sister, Elsa, who has the
                  power to convert any object or person into ice.
                </p>
                <button className="browse-header-play-button">Play</button>
              </div>
            </div>
          ) : null}

          {/* ***************** Despicable Me Info ******************** */}

          {activeMovie === "despicable-me" ? (
            <div className="browse-drama-despicable-me">
              <div className="browse-drama-despicable-me-desc">
                <div className="browse-drama-despicable-me-title-and-icon-wrapper">
                  <p className="browse-drama-despicable-me-title">
                    Despicable Me
                  </p>
                  <div className="browse-drama-despicable-me-close-icon-wrapper">
                    <img
                      className="browse-drama-despicable-me-close-icon"
                      src="/images/icons/close.png"
                      onClick={() => setActiveMovie("")}
                    ></img>
                  </div>
                </div>
                <p className="browse-drama-despicable-me-subtitle">
                  Gru, a criminal mastermind, adopts three orphans as pawns to
                  carry out the biggest heist in history. His life takes an
                  unexpected turn when the little girls see him as their
                  potential father.
                </p>
                <button className="browse-header-play-button">Play</button>
              </div>
            </div>
          ) : null}
        </div>

        {/* **************** End Of Children Movies ******************* */}

        {/* **************** Start Of Suspense Movies ******************* */}

        <div className="browse-suspense">
          <p className="browse-suspense-title">Suspense</p>
          <div className="browse-suspense-movies">
            <img
              className="browse-suspense-pic"
              src="/images/films/suspense/shutter-island/small.jpg"
              alt="Shutter Island"
              onClick={() => setActiveMovie("shutter-island")}
            ></img>
            <img
              className="browse-suspense-pic"
              src="/images/films/suspense/seven/small.jpg"
              alt="Seven"
              onClick={() => setActiveMovie("seven")}
            ></img>
            <img
              className="browse-suspense-pic"
              src="/images/films/suspense/prisoners/small.jpg"
              alt="Prisoners"
              onClick={() => setActiveMovie("prisoners")}
            ></img>
            <img
              className="browse-suspense-pic"
              src="/images/films/suspense/zodiac/small.jpg"
              alt="Zodiac"
              onClick={() => setActiveMovie("zodiac")}
            ></img>
            <img
              className="browse-suspense-pic"
              src="/images/films/suspense/gone-girl/small.jpg"
              alt="Gone Girl"
              onClick={() => setActiveMovie("gone-girl")}
            ></img>
          </div>

          {/* ***************** Shutter Island Info ******************** */}

          {activeMovie === "shutter-island" ? (
            <div className="browse-drama-shutter-island">
              <div className="browse-drama-shutter-island-desc">
                <div className="browse-drama-shutter-island-title-and-icon-wrapper">
                  <p className="browse-drama-shutter-island-title">
                    Shutter Island
                  </p>
                  <div className="browse-drama-shutter-island-close-icon-wrapper">
                    <img
                      className="browse-drama-shutter-island-close-icon"
                      src="/images/icons/close.png"
                      onClick={() => setActiveMovie("")}
                    ></img>
                  </div>
                </div>
                <p className="browse-drama-shutter-island-subtitle">
                  Teddy Daniels and Chuck Aule, two US marshals, are sent to an
                  asylum on a remote island in order to investigate the
                  disappearance of a patient, where Teddy uncovers a shocking
                  truth about the place.
                </p>
                <button className="browse-header-play-button">Play</button>
              </div>
            </div>
          ) : null}

          {/* ***************** Seven Info ******************** */}

          {activeMovie === "seven" ? (
            <div className="browse-drama-seven">
              <div className="browse-drama-seven-desc">
                <div className="browse-drama-seven-title-and-icon-wrapper">
                  <p className="browse-drama-seven-title">Seven</p>
                  <div className="browse-drama-seven-close-icon-wrapper">
                    <img
                      className="browse-drama-seven-close-icon"
                      src="/images/icons/close.png"
                      onClick={() => setActiveMovie("")}
                    ></img>
                  </div>
                </div>
                <p className="browse-drama-seven-subtitle">
                  A serial killer begins murdering people according to the seven
                  deadly sins. Two detectives, one new to the city and the other
                  about to retire, are tasked with apprehending the criminal.
                </p>
                <button className="browse-header-play-button">Play</button>
              </div>
            </div>
          ) : null}

          {/* ***************** Prisoners Info ******************** */}

          {activeMovie === "prisoners" ? (
            <div className="browse-drama-prisoners">
              <div className="browse-drama-prisoners-desc">
                <div className="browse-drama-prisoners-title-and-icon-wrapper">
                  <p className="browse-drama-prisoners-title">Prisoners</p>
                  <div className="browse-drama-prisoners-close-icon-wrapper">
                    <img
                      className="browse-drama-prisoners-close-icon"
                      src="/images/icons/close.png"
                      onClick={() => setActiveMovie("")}
                    ></img>
                  </div>
                </div>
                <p className="browse-drama-prisoners-subtitle">
                  When the police take time to find Keller Dover's daughter and
                  her friend, he decides to go on a search himself. His
                  desperation leads him closer to finding the truth and also
                  jeopardises his own life.
                </p>
                <button className="browse-header-play-button">Play</button>
              </div>
            </div>
          ) : null}

          {/* ***************** Zodiac Info ******************** */}

          {activeMovie === "zodiac" ? (
            <div className="browse-drama-zodiac">
              <div className="browse-drama-zodiac-desc">
                <div className="browse-drama-zodiac-title-and-icon-wrapper">
                  <p className="browse-drama-zodiac-title">Zodiac</p>
                  <div className="browse-drama-zodiac-close-icon-wrapper">
                    <img
                      className="browse-drama-zodiac-close-icon"
                      src="/images/icons/close.png"
                      onClick={() => setActiveMovie("")}
                    ></img>
                  </div>
                </div>
                <p className="browse-drama-zodiac-subtitle">
                  Robert Graysmith, a cartoonist by profession, finds himself
                  obsessively thinking about the Zodiac killer. He uses his
                  puzzle-solving abilities to get closer to revealing the
                  identity of the killer.
                </p>
                <button className="browse-header-play-button">Play</button>
              </div>
            </div>
          ) : null}

          {/* ***************** Gone Girl Info ******************** */}

          {activeMovie === "gone-girl" ? (
            <div className="browse-drama-gone-girl">
              <div className="browse-drama-gone-girl-desc">
                <div className="browse-drama-gone-girl-title-and-icon-wrapper">
                  <p className="browse-drama-gone-girl-title">Gone Girl</p>
                  <div className="browse-drama-gone-girl-close-icon-wrapper">
                    <img
                      className="browse-drama-gone-girl-close-icon"
                      src="/images/icons/close.png"
                      onClick={() => setActiveMovie("")}
                    ></img>
                  </div>
                </div>
                <p className="browse-drama-gone-girl-subtitle">
                  Nick Dunne discovers that the entire media focus has shifted
                  on him when his wife Amy Dunne disappears on the day of their
                  fifth wedding anniversary.
                </p>
                <button className="browse-header-play-button">Play</button>
              </div>
            </div>
          ) : null}
        </div>

        <div className="browse-romance">
          <p className="browse-romance-title">Romance</p>
          <div className="browse-romance-movies">
            <img
              className="browse-romance-pic"
              src="/images/films/romance/la-la-land/small.jpg"
              alt=" La La Land"
              onClick={() => setActiveMovie("la-la-land")}
            ></img>
            <img
              className="browse-romance-pic"
              src="/images/films/romance/titanic/small.jpg"
              alt="Titanic"
              onClick={() => setActiveMovie("titanic")}
            ></img>
            <img
              className="browse-romance-pic"
              src="/images/films/romance/a-star-is-born/small.jpg"
              alt="A Star Is Born"
              onClick={() => setActiveMovie("a-star-is-born")}
            ></img>
            <img
              className="browse-romance-pic"
              src="/images/films/romance/the-notebook/small.jpg"
              alt="The Notebook"
              onClick={() => setActiveMovie("the-notebook")}
            ></img>
            <img
              className="browse-romance-pic"
              src="/images/films/romance/blue-valentine/small.jpg"
              alt="Blue Valentine"
              onClick={() => setActiveMovie("blue-valentine")}
            ></img>
          </div>

          {/* ***************** La La Land Info ******************** */}

          {activeMovie === "la-la-land" ? (
            <div className="browse-drama-la-la-land">
              <div className="browse-drama-la-la-land-desc">
                <div className="browse-drama-la-la-land-title-and-icon-wrapper">
                  <p className="browse-drama-la-la-land-title">La La Land</p>
                  <div className="browse-drama-la-la-land-close-icon-wrapper">
                    <img
                      className="browse-drama-la-la-land-close-icon"
                      src="/images/icons/close.png"
                      onClick={() => setActiveMovie("")}
                    ></img>
                  </div>
                </div>
                <p className="browse-drama-la-la-land-subtitle">
                  Sebastian (Ryan Gosling) and Mia (Emma Stone) are drawn
                  together by their common desire to do what they love. But as
                  success mounts they are faced with decisions that begin...
                </p>
                <button className="browse-header-play-button">Play</button>
              </div>
            </div>
          ) : null}

          {/* ***************** Titanic Info ******************** */}

          {activeMovie === "titanic" ? (
            <div className="browse-drama-titanic">
              <div className="browse-drama-titanic-desc">
                <div className="browse-drama-titanic-title-and-icon-wrapper">
                  <p className="browse-drama-titanic-title">Titanic</p>
                  <div className="browse-drama-titanic-close-icon-wrapper">
                    <img
                      className="browse-drama-titanic-close-icon"
                      src="/images/icons/close.png"
                      onClick={() => setActiveMovie("")}
                    ></img>
                  </div>
                </div>
                <p className="browse-drama-titanic-subtitle">
                  Seventeen-year-old Rose hails from an aristocratic family and
                  is set to be married. When she boards the Titanic, she meets
                  Jack Dawson, an artist, and falls in love with him.
                </p>
                <button className="browse-header-play-button">Play</button>
              </div>
            </div>
          ) : null}

          {/* ***************** A Star Is Born Info ******************** */}

          {activeMovie === "a-star-is-born" ? (
            <div className="browse-drama-a-star-is-born">
              <div className="browse-drama-a-star-is-born-desc">
                <div className="browse-drama-a-star-is-born-title-and-icon-wrapper">
                  <p className="browse-drama-a-star-is-born-title">
                    A Star Is Born
                  </p>
                  <div className="browse-drama-a-star-is-born-close-icon-wrapper">
                    <img
                      className="browse-drama-a-star-is-born-close-icon"
                      src="/images/icons/close.png"
                      onClick={() => setActiveMovie("")}
                    ></img>
                  </div>
                </div>
                <p className="browse-drama-a-star-is-born-subtitle">
                  After falling in love with struggling artist Ally, Jackson, a
                  musician, coaxes her to follow her dreams, while he battles
                  with alcoholism and his personal demons.
                </p>
                <button className="browse-header-play-button">Play</button>
              </div>
            </div>
          ) : null}

          {/* ***************** The Notebook Info ******************** */}

          {activeMovie === "the-notebook" ? (
            <div className="browse-drama-the-notebook">
              <div className="browse-drama-the-notebook-desc">
                <div className="browse-drama-the-notebook-title-and-icon-wrapper">
                  <p className="browse-drama-the-notebook-title">
                    The Notebook
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
                  Duke reads the story of Allie and Noah, two lovers who were
                  separated by fate, to Ms Hamilton, an old woman who suffers
                  from Alzheimer's, on a daily basis out of his notebook.
                </p>
                <button className="browse-header-play-button">Play</button>
              </div>
            </div>
          ) : null}

          {/* ***************** Blue Valentine Info ******************** */}

          {activeMovie === "blue-valentine" ? (
            <div className="browse-drama-blue-valentine">
              <div className="browse-drama-blue-valentine-desc">
                <div className="browse-drama-blue-valentine-title-and-icon-wrapper">
                  <p className="browse-drama-blue-valentine-title">
                    Blue Valentine
                  </p>
                  <div className="browse-drama-blue-valentine-close-icon-wrapper">
                    <img
                      className="browse-drama-blue-valentine-close-icon"
                      src="/images/icons/close.png"
                      onClick={() => setActiveMovie("")}
                    ></img>
                  </div>
                </div>
                <p className="browse-drama-blue-valentine-subtitle">
                  Dean and Cynthia are married with a daughter and their
                  marriage is about to fall apart. Both come from dysfunctional
                  families and struggle to make sense of their relationship.
                </p>
                <button className="browse-header-play-button">Play</button>
              </div>
            </div>
          ) : null}
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
