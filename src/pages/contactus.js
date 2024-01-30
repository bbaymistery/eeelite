import React, { useState } from 'react'
import "./contactus.scss";
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import AdressInformations from '../components/AdressInformations';
import TextInput from '../components/TextInput';
import Textarea from '../components/Textarea';
import imageQR from '../images/instagramQR.jpeg'
const initialFormValue = { email: "", phone: "", subject: "", message: "", fullname: "", }
const ContactUs = (props) => {
  const { t } = useTranslation(["contact"]);
  //
  //
  //
  let { bggray } = props
  //appContactUsHeader


  const dispatch = useDispatch()
  const [formValue, setFormValue] = useState(initialFormValue);
  const [error, setError] = useState(initialFormValue);
  const onChangeHandler = (e) => setFormValue((values) => ({ ...values, [e.target.name]: e.target.value }));

  const handleSend = () => {
    let newErrors = {};
    let isValid = true;
    // // Check for required fields
    Object.keys(formValue).forEach((key) => {
      if (!formValue[key]) {
        newErrors[key] = "Required";
        isValid = false;
      }
    });
    if (isValid) {
      dispatch({ type: "ALERT", payload: { loading: true } })
      const method = "POST"
      const headers = { Accept: "application/json, text/plain, */*", "Content-Type": "application/json", }
      const body = JSON.stringify({
        senderId: 1,
        reciverMails: [formValue.email],
        subject: formValue.subject,
        mailContent: formValue.message
      })
      let reqOptions = { method, body, headers, };
      // fetch(`${env.apiDomain}/tools/mailer`, reqOptions)
      //   .then((res) => {
      //     console.log(res);
      //     dispatch({ type: "ALERT", payload: { loading: false } })
      //     if (res.status === 200) {
      //       dispatch({ type: "ALERT", payload: { success: "Email successfully sended" } })
      //       setError({ email: "", phone: "", subject: "", message: "", fullname: "", });
      //       setFormValue({ email: "", phone: "", subject: "", message: "", fullname: "", });
      //     }
      //   })
      //   .catch((e) => {
      //     dispatch({ type: "ALERT", payload: { errors: "Something went wrong" } })
      //     setError({ email: "", phone: "", subject: "", message: "", fullname: "", });
      //     setFormValue({ email: "", phone: "", subject: "", message: "", fullname: "", });
      //   });
    } else {
      setError((error) => ({ ...error, ...newErrors }));
    }

  }






  return (
    <div className={` contact_us `} bggray={String(bggray === "true")}>
      <div className={`contact_us_section container`}>
        <div className={`contact_us_section_container `}>
          <div className={"contact_area"}>
            <div className={"contact_container"}>
              <div className={"left"}>
                <div className={"form_box"}>
                  <div className={"form_title_wrap"}>
                    <h3 className={"title"}>{t("welcome")}</h3>
                    <p className={"desc"}>
                      {t("subwelcome")}
                    </p>
                  </div>
                  <div className={"form_content"}>
                    <div className={"contact_form_action"}>
                      <form className={"form"}>
                        <div className={"input_box"}>
                          <div className={"input"}>
                            <TextInput label="Full Name" type="text" name="fullname" onChange={onChangeHandler} value={formValue.fullname} errorMessage={error.fullname} />
                          </div>
                          <div className={"input"}>
                            <TextInput label="Subject" name="subject" type="text" onChange={onChangeHandler} value={formValue.subject} errorMessage={error.subject} />
                          </div>
                        </div>
                        <div className={"input_box"}>
                          <div className={"input"}>
                            <TextInput label="Email" name="email" type="text" onChange={onChangeHandler} value={formValue.email} errorMessage={error.email} />
                          </div>
                          <div className={"input"}>
                            <TextInput label="Phone" name="phone" type="text" onChange={onChangeHandler} value={formValue.phone} errorMessage={error.phone} />
                          </div>
                        </div>
                      </form>
                      <div className={` input  inp_textarea`}>
                        <Textarea label="Message" name="message" value={formValue.message} onChange={onChangeHandler} errorMessage={error.message} />
                      </div>
                      <div className={"lodbtn"}>
                        <button onClick={handleSend} className='btn '>Send Message</button>
                      </div>
                    </div>
                    <br />
                    <br />
                    <p className='katalog_p'>{t(`${"catalogCheck"}`)}</p>

                  </div>
                </div>
              </div>

              {/* <AdressInformation direction={direction} /> */}
              <div className={"right"}>
                <AdressInformations />
                <div className={"qr_image_div"}>
                  <img src={imageQR} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs