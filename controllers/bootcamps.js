//import asyncHandler from 'express-async-handler'

// @desc   get single bootcamp
// @route  GET /api/v1/bootcamps/:id
// @access PUBLIC
// const getBootcamp = asyncHandler(async(req, res) => {
const getBootcamp = (req, res) => {
    res.status(200).send({ success: true, message: 'Display bootcamp' })
}

// @desc   get all bootcamps
// @route  GET /api/v1/bootcamps
// @access PUBLIC
//const getBootcamps = asyncHandler(async(req, res) => {
const getBootcamps = (req, res) => {
    res.status(200).send({ success: true, message: 'Show all bootcamps' })
}

// @desc   create bootcamp
// @route  POST /api/v1/bootcamps/:id
// @access PRIVATE
// const createBootcamp = asyncHandler(async(req, res) => {
const createBootcamp = (req, res) => {
    res.status(200).send({ success: true, message: 'Create bootcamp' })
}

// @desc   Update bootcamp
// @route  PUT /api/v1/bootcamps:id
// @access PRIVATE
// const updateBootcamp = asyncHandler(async(req, res) => {
const updateBootcamp = (req, res) => {
    res.status(200).send({ success: true, message: `Update bootcamp ${req.params.id}` })
}

// @desc   Delete bootcamp
// @route  DELETE /api/v1/bootcamps/:id
// @access PRIVATE
// const deleteBootcamp = asyncHandler(async(req, res) => {
const deleteBootcamp = (req, res) => {
    res.status(200).send({ success: true, message: `Delete bootcamp ${req.params.id}` })
}

module.exports = {
    getBootcamps,
    getBootcamp,
    createBootcamp,
    updateBootcamp,
    deleteBootcamp
}
