const mongoose = require('mongoose');


const JobSchema = mongoose.Schema({

    position: {type = String, default:''},
    company:{type = String, default:''},
    contact: {type = String, default:''},
    contactEmail: {type = String, default:''},
    contacted: String //need to learn more about dates in mongo, auto apply date via js for now
},{
    timestamps: true //I guess this is nice too!
})

module.exports = mongoose.model('Job', JobSchema);

// const NoteSchema = mongoose.Schema({
//     title: String,
//     content: String
// }, {
//     timestamps: true
// });

// module.exports = mongoose.model('Note', NoteSchema);
