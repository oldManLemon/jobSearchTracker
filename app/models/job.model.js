const mongoose = require('mongoose');


const JobSchema = mongoose.Schema({

    position: {type: String, default:''},
    company:{type : String, default:''},
    contact: {type:String, default:''},
    contactEmail: {type:String, default:''},
    dateContacted: String 
},{
    timestamps: true //I guess this is nice too!
})

module.exports = mongoose.model('Job', JobSchema);


