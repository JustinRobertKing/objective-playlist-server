require('dotenv').config()
const express = require('express');
const router = express.Router();
const db = require('../models')

router.post('/', (req, res) => {
	console.log('in POST route... THIS IS FUCKING STUPID')
	let input = req.body.map((t, i) => {
		return {trackId: t[0], imageURL: t[1], artist: t[2], title: t[3], URI: t[4], analytics: t[5]}
	})
	console.log('INPUUUUUUUT', input)
	db.Track.insertMany(input)
	.then(newDocs => {
		res.send(newDocs)
	})
	.catch((error) => {
		console.log('error', error)
	})
})

router.get('/', (req, res) => {
	db.Track.find()
	.then(response => {
		console.log('Alllllllll: ', response)
		res.send(response)
	})
	.catch((error) => {
		console.log('error', error)
	})
})

router.post('/find', (req, res) => {
	db.Track.find({
		artist: req.body.artist,
		title: req.body.title
	})
	.then(response => {
		res.send(response)
	})
	.catch((error) => {
		console.log('error', error)
	})
})
module.exports = router