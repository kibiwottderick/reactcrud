import React, {Component} from "react";
class Loader extends Component
{
    render() {
        return(
        <section>
        <div className="loader">
            <span style={{'--i':1}}></span>
            <span style={{'--i':2}}></span>
            <span style={{'--i':3}}></span>
            <span style={{'--i':4}}></span>
            <span style={{'--i':5}}></span>
            <span style={{'--i':6}}></span>
            <span style={{'--i':7}}></span>
            <span style={{'--i':8}}></span>
            <span style={{'--i':9}}></span>
            <span style={{'--i':10}}></span>
        </div>
    </section>
        )
    }
}
export default Loader;