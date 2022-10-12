const PdfDocument = require('../services/PdfDocument')
const Confirm = require('../models/confirm.model')

exports.getExtract = async(req, res) => {
    try {
        const confirms = await Confirm.find({})    

        // var arrayjs = JSON.parse(confirms)

        // arrayjs.forEach

        var nome = []

        for(var i = 0; i < confirms.length; i++) {
            nome.push(confirms[i].convidados[i].convidado)
        }

        console.log(nome);

        await PdfDocument.CreatePdf(array)

        res.status(200).json({message: 'sucesso', confirms})
    } 
    catch (err) {
        console.log('erro ao criar extract PDF');
        res.status(400).json({ message: 'erro', err})
    }
}
