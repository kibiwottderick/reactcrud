import React from 'react'
import axios from 'axios';
const fetch = ({url}) => {
    window.onscroll = async function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            let result = await axios.get(url);
            if (result.data.status === 200) {
                this.state.students.push(result.data.students)
            }  
        }
    }
}

export default fetch