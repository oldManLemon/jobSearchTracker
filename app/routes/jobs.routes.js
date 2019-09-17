

module.exports = (app) => {
    const jobs = require('../controllers/job.controller.js'); 

    //Create new Job
    app.post('/jobs', jobs.create);
    //Retreave all Jobs
    app.get('/jobs', jobs.findAll);
  //Retreive 1 Job
    app.get('/jobs/:jobId', jobs.findOne);

    //Update selected job
    //app.put('jobs/:jobId', jobs.update);

    //Delete Select Job
//app.delete('jobs/:JobId', jobs.delete);

  

}