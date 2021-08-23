import React from "react"
import { useHistory } from "react-router-dom"

function OptFormBtn() {
  const history = useHistory()

  return (
    <div onClick={() => history.push("/browse")} className="optform-btn">
      GET STARTED
    </div>
  )
}

export default OptFormBtn
