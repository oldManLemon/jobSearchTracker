const Job = require('../models/job.model.js');
const date = new Date();
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
        dateContacted: String || date
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
//TODO
};

// Update a single job
exports.update = (req, res) => {
//TODO
};

// Delete a single job
exports.delete = (req, res) => {
//TODO
};
