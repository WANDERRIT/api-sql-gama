import AutomobileRepo from "../repositories/autoRepositories.js"

class AutomobileController{
  async create(req, res) {
		try {
			const car = await AutomobileRepo.create(req.body);
			res.status(201).json(car);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	}

  async getAll(req, res){
    try{
      const car = await AutomobileRepo.getAll();
      res.json(car);
    } catch(error){
      res.status(500).json({error: error.message});
    }
  }

  async getById(req, res) {
		try {
			const car = await AutomobileRepo.getById(req.params.id);

			if (!car) {
				return res.status(404).json({ error: "Estudante não encontrado" });
			}
			res.json(car);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	}

  async update(req, res) {
		try {
			const [affectedRows, car] = await AutomobileRepo.update(
				req.params.id,
				req.body
			);

			if (!affectedRows || affectedRows == 0) {
				return res.status(500).json({
					error: `Não foi possível atualizar o carro: ${req.params.id}`,
				});
			}

			if (!car) {
				return res.status(404).json({ error: "Carro não cadastrado" });
			}

			res.json(car);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	}

  async delete(req, res) {
		try {
			const destroyedRows = await AutomobileRepo.delete(req.params.id);

			if (destroyedRows === 0) {
				return res.status(500).json({
					error: `Não foi possível excluir o automovel: ${req.params.id}`,
				});
			}

			res.json({ message: "Automovel excluído com sucesso" });
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	}

}
export default new AutomobileController();


 
