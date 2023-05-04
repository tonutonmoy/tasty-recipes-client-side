
import React from 'react';
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';
import Pdf from '../pdf/pdf';


const Blog = () => {
    return (
      
        <div className='my-5' style={{marginTop:'100px',marginBottom:'100px'}}>
    <PDFDownloadLink document={ <Pdf/>} filename="FORM">
      {({loading}) => (loading ? <button className=' active'>Loading Document...</button> : <button className='blog-btn active'>Download</button> )}
      </PDFDownloadLink>

      <Pdf></Pdf>
  </div>
    )

}

export default Blog;