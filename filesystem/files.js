const fs = require("fs");
const filepath = "demo.txt";
const fileName = "myfile.txt";

/** readFile accepts callback and encoding
 *
 * const readMyFile = (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
};

fs.readFile(filepath, "utf-8", readMyFile); 
 */


/**
 * The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. 
 * If the file does not exist, an empty file is created:
 * fs.open(fileName,'w',(err,file)=>{
    if(err) throw err;
    console.log('saved')
})
 */

/**
 * The fs.appendFile() method appends specified content to a file. 
 * If the file does not exist, the file will be created:
 * fs.appendFile(fileName, "Hello Node js", (err) => {
  if (err) throw err;
  console.log("saved");
   });
 */

/**
 * The fs.writeFile() method replaces the specified file and content if it exists. 
 * If the file does not exist, a new file, containing the specified content, will be created:
 * fs.writeFile('myfile2.txt','hello world',(err)=>{
    if (err) throw err;
    console.log("Saved!");
})

*/

/**
 * To delete a file with the File System module,  use the fs.unlink() method.
 * The fs.unlink() method deletes the specified file:
 * fs.unlink(fileName, function (err) {
  if (err) throw err;
  console.log("File deleted!");
});


 */




