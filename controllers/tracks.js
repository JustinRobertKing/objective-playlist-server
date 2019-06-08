require('dotenv').config()
const express = require('express');
const router = express.Router();
const db = require('../models')

router.post('/', (req, res) => {
	console.log('in POST route... THIS IS FUCKING STUPID')
	let input = req.body.map((t, i) => {
		return {artist: t[0], title: t[1], analytics: t[2]}
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

module.exports = router