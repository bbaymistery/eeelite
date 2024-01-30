import React from 'react'
import "./styles.scss"
/**
 @TextInput {//* type:string,name:string,label:string,errorMessage:string,value:string,onChange:function}
 **/
const TextInput = (props) => {
  let { type = "text", value = "", name = "", label = "", errorMessage, onChange = (e) => { }, placeholder = "", labelStyle = {}, inputStyle = {} } = props

  return (
    <section className={"form_input"} >
      {typeof errorMessage === 'string' ? <p className={`error_message ${"form_input_error"}`}>{errorMessage}</p> : <React.Fragment></React.Fragment>}
      <input style={{ ...inputStyle }} required err={String(typeof errorMessage === 'string' && errorMessage.length > 0)} type={type} value={value} name={name} onChange={onChange} placeholder={placeholder} className={` input`} />
      <label style={{ ...labelStyle }} htmlFor={name} className={"label"}> {label} </label>
    </section>
  )
}

export default TextInput