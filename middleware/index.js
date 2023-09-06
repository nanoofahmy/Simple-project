const multer = require("multer");
const path = require('path');
const fs = require('fs');


// Define the storage and file filter for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const destinationDir = 'uploads/';
    
        // Create the destination directory if it doesn't exist
        if (!fs.existsSync(destinationDir)) {
          fs.mkdirSync(destinationDir, { recursive: true });
        }
        cb(null, destinationDir);
      },
    filename: (req, file, cb) => {
      const timestamp = new Date().toISOString().replace(/:/g,"-");;
      cb(null, timestamp + '-' + file.originalname);
    }
  });
  
  const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['.png', '.pdf'];
    const fileExtension = path.extname(file.originalname);
  
    if (allowedFileTypes.includes(fileExtension)) {
      cb(null, true); // Accept the file
     }
   else {
        cb(null, false); // Reject the file
      }
    // } else  {
    //     // Reject the file with an error
    //     const error = new Error('Only PNG images and PDF documents are allowed.');
    //     error.code = 'UNSUPPORTED_FILE_TYPE';
    //     return cb(error, false);
    //   }
  };
  
  const upload = multer({ storage, fileFilter });
  
module.exports = upload;

