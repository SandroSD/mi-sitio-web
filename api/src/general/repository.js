import DataGeneral from '../modelos/dataGeneral';

const getAll = () => {
    console.log("si");
    return DataGeneral.find()
};

module.exports = {
    getAll
}