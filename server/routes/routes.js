import express from 'express';
import upload from '../utils/upload.js';
import { uploadImage ,getImage} from '../controller/imageController.js';

const router = express.Router();




// uploadImage = fun which is in imagecontroller
// upload = middleware to upload the real file
router.post('/upload', upload.single('file'), uploadImage);

// download image 
// getImage = fun which is in imageController
router.get('/file/:fileId', getImage);

export default router;