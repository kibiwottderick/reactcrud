import React from "react";
const Requesthtml = ({ request }) => {
    return(
        <div className='d-flex' dangerouslySetInnerHTML={{ __html: request }} />
    )
}
export default Requesthtml;