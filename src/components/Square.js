import React from "react"
function Square (props) {
  return <button className={`btn ${props.dynaClassName}`}  key={props.key} onClick={props.changePlayer}>{ props.player }</button>
}
export default Square