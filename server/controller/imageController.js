import File from "../models/file.js"
import path from "path";




// just upload the image
export const uploadImage = async (req,response)=>{
    console.log(req);

    const fileObj = {
        path:req.file.path,
        name:req.file.originalname
    }


    try{
        // model = File give download content
       const file = await File.create(fileObj);

       console.log(file);
       response.status(200).json({ path: `http://localhost:8000/file/${file._id}`});

    }

    catch(error){
        console.log(error.messager);
        response.status(500).json({ error: error.message });
    }
}





// DOWNLOAD
export const getImage = async (request, response) => {
    try {   
        // find through file id
        //  after / variable append hota hai use params kehte hai in url
        const file = await File.findById(request.params.fileId);
        
        file.downloadCount++;

        await file.save();

        response.download(file.path, file.name);
    } 
    
    catch (error) {
        
        console.error(error.message);
        response.status(500).json({ msg: error.message });
    }
}


