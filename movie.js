
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const command = ffmpeg();

//==========================
//         setting
//==========================
//folder
const inFolder = "./videoIn";
const outFolder = "./videoOut";
//config
const videoBitrateVal = 384;//int
const audioBitrateVal = '128k';//str


//get files from designated folder
fs.readdirSync(inFolder).forEach(file => {
  console.log(file + 'is ready to convert!');
  convertFile(file);
})


//get the video file ,convert the video file, 
//and save converted file to designated folder
function convertFile(filename){
  var proc = ffmpeg(inFolder + "\\" + filename)
  //set ffmpeg.exe path
  .setFfmpegPath("C:\\ffmpeg\\bin\\ffmpeg.exe")
  // set video bitrate
  .videoBitrate(384)
  .audioBitrate('128k')

  .on('end', function() {
    console.log(filename + ' has been converted succesfully!');
  })
  .on('error', function(err) {
    console.log('an error happened: ' + err.message);
  })
  // save to file
  .save(outFolder + "\\" + filename);
}