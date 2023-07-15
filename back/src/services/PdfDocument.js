const PDFDocument = require('pdfkit');
const fs = require('fs');

exports.CreatePdf = async (confirmados) => {

    try {
        const pdf = new PDFDocument();

        pdf.pipe(fs.createWriteStream('confirmados.pdf'))

        confirmados.forEach(item => {
            newConfirmados = (item.nome0, item.nome1, item.age0);
        });

        pdf.fillColor('black').fontSize(17).text(confirmados, 50, 30);


        pdf.end();

        //await Nodemailer.SendPdf()
    } catch {
        console.log('erro ao gerar PDF');
    }
}
