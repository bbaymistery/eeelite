import React from 'react'
import { useTranslation } from 'react-i18next';

const ProductsCategoriesRightColumn = ({categories,subOpenIndex,subContentRefs,setSubOpenIndex,openIndex,toggleMenu,toggleSubItem}) => {
    const { t } = useTranslation(["productsCategories"]);  // <-- Use the hook here

  return (
      <div className="right_products_column_content">
          <ul className='ul_main'>
              {categories.map((category, index) => (
                  <li className={`li_main`} key={index} >
                      <div onClick={() => toggleMenu(index)} className={`${index === openIndex ? "active_li_main " : ""} li_main_div`}>
                          <p className='li_main_div_text'>{t(category.name)}</p>
                          {category.subItems.length > 0 && (
                              <p className='li_main_div_icon'>
                                  <i className={`fa-solid fa-chevron-${index === openIndex ? '' : 'down'}`} onClick={() => setSubOpenIndex(0)}></i>
                              </p>
                          )}
                      </div>
                      <ul className={`ul_sub_content ${index === categories.length - 1 ? "ul_sub_content_last" : ""}`} ref={subContentRefs[index]}>
                          {category.subItems.map((subItem, subIndex) => (
                              <li
                                  className={`li_sub_content ${subIndex === subOpenIndex ? 'active_li_sub_content' : ''}`}
                                  key={subIndex}
                                  onClick={() => toggleSubItem(subIndex)}
                              >
                                  <span>*</span> {t(subItem)}
                              </li>
                          ))}
                      </ul>
                  </li>
              ))}
          </ul>
      </div>
  )
}

export default ProductsCategoriesRightColumn