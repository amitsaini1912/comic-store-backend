
const express = require('express');
const router = express.Router();
const comicController = require('../controllers/comicController');

// CRUD routes
router.post('/comics', comicController.createComic);
router.get('/comics', comicController.getComics);
router.get('/comics/:id', comicController.getComicById);
router.put('/comics/:id', comicController.updateComic);
router.delete('/comics/:id', comicController.deleteComic);

module.exports = router;
