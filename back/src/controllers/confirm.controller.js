const Confirm = require('../models/confirm.model')
const Nodemailer = require('../services/nodemailer')

exports.registerConfirm = async(req, res) => {
    try {

        const saveConfirm = await new Confirm({
            email: req.body.email,
            children: req.body.children,
            convidados: req.body.convidados,
            idadecriancas: req.body.idadecriancas
        })

        saveConfirm.save()

        await Nodemailer.EmailRespoConfirmation(req.body.email)

        res.status(200).json({ message: 'Confirm criado com sucesso', saveConfirm})
    }
    catch(err) {
        res.status(400).json({message: 'erro', err: err})
        console.log(err)
    }
}

exports.getConfirm = async(req, res) => {
    try {
        const confirmRes = await Confirm.find({})
        res.status(200).json({message: 'confirmação', confirmRes})
    }
    catch(err) {
        res.status(400).json({message: 'erro', err})
    }
}