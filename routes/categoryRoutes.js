const express = require('express');
const router = express.Router();
const {
    getAllCategory,
    getSingleCategory,
    createCategory,
    updateCategory,
    deleteCategory,
  } = require('../controllers/category')


router.get('/', getAllCategory)
router.get('/:categoryID', getSingleCategory)
router.post('/', createCategory)
router.patch('/:categoryID', updateCategory)
router.delete('/:categoryID', deleteCategory)


module.exports = router