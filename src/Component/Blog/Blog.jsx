
import React from 'react';


import './Blog.css';

import Pdf from "react-to-pdf";

const ref = React.createRef();


const Blog = () => {
    return (
      
        <div style={{marginTop:"200px",marginBottom:"300px"}} className="w-75 mx-auto">




      
             
             <Pdf targetRef={ref} filename="code-example.pdf">
                     {({ toPdf }) => <button className='active ' onClick={toPdf}>Generate Pdf</button>}
                   </Pdf>
                   <div ref={ref}>
                 
       




      <section className="pdf-container">
      <h3 className="pdf-text" >
          
          1:  Tell us the differences between uncontrolled and controlled components?
          </h3>
         <div className="pdf-text-container">
         <p className="pdf-ans">
            
            Unlike the uncontrolled component, the input form element in the controlled component is handled by the component rather than the DOM.
           </p>
         </div>
      </section>



    <section className="pdf-container">

    <h3 className="pdf-text" >
       2: How to validate React props using PropTypes?
      
        </h3>
   

           <div className="pdf-text-container">
           <p className="pdf-ans" >
          
           propTypes is used for props validation. If some of the props aren't using the correct type that we assigned, we will get a console warning. After we specify validation patterns, we will set App. defaultProps.
          </p>
           </div>
       </section>
           
       
          
          <section className="pdf-container">
          <h3 className="pdf-text" >
        3: Tell us the difference between nodejs and express js?
      
        </h3>
  


        <div className="pdf-text-container">
        <p className="pdf-ans" >
       
       Express JS vs. Node JS: Difference between the Technologies ...
       js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.
             
               </p>
        </div>

          </section>

        
        <section className="pdf-container">
              
        <h3 className="pdf-text">
        4: What is a custom hook, and why will you create a custom hook?
      
        </h3>
       
       <div  className="pdf-text-container">
       <p className="pdf-ans" >
        1: Be called at the very top level of your React function to ensure that hooks are called in the same order each time a component renders.
        2: Start with the use keyword.
        3: Never be called inside a nested function, a loop, or condition.
        4: Only be called from functional components in React.
      
         </p>

       </div>

      
       </section>













   </div>


  </div>
    )

}

export default Blog;