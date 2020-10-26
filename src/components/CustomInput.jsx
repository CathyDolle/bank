import React, { useState } from "react"
import "./CustomInput.scss"

function CustomInput(props) {
  // Réccupérer la valeur insérée par l'user dans l'input
  // Variable qui définit l'état de mon composant
  const [errorMessage, setErrorMessage] = useState(null)
  const [value, setValue] = useState("")

  function handleChange(e) {
    setValue(e.target.value)

    if (props.type === "password") {
      if (e.target.value.length < 8) {
        setErrorMessage("Password must be at least 8 characters long.")
      } else setErrorMessage(null)
    } else if (props.type === "email") {
      if (!e.target.value.includes("@", ".")) {
        setErrorMessage("Email must be valid.")
      } else setErrorMessage(null)
    }
  }

  // Conditions
  let isValid = errorMessage === null

  return (
    <div className="input_container">
      {/* afficher msg d'erreur */}
      {isValid === false && <div className="error_message">{errorMessage}</div>}
      <input
        className={isValid ? "" : "error"}
        onChange={handleChange}
        value={value}
        type={props.type}
        placeholder={props.placeholder}
        autoComplete="on"
      />
      <label htmlFor="input">{props.name}</label>
    </div>
  )
}

export default CustomInput
