import React, { useEffect, useState } from 'react';
import './produtcs.scss';
import { useTranslation } from 'react-i18next';
import ProductsCategoriesRightColumn from '../components/ProductsCategoriesRightColumn/ProductsCategoriesRightColumn';
import ProductDescriptionEntry from '../components/ProductsDescriptionEntry/ProductDescriptionEntry';
import { categories } from '../constants/categories';

import Card from '../components/Card';
import Pagination from '../components/Pagination';
import { kuaforHavlulari, manikurHavlulari, plajHavlulari, restoranHavlulari, spaHavlulari } from '../constants/havlular';
import Accordion from '../components/Accordion/Accordion';



// Custom Hook to manage refs
const useSubContentRefs = (categories) => categories.map(() => React.createRef());
const Products = () => {

    const [openIndex, setOpenIndex] = useState(0); // Track the currently open category index (-1 means none are open)
    const [subOpenIndex, setSubOpenIndex] = useState(0); // Track the currently open subItem index within the open category
    const subContentRefs = useSubContentRefs(categories);



    const [descriptionName, setDescriptionName] = useState("")
    const [currentProducts, setCurrentProducts] = useState([]);
    const [totalPages, settotalPages] = useState()
    const [currentPage, setCurrentPage] = useState(1); // Add state for current page
    const productsPerPage = 9; // Number of products to display per page


    //accrodion
    const [active, setActive] = useState(null);
    const [contentOfAccordionName, setcontentOfAccordionName] = useState("contentAccordionOfSpaHavlusu")
    const toggleAccordion = (e) => {
        //togglus yazsak biri otomatik acg galar
        if (e === active) return setActive(null);

        setActive(e);
    };

    const { t } = useTranslation(["productsCategories"]);  // <-- Use the hook here
    useEffect(() => {
        subContentRefs.forEach((ref, index) => {
            if (ref.current) {
                const ulSubContent = ref.current;
                const ulSubContentHeight = ulSubContent.scrollHeight;

                if (index === openIndex) {
                    ulSubContent.style.maxHeight = `${ulSubContentHeight}px`;
                } else {
                    ulSubContent.style.maxHeight = '0';
                }
            }
        });
    }, [openIndex, subContentRefs,]);


    const toggleMenu = (index) => {
        if (index === openIndex) {
            // Clicked on the currently open category, so close it
            return
        } else {
            setOpenIndex(index); // Set the open index to the clicked category index
            setSubOpenIndex(0); // Reset subOpenIndex when opening a new category
            setCurrentPage(1)
        }
    };

    const toggleSubItem = (subIndex) => setSubOpenIndex(subIndex);
    const handlePageChange = (newPage) => setCurrentPage(newPage);

    useEffect(() => {
        // Determine which array of products to use based on your category logic
        let allProducts

        if (openIndex === 0) {
            settotalPages(Math.ceil(spaHavlulari.length / productsPerPage))
            setDescriptionName("descriptionSpaHavlusu")
            setcontentOfAccordionName("contentAccordionOfSpaHavlusu")
            allProducts = spaHavlulari
        }

        if (openIndex === 1) {
            setDescriptionName("descriptionPlajHavlusu")
            settotalPages(Math.ceil(plajHavlulari.length / productsPerPage))
            setcontentOfAccordionName("contentAccordionOfPlajHavlusu")
            allProducts = plajHavlulari
        }

        if (openIndex === 2) {
            setDescriptionName("descriptionKuaforHavlusu")
            settotalPages(Math.ceil(kuaforHavlulari.length / productsPerPage))
            setcontentOfAccordionName("contentAccordionKuafHavlusu")
            allProducts = kuaforHavlulari
        }

        if(openIndex===3){
            setDescriptionName("descriptionManikur")
            setcontentOfAccordionName("contentAccordionManikur")
            settotalPages(Math.ceil(manikurHavlulari.length / productsPerPage))
            allProducts = manikurHavlulari

        }

        if (openIndex === 4) {
            setDescriptionName("descriptionRestoran")
            setcontentOfAccordionName("contentAccordionRestoran")
            settotalPages(Math.ceil(restoranHavlulari.length / productsPerPage))
            allProducts = restoranHavlulari
        }
        //
        // Calculate the start and end indexes for the current page
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;

        // Slice the array to get the products for the current page
        const productsForPage = allProducts.slice(startIndex, endIndex);

        setCurrentProducts(productsForPage); // Update the state with the products
    }, [currentPage, openIndex]);

    useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [])





    return (
        <div className='products'>
            <div className="container">
                <ProductDescriptionEntry />
                <div className='bottom_to_top_animation1 accordion_div_box' style={{ animationDelay: "1.7s" }}>
                    <Accordion
                        accordionStyle={{ marginBottom: "0px" }}
                        headingStyleContent={{ justifyContent: "flex-end", gap: '0.5rem', display: "inline-flex", backgroundColor: "#f5f5f5", padding: "5px 10px", borderRadius: "3px" }}
                        headingStyle={{ backgroundColor: "transparent", display: 'flex', justifyContent: "flex-end", padding: "0px" }}
                        title={t("readmore")}
                        active={active}
                        setActive={setActive}
                        toggleAccordion={toggleAccordion}
                        content={<div dangerouslySetInnerHTML={{ __html: t(contentOfAccordionName) }} />}
                    />
                </div>
                <h1>
                    <p className='zoom_out' style={{ borderBottom: `${!categories[openIndex].subItems.length > 0 ? "4px solid #e3e4e7" : ""}`, animationDelay: "1.4s" }}>{t(categories[openIndex].name)}</p>
                    <p className='zoom_out' style={{ animationDelay: "1.6s" }}>{categories[openIndex].subItems.length > 0 ? `${t(categories[openIndex].subItems[subOpenIndex])}` : <></>}</p>
                </h1>

                <div className="products_column">
                    <div className="left_products_column">
                        <div className='cards'>

                            {currentProducts.map((product) => (
                                <Card key={product.id} pr={product} translationhook="productsCategories" descriptionProduct={descriptionName} />
                            ))}
                        </div>
                        <br />

                        <Pagination currentPage={currentPage} totalPages={totalPages} onChangePage={handlePageChange} />
                    </div>
                    <div className="right_products_column">
                        <ProductsCategoriesRightColumn
                            categories={categories}
                            subOpenIndex={subOpenIndex}
                            subContentRefs={subContentRefs}
                            setSubOpenIndex={setSubOpenIndex}
                            openIndex={openIndex}
                            toggleMenu={toggleMenu}
                            toggleSubItem={toggleSubItem}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
