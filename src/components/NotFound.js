import React from 'react'

const NotFound = () => {
    return (
        <div className="position-relative"
            style={{
                minHeight: '100vh',
                top: '0px',
                left: '0px',
                right: '0px',
                background: 'black',
                position: 'fixed',
                zIndex: "99999",
                display: 'flex'
                , justifyContent: 'center',
                alignItems: 'center', flexDirection: 'column'
            }}
        >
            <h2 style={{ color: 'red' }}>
                404 | Not Found.
            </h2>
            <br />

            <div>

                <a href="/">
                    <button style={{ background: "white", color: 'black', cursor: 'pointer' ,border:'1px solid white',padding:'4px 6px',borderRadius:'4px'}}>
                        Go To Home
                    </button>
                </a>
            </div>
        </div>
    )
}

export default NotFound