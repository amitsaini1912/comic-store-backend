
const Comic = require('../models/Comic');

// Create a new comic
exports.createComic = async (req, res) => {
  try {
    const comic = new Comic(req.body);
    await comic.save();
    res.status(201).json(comic);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all comics with pagination, filtering, and sorting
exports.getComics = async (req, res) => {
  const { page = 1, limit = 10, sort = 'name', ...filters } = req.query;
  try {
    const comics = await Comic.find(filters)
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
    res.json(comics);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a comic by ID
exports.getComicById = async (req, res) => {
  try {
    const comic = await Comic.findById(req.params.id);
    if (!comic) return res.status(404).json({ error: 'Comic not found' });
    res.json(comic);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a comic by ID
exports.updateComic = async (req, res) => {
  try {
    const comic = await Comic.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!comic) return res.status(404).json({ error: 'Comic not found' });
    res.json(comic);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a comic by ID
exports.deleteComic = async (req, res) => {
  try {
    const comic = await Comic.findByIdAndDelete(req.params.id);
    if (!comic) return res.status(404).json({ error: 'Comic not found' });
    res.json({ message: 'Comic deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
