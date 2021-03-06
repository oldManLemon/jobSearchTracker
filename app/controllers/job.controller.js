const Job = require('../models/job.model.js');
const strDate = require('../components/helperFunctions.js')
var date = strDate.stringyDate(); //if date is required



// Create and Save a new Job
exports.create = (req, res) => {
    // Validate request
    if (!req.body.position) {
        return res.status(400).send({
            message: "Can't not have a position"
        });
    } else if (!req.body.company) {
        return res.status(400).send({
            message: "Must have company!"
        })
    }

    // Create a Job entry
    const job = new Job({

        position: req.body.position,
        company: req.body.company,
        contact: req.body.contact || "Unknown",
        contactEmail: req.body.contactEmail || "Unkown",
        dateContacted: req.body.dateContacted || date
    });


    //Save Job!
    job.save()
        .then(data => {
            res.send(data);
            console.log('Success!!', data);
        })
        .catch(err => {
            res.status(500).send({  //500 is server error
                message: err.message || "Oh god didn't work and no error message!!!!"
            })
        })

};

// Get all from the db
exports.findAll = (req, res) => {
    Job.find()
        .then(jobs => {
            res.send(jobs);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Oh god didn't work and no error message!!!!"
            });
        });
}; //Can now test in post man

// Get a single job
exports.findOne = (req, res) => {
    Job.findById(req.params.jobId)
        .then(job => {
            if (!job) {
                return res.status(404).send({
                    message: "Job not found with id " + req.params.jobId
                });
            }
            res.send(job);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Job not found with id " + req.params.jobId
                });
            }
            return res.status(500).send({
                message: "Error retrieving job with id " + req.params.jobId
            });
        });

}; //Postman test past


// Update a single job
exports.update = (req, res) => {
    //TODO
    //Same statment as new
    if (!req.body.position) {
        return res.status(400).send({
            message: "Can't not have a position"
        });
    } else if (!req.body.company) {
        return res.status(400).send({
            message: "Must have company!"
        })
    }
    Job.findByIdAndUpdate(req.params.jobId,
        { //added from new 
            position: req.body.position,
            company: req.body.company,
            contact: req.body.contact || "Unknown",
            contactEmail: req.body.contactEmail || "Unkown",
            dateContacted: String || date

        }, { new: true })

        .then(job => {
            if (!job) {
                return res.status(404).send({
                    message: "Job not found with id " + req.params.jobId
                });

            }//end of if
            res.send(job);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Job not found with id " + req.params.jobId
                });
            }
            return res.status(500).send({
                message: "Error updating job with id " + req.params.jobId
            });
        });



};

// Delete a single job
exports.delete = (req, res) => {
    Job.findByIdAndRemove(req.params.jobId)
        .then(job => {
            if (!job) {
                return res.status(404).send({
                    message: "Job not found with id " + req.params.jobId
                });

            }//end of if
            res.send(
                { message: "Job successfully deleted" }
            );
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Job not found with id " + req.params.jobId
                });
            }
            return res.status(500).send({
                message: "Error deleting job with id " + req.params.jobId
            });
        })
};
