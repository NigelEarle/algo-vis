const express = require('express');

const router = express.Router(); // eslint-disable-line

const bubbleSort = require('../controllers/bubbleSort');
const insertionSort = require('../controllers/insertionSort');
const mergeSort = require('../controllers/mergeSort');
const quickSort = require('../controllers/quickSort');
const selectionSort = require('../controllers/selectionSort');

const data = [12, 34, 82, 98, 76, 53, 1, 49, 22, 61, 5];

router.get('/', (req, res) => res.json({ data }));
router.get('/bubble-sort', bubbleSort);
router.get('/insertion-sort', insertionSort);
router.get('/mergesort-sort', mergeSort);
router.get('/quick-sort', quickSort);
router.get('/selection-sort', selectionSort);

module.exports = router;
