var models = require('../models');

exports.projectInfo = function(req, res) { 
  var projectID = req.params.id;

  // query for the specific project and
  // call the following callback
    models.Project
      .find({"_id": projectID })
      .exec(afterQuery);
    
  function afterQuery(err, projects) {
    if(err) console.log(err);
    console.log(projects[0]);
    res.json(projects[0]);
  
  }

}

exports.addProject = function(req, res) {
  var form_data = req.body;
  console.log(form_data);

  // make a new Project and save it to the DB
  // YOU MUST send an OK response w/ res.send();
  form_data.title = form_data.project_title;
  var new_project = new models.Project(form_data);
  new_project.save( function (err){
    if(err) console.log(err);
    res.send();
  })
}

exports.deleteProject = function(req, res) {
  var projectID = req.params.id;

  // find the project and remove it
  // YOU MUST send an OK response w/ res.send();
    models.Project
      .find({"_id": projectID })
      .remove()
      .exec(afterRemoving);
    
    function afterRemoving(err) {
      if(err) console.log("myerr" + err);
        console.log("no error")
        res.send();
    }
}

