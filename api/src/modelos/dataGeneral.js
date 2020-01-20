import mongoose from 'mongoose';

const dataGeneralSchema = new mongoose.Schema({
    tipo: String,
    descripcion: String
});

const DataGenerals = mongoose.model('DataGenerals', dataGeneralSchema, 'dataGenerals');

module.exports = DataGenerals;