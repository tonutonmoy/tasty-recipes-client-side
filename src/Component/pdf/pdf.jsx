import React from "react";
import './pdf.css'
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";


// Create styles
const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 30,
     
    },
    text: {
      margin: 12,
      fontSize: 17,
      textAlign: "justify",
      fontFamily: "Times-Roman",
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 100,
    },
    header: {
      fontSize: 12,
      marginBottom: 20,
    
      color: "grey",
    },
    pageNumber: {
      position: "absolute",
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
     
      color: "grey",
    },
  });

const Pdf = () => {
    return (
        <div style={{marginTop:"200px",marginBottom:"300px"}} className="w-75 mx-auto">
      <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>

       
        </Text>
       
      <div className="pdf-container">
      <Text className="pdf-text"  style={styles.title}>
          
          1:  Tell us the differences between uncontrolled and controlled components?
          </Text>
         <div className="pdf-text-container">
         <Text className="pdf-ans" style={styles.text}>
            
            Unlike the uncontrolled component, the input form element in the controlled component is handled by the component rather than the DOM.
           </Text>
         </div>
      </div>



    <div className="pdf-container">

    <Text className="pdf-text" style={styles.title}>
       2: How to validate React props using PropTypes?
      
        </Text>
   

           <div className="pdf-text-container">
           <Text className="pdf-ans" style={styles.text}>
          
           propTypes is used for props validation. If some of the props aren't using the correct type that we assigned, we will get a console warning. After we specify validation patterns, we will set App. defaultProps.
          </Text>
           </div>
       </div>
           
       
          
          <div className="pdf-container">
          <Text className="pdf-text" style={styles.title}>
        3: Tell us the difference between nodejs and express js?
      
        </Text>
  


        <div className="pdf-text-container">
        <Text className="pdf-ans" style={styles.text}>
       
       Express JS vs. Node JS: Difference between the Technologies ...
       js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.
             
               </Text>
        </div>

          </div>

        
        <div className="pdf-container">
              
        <Text className="pdf-text"t style={styles.title}>
        4: What is a custom hook, and why will you create a custom hook?
      
        </Text>
       
       <div  className="pdf-text-container">
       <Text  className="pdf-ans" style={styles.text}>
        1: Be called at the very top level of your React function to ensure that hooks are called in the same order each time a component renders.
        2: Start with the use keyword.
        3: Never be called inside a nested function, a loop, or condition.
        4: Only be called from functional components in React.
      
        </Text>
       </div>

        </div>


        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
        </div>
    );
};


export default Pdf;