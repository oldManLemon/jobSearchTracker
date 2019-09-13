

module.exports = (app) => {
    const jobs = require('../controllers/job.controller.js'); 

    //Create new Job
    app.post('/jobs', jobs.create);
        //TODO
  
    //Retreave all Jobs
    app.get('/jobs', jobs.findAll);
  //Retreive 1 Job
    //app.get('/jobs/:jobId', jobs.fineOne);
    //Update selected job
    //app.put('jobs/:JobId', jobs.update);

    //Delete Select Job
//app.delete('jobs/:JobId', jobs.delete);

  

}