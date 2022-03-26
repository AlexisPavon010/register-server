import mongoose from 'mongoose'

const RegisterModel = new mongoose.Schema({
    name: { type: String, },
    lastName: { type: String, },
    email: { type: String, },
    description: { type: String, }
})

export default mongoose.model('Registros', RegisterModel)