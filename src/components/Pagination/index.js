import React from 'react';
import "./styles.scss";

const Pagination = ({ currentPage, totalPages, onChangePage }) => {
    const pageRange = 2; // Number of page numbers to display before and after the current page

    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    const renderPageNumbers = () => {
        const pageNumbers = [];
        let prevPage = null;

        for (const page of pages) {
            if (page === 1 || page === totalPages || Math.abs(page - currentPage) <= pageRange || page % pageRange === 0) {
                if (prevPage && page - prevPage > 1) {
                    pageNumbers.push('...');
                }
                pageNumbers.push(
                    <button key={page} onClick={() => onChangePage(page)} className={currentPage === page ? 'active' : ''}    >
                        {page}
                    </button>
                );
                prevPage = page;
            }
        }

        return pageNumbers;
    };

    return (
        <div className="pagination">
            {currentPage === 1 ? <></> :
                <button className={`prev-btn ${currentPage === 1 ? "disabled" : ""}`} onClick={() => onChangePage(currentPage - 1)}    >
                    Prev
                </button>}
            {renderPageNumbers()}
            {currentPage === totalPages ? <></> :
                <button className={`next-btn ${currentPage === totalPages ? "disabled" : ""}`} onClick={() => onChangePage(currentPage + 1)}  >
                    Next
                </button>
            }
        </div>
    );
};

export default Pagination;
