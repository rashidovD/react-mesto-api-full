const express = require('express');
const { validateCard, validateID } = require('../middlewares/validator');
const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');

const cardsRouter = express.Router();

cardsRouter.get('/', getCards);
cardsRouter.post('/', validateCard, createCard);
cardsRouter.delete('/:_id', validateID, deleteCard);
cardsRouter.put('/:_id/likes', validateID, likeCard);
cardsRouter.delete('/:_id/likes', validateID, dislikeCard);

module.exports = cardsRouter;
