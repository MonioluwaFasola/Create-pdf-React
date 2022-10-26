//Using React PDF
import React from 'react'
import {Page, Text, View, PDFViewer, Document, StyleSheet} from '@react-pdf/renderer'

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#1663be",
        color: "#ffffff",
    },
    section: {
        margin: 10,
        padding: 10,
    },
    viewer: {
        width: "320px", 
        height: "350px",
    },
});

 function JavascriptLibrary() {
  return (
    <PDFViewer style={styles.viewer}>
        <Document>
            <Page size="A4" style={styles.page}>
               <View style={styles.section}>
                  <Text>React-PDF</Text>
               </View>
               <View style={styles.section}>
                  <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse molestie, enim a scelerisque ullamcorper, risus dolor lobortis felis, a condimentum elit est viverra purus. Curabitur gravida ante mauris, tempor ornare libero sodales in. Nunc laoreet, ex nec lobortis cursus, neque libero interdum libero, quis tincidunt urna turpis id nibh.</Text>
               </View>
            </Page>
        </Document>
    </PDFViewer>
  )
}

export default JavascriptLibrary