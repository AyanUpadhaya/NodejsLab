## Basic File System

**1. Read File accepts callback and encoding**

~~~
const fs = require("fs");
const readMyFile = (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
};

fs.readFile(filepath, "utf-8", readMyFile); 
~~~


**2. Open files**

~~~
const fs = require("fs");
/** The fs.open() method takes a "flag" as the second argument, 
if the flag is "w" for "writing", the specified file is opened for writing. 
If the file does not exist, an empty file is created **/

fs.open(fileName,'w',(err,file)=>{
    if(err) throw err;
    console.log('saved')
})
~~~

**3. Write Files**

~~~
const fs = require("fs");
/** The fs.writeFile() method replaces the specified file and content if it exists, 
If the file does not exist, a new file, containing the specified content, will be created:
 **/

fs.writeFile('myfile2.txt','hello world',(err)=>{
    if (err) throw err;
    console.log("Saved!");
})
~~~
**4. Update or append files**

~~~
const fs = require("fs");
/** The fs.appendFile() method appends specified content to a file., 
If the file does not exist, the file will be created:
 **/

fs.appendFile(fileName, "Hello Node js", (err) => {
  if (err) throw err;
  console.log("saved");
});
~~~
**5. Delete files**

~~~
const fs = require("fs");
/** To delete a file with the File System module,  use the fs.unlink() method
 **/

fs.unlink(fileName, function (err) {
  if (err) throw err;
  console.log("File deleted!");
});

~~~