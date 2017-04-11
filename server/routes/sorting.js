const express = require('express');

const router = express.Router(); // eslint-disable-line

const bubbleSort = require('../controllers/bubbleSort');
const insertionSort = require('../controllers/insertionSort');
const mergeSort = require('../controllers/mergeSort');
const quickSort = require('../controllers/quickSort');
const selectionSort = require('../controllers/selectionSort');

router.get('/bubble-sort', bubbleSort);
router.get('/insertion-sort', insertionSort);
router.get('/mergesort-sort', mergeSort);
router.get('/quick-sort', quickSort);
router.get('/selection-sort', selectionSort);

module.exports = router;
