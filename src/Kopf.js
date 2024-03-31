import React, { Component } from 'react';
import KopfUl from './pages/components/KopfUl';
class Kopf extends Component {
    state = {  } 
    render() { 
        return (
            <div className="Kopf">
                <div className="eins" />
                <div className="zwei"><KopfUl /></div>
                <div className="drei"></div>
            </div>
        );
    }
}
 
export default Kopf;