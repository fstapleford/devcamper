const asyncHandler = require("express-async-handler");
const Bootcamp = require("../models/Bootcamp");

// @desc   get single bootcamp
// @route  GET /api/v1/bootcamps/:id
// @access PUBLIC
const getBootcamp = async (req, res) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id)

        if(!bootcamp) {
            return res.status(400).json({ success: false })
        }

        res.status(200).json({
          success: true,
          data: bootcamp
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error
          })
    }

}

// @desc   get all bootcamps
// @route  GET /api/v1/bootcamps
// @access PUBLIC
const getBootcamps = async (req, res) => {
    try {
        const bootcamps = await Bootcamp.find()
        res.status(200).json({
            success: true,
            count: bootcamps.length,
            data: bootcamps,
          })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error,
          })
    }

}
 
// @desc   create bootcamp
// @route  POST /api/v1/bootcamps/:id
// @access PRIVATE
const createBootcamp = async (req, res) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    const bootcamp = Bootcamp.create(req.body);
    res.status(400).json({
      success: false,
      message: error,
    });
  }
}

// @desc   Update bootcamp
// @route  PUT /api/v1/bootcamps:id
// @access PRIVATE
const updateBootcamp = async (req, res) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, 
            {new: true, runValidators: true})

        if(!bootcamp) {
            return res.status(400).json({ success: false })
        }

        res.status(200).json({
          success: true,
          data: bootcamp
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error
          })
    }
}

// @desc   Delete bootcamp
// @route  DELETE /api/v1/bootcamps/:id
// @access PRIVATE
const deleteBootcamp = async (req, res) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id)

        if(!bootcamp) {
            return res.status(400).json({ success: false })
        }

        res.status(200).json({
          success: true,
          data: {}
        }) 
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error
          })
    }
}
 
module.exports = {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
};
