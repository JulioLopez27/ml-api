const PdfPrinter = require('pdfmake')
const fs = require('fs')

const fonts = require('./fonts')
const style = require('./styles')
const { content } = require('./pdfContent')


let docDefinition = {
    content: content,
    styles: style
}

const printer = new PdfPrinter(fonts)
const pdfDoc = printer.createPdfKitDocument(docDefinition)
// genera fisicamente el pdf
pdfDoc.pipe(fs.createWriteStream("pdfs/ejercicio.pdf"))

pdfDoc.end()