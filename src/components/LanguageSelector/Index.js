import React, { useRef, useState } from 'react'
import OutsideClickAlert from "../../hooks/OutsideClickAlert/index";
import './languageSelector.scss';
import englishImage from '../../images/languages/en.gif'
import russianImage from '../../images/languages/ru.gif'
import turkishImage from '../../images/languages/tr.gif'
const languagess = [
    {
        "innerText": "English",
        "value": "en",
        "dir": "ltr",
        image: englishImage
    },
    {
        "innerText": "Türkçe",
        "value": "tr",
        "dir": "ltr",
        image: turkishImage

    },
    {
        "innerText": "Русский",
        "value": "ru",
        "dir": "ltr",
        image: russianImage

    }
]
const LanguageSelector = () => {
    const languagesDivRef = useRef(null)
    const [langFlag, setLangFlag] = useState("en")
    const [langIndex, setLangIndex] = useState(0);
    const outsideClickDropDown = (e) => {
        languagesDivRef.current.style.opacity = 0
        languagesDivRef.current.style.visibility = 'hidden'
    }
    const handleLanguage = async (params = {}) => {
        let {  key,  index } = params

        setLangFlag(key)
        setLangIndex(index)
        //make hidden language dropdown in mobile menu After clicking
        languagesDivRef.current.style.opacity = 0
        languagesDivRef.current.style.visibility = 'hidden'

    }
    //when we click lang text it opens dropdown
    const setOpenLanguageDropdown = (e) => {
        e.stopPropagation();
        if (languagesDivRef.current.style.opacity === "1") {
            languagesDivRef.current.style.opacity = "0";
            languagesDivRef.current.style.visibility = 'hidden';

            // Remove 'no-pointer' class
            const elements = document.querySelectorAll('[data-name="language"]');
            elements.forEach(el => el.classList.remove('no-pointer'));
        } else {
            languagesDivRef.current.style.opacity = "1";
            languagesDivRef.current.style.visibility = 'visible';

            // Add 'no-pointer' class
            const elements = document.querySelectorAll('[data-name="language"]');
            elements.forEach(el => el.classList.add('no-pointer'));
        }
    }
    const getCurrentLanguageImage = () => {
        const language = languagess.find(lang => lang.value === langFlag);
        return language ? language.image : null;  // or a default image if not found.
    };
    /*
      useEffect(() => {
    if ((localStorage?.getItem("language"))) {
      let langKey = JSON.parse(localStorage.getItem("language"))
      appData?.languages.map((item, index) => {
        let { value: key, } = item
        if (langKey === key) {
          setLangFlag(key)
          setLangIndex(index)
        }
      })
    }


  }, [language])
    */
    return (
        <div className={"language_dropdown"}>
            <div className={"language_dropdown_top"} >
                <div className={"language_dropdown_top_img_div"} onClick={setOpenLanguageDropdown} data-name="language" >
                    <img src={getCurrentLanguageImage()} alt={langFlag} />

                </div>
                <span onClick={setOpenLanguageDropdown} className={"lang_text"} data-name="language">
                    {languagess[langIndex]?.innerText}
                    <i className="fa-solid fa-angle-down"></i>
                </span>
                <OutsideClickAlert onOutsideClick={outsideClickDropDown}>
                    <div ref={languagesDivRef} className={"all_languages"} style={{ opacity: "0", visibility: "hidden" }} >
                        {languagess.map((item, index) => {
                            let { innerText: text, value: key, dir: direction, image } = item
                            return (
                                <div className={"content"} name={key} key={index} onClick={(e) => handleLanguage({ e, text, key, direction, index })}>
                                    <div className={"img_div"}>
                                        <img src={image} alt={text} />
                                    </div>
                                    <span>{text}</span>
                                </div>
                            )
                        })}
                    </div>
                </OutsideClickAlert>
            </div>
        </div>

    )
}

export default LanguageSelector