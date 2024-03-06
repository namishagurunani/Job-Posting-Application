const express =  require('express');
const { createJob, getJob, editJob, deleteJob } = require('../controllers/job');
const router = express.Router();


router.post('', createJob);

router.get('', getJob);

router.patch('', editJob);

router.delete('', deleteJob)

module.exports= router;