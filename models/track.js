let mongoose = require('mongoose')

let analyticsSchema = new mongoose.Schema({
	key: mongoose.Decimal128,
	key_confidence: mongoose.Decimal128,
	loudness: mongoose.Decimal128,
	mode: mongoose.Decimal128,
	mode_confidence: mongoose.Decimal128,
	offset_seconds: mongoose.Decimal128,
	rhythm_version: mongoose.Decimal128,
	tempo: mongoose.Decimal128,
	tempo_confidence: mongoose.Decimal128,
	time_signature: mongoose.Decimal128,
	time_signature_confidence: mongoose.Decimal128
})

let trackSchema = new mongoose.Schema({
	artist: String,
	title: String,
	analytics: analyticsSchema
})

module.exports = mongoose.model('Track', trackSchema)