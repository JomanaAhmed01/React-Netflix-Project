import React from 'react';

function JumboImage({children, ...restProps}) {
    return (
    <>
      <div className="jumbo-img" {...restProps}>{children}<img src="./images/misc/home-tv.jpg"/></div>

      <div className="jumbo-img" {...restProps}>{children}<img src="./images/misc/home-mobile.jpg"/></div>
      
      <div className="jumbo-img" {...restProps}>{children}<img src="./images/misc/home-imac.jpg"/></div>

    </>
    )
}

export default JumboImage;