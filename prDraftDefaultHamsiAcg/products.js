import React, { useEffect, useRef, useState } from 'react'
import './produtcs.scss';
// Custom Hook to manage refs
function useSubContentRefs(categories) {
    return categories.map(() => React.createRef());
}

const categories = [
    {
        name: 'Otel Havlulari',
        subItems: ['Otel el havlusu', 'Otel ayak havlusu', 'Otel banyo havlusu'],
    },
    {
        name: 'Bornozlar',
        subItems: ['Otel Bornozlari', 'Spa Bornozlari', 'Hamam Bornozlari', 'Ozel Tasarim'],
    },
    {
        name: 'Spa havlulari',
        subItems: [],
    },
    {
        name: 'Plaj havlulari',
        subItems: [],
    },
    {
        name: 'Masaj,terapi,Bakım havluları',
        subItems: [],
    },
    {
        name: 'Güzellik merkezleri havlulari',
        subItems: ["Manikür","Pedikür"],
    },
    {
        name: 'Kuaför havlular',
        subItems: [],
    },
    {
        name: 'Restorana özel tasarim havlulari',
        subItems: ["Personel havlulari"],
    },
    
];

const Products = () => {
    const [isOpenList, setIsOpenList] = useState(new Array(categories.length).fill(true));
    const subContentRefs = useSubContentRefs(categories);

    useEffect(() => {
        subContentRefs.forEach((ref, index) => {
            if (ref.current) {
                const ulSubContent = ref.current;
                const ulSubContentHeight = ulSubContent.scrollHeight;

                if (isOpenList[index]) {
                    ulSubContent.style.maxHeight = `${ulSubContentHeight}px`;
                } else {
                    ulSubContent.style.maxHeight = '0';
                }
            }
        });
    }, [isOpenList, subContentRefs]);

    const toggleMenu = (index) => {
        const updatedIsOpenList = [...isOpenList];
        updatedIsOpenList[index] = !updatedIsOpenList[index];
        setIsOpenList(updatedIsOpenList);
    };


    return (
        <div className='products'>
            <div className="container">
                <h1>Products</h1>
                <div className="products_column">
                    <div className="left_products_column">
                    </div>
                    <div className="right_products_column">
                        <div className="right_products_column_content">
                            <ul className='ul_main'>
                                {categories.map((category, index) => (
                                    <li className={`li_main `} key={index} onClick={() => toggleMenu(index)}>
                                        <div className='li_main_div'>
                                            <p className='li_main_div_text'>{category.name}</p>
                                            <p className='li_main_div_icon'>
                                                <i className={`fa-solid fa-chevron-${isOpenList[index] ? 'up' : 'down'}`}></i>
                                            </p>
                                        </div>
                                        <ul className={`ul_sub_content `} ref={subContentRefs[index]}        >
                                            {category.subItems.map((subItem, subIndex) => (
                                                <li className='li_sub_content' key={subIndex}>
                                                    <span>*</span> {subItem}
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products