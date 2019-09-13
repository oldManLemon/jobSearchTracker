const mongoose = require('mongoose');


const JobSchema = mongoose.Schema({

    position: String,
    company: String,
    contact: String,
    contactEmail: String,
    contacted: String
},{
    timestamps: true //I guess this is nice too!
})

module.exports = mongoose.model('Job', JobSchema)

// const NoteSchema = mongoose.Schema({
//     title: String,
//     content: String
// }, {
//     timestamps: true
// });

// module.exports = mongoose.model('Note', NoteSchema);
