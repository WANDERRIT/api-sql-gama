import Automobile from "../models/autoModels";

class AutomobileRepo {

    async create(carData) {
        return await Automobile.create(carData);
    };

    async getAll() {
        return await Automobile.findAll();
    };

    async getById(id){
        return await Automobile.findByPk(id);
    };

    async update(id, carData){
        return await Automobile.update(carData,{
            returning: true,
            where: {id: id}
        })
    };

    async delete(id){
        return await Automobile.destroy(id,{
            where: {id:id}
        })
    };

}

export default AutomobileRepo();