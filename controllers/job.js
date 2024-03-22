const { jobModel } = require("../models/job");

const createJob = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const newJob = new jobModel(data);
    const newlyInsertedJob = await newJob.save();
    console.log(newlyInsertedJob);

    res.json({
      success: true,
      message: "Job created successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      success: false,
      message: "something went wrong",
    });
  }
};

const getJob = async (req, res) => {
  try {
    const data = await jobModel.find();
    res.json({
      success: true,
      results: data,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "something went wrong",
    });
  }
};

const editJob = async (req, res) => {
  const body = req.body;
  try {
    const updatedJob = await jobModel.updateOne(
      { _id: body._id },
      { $set: body }
    );

    res.json({
      success: true,
      message: "job update successfully",
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "something went wrong",
    });
  }
};

const deleteJob = async (req, res) => {
  const body = req.body;
  try {
    const updatedJob = await jobModel.findByIdAndDelete(body._id);

    res.json({
      success: true,
      message: "job deleted successfully",
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "something went wrong",
    });
  }
};

module.exports = {
  createJob,
  getJob,
  editJob,
  deleteJob,
};