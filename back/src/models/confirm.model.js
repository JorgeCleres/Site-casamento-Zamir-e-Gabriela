const mongoose = require('mongoose')

const newSchema = mongoose.Schema;

const ConfirmSchema = newSchema({
    email: {type: String, maxLenght: 50 },
    children: {type: Boolean},
    idadecriancas: [
        {
            idadecrianca: {type: String }
        }
    ],
    convidados: [
        {
            convidado: {type: String }
        }
    ],
}, {
    timestamps: true,
})

const Confirm = mongoose.model('confirmSchema', ConfirmSchema)

module.exports = Confirm