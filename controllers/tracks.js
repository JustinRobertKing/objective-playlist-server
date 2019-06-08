require('dotenv').config()
const express = require('express');
const router = express.Router();
const db = require('../models')

router.post('/', (req, res) => {
	console.log('in POST route... THIS IS FUCKING STUPID')
	let input = req.body.map((t, i) => {
		return {artist: t[0], title: t[1]}
	})
	console.log('INPUUUUUUUT', input)
	// db.Track.insertMany()	
	res.send(req.body)
})

module.exports = router