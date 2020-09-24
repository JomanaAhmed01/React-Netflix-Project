import React, { Children } from 'react';

function JumboSubTitle({Children,...restProps}) {
    return (
        <>
          <p className="jumbo-sub" {...restProps}>{Children}Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>

          <p className="jumbo-sub" {...restProps}>{Children}Save your favorites easily and always have something to watch.</p>

          <p className="jumbo-sub" {...restProps}>{Children}unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</p>
        </>
    )
}

export default JumboSubTitle;