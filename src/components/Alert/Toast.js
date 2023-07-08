import { useDispatch,  } from 'react-redux'
import "./toast.scss";

const Toast = ({ title, body, bgColor }) => {
    const dispatch = useDispatch()
    const handleClose = () => dispatch({ type: "ALERT", payload: {} })

    return (
        // style={{ top: '5px', right: '5px', zIndex: 50, minWidth: '200px' }}
        //
        <div className={`toast_notification fade_bottom_to_top_hidden  ${bgColor}`} style={{ zIndex: 50, minWidth: '200px' }}>
            <div className={`toast_nofication_header  ${bgColor}`}>
                <strong >{title}</strong>
                <i onClick={handleClose} className={`fa-solid fa-x close_icon`}></i>
            </div>
            <div className={"toast_notification_body"}>
                {typeof (body) === 'string' ? body : <ul>{body.map((text, index) => (<li key={index}>{text}</li>))} </ul>}
            </div>
        </div>
    )
}

export default Toast