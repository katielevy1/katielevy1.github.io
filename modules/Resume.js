import React from 'react';


export default React.createClass({
    render() {
        return (
            <div className="blue-container">
                <div className = "resume">
                    <h1>See Below to View My Resume</h1>
                    <div className = "pdf-container">  
                        <object data="../pdf/k.pdf" type="application/pdf" width="100%" height="500px">
                            <p>It appears you don't have a PDF plugin for this browser.
                            No biggie... you can <a href="../pdf/k.pdf">click here to
                            download the PDF file.</a></p>
                        </object> 
                    </div>
                </div>
            </div>
            
        );
        
    }
});

