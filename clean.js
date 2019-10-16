const fs = require('fs'); 
const csv = require('csv-parser');

const test = [];
fs.createReadStream('./jobs_adv.csv')
  .pipe(csv())
  .on('data', function(data){
      try {
        // console.log(typeof(data))
        test.push(data);
      }
      catch(err) {
          //error handler
      }
  })
  .on('end',function(){
      //some final operation
      test.map(job => {
        job.experience = job.experience.replace(/[A-Za-z$-]/g, "").split('  ');
        job.industry = job.industry.split(' /')
        job.joblocation_address = job.joblocation_address.split(', ')
        job.skills = job.skills.split(' - ')
      })
      writeFile('output_clean.json', test)
  });  

const writeFile = (pad, obj) => {
  fs.writeFile(pad, JSON.stringify(obj), function(err) {
    if(err) {
        return console.log(err)
    }
    // console.log("SUCCESS: " + obj)
  }); 
}