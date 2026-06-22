const AutorRepository = require('../models/autorRepository')

const AutorApiController = {
  all : async (request, response, next) => {
    try {
      const autores = await AutorRepository.getAll();
      response.status(200).json(autores)
    } catch (error) {
      next(error)
    }
  },

  getById : async (request, response, next) => {
    try {
      const id = parseInt(request.params.id)
      const autor = await AutorRepository.getById(id);
      console.log(autor)
      response.status(200).json(autor)
    } catch (error) {
      next(error)
    }
  },

  add : async (request, response, next) => {
    try {
      const dados = request.body
      const newAutor = AutorRepository.add(dados.nome, dados.nacionalidade)
      response.status(200).json(newAutor)
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AutorApiController;