import React from 'react'
import "./styles.scss";
/**
 @TextInput {//* name:string,label:string,errorMessage:string,value:string,onChange:function}
 **/
const Textarea = (props) => {
    let { name = "", label = "", errorMessage = "", value = "", onChange = (e) => { }, isTaxiDeal = false, inputStyle = {}, labelStyle = {} } = props

    return (
        <section className={`${"form_input"} ${isTaxiDeal ? "isTaxiDeal" : ""}`}>
            {errorMessage ? <p className={`error_message ${"form_input_error"}`}>{errorMessage}</p> : <React.Fragment></React.Fragment>}
            <textarea style={{ ...inputStyle }} value={value} name={name} onChange={onChange} className={`${"textarea"} `} err={String(typeof errorMessage === 'string' && errorMessage.length > 0)} />
            <label style={{ ...labelStyle }} htmlFor={name} className={"label"}> {label} </label>
        </section>
    )
}

export default Textarea