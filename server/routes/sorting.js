const express = require('express');

const router = express.Router(); // eslint-disable-line

const bubbleSort = require('../controllers/bubbleSort');
const insertionSort = require('../controllers/insertionSort');
const mergeSort = require('../controllers/mergeSort');
const quickSort = require('../controllers/quickSort');
const selectionSort = require('../controllers/selectionSort');

router.get('/bubble', bubbleSort);
router.get('/insertion', insertionSort);
router.get('/mergeSort', mergeSort);
router.get('/quickSort', quickSort);
router.get('/selectionSort', selectionSort);
