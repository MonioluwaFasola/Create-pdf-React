import React from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf';

export default function ScreenshotfromDOM() {
    const exportPDF = () => {
      // //convert DOM to SVG
      // html2canvas(document.querySelector = ("App")).then (canvas => 
      //   {document.body.appendChild(canvas)});
      
      //convert DOM to screenshot/Image 
        const input = document.getElementById("App")
        html2canvas(input, {logging: true, letterRendering: 1, useCORS: true}).then (canvas => {
          const imgWidth = 208;
          const imgHeight = canvas.height * imgWidth / canvas.width;
          const imgData = canvas.toDataURL ('img/png');
      //convert screenshot to PDF
          const pdf = new jsPDF('p', 'mm', 'a4');
          pdf.addImage(imgData, 'PNG' , 0 , 0 , imgWidth, imgHeight);
          pdf.save("ReactApp.pdf");
        })
      }

  return (
    <div>
        <button onClick = {() => exportPDF()}>Download DOM PDF</button>
    </div>
  )
}
