import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    
    stafffid: {
        type: String,
        required: true,
        unique: true,
 
       
      
        
    },
    task_name: {
        type: String,
        required: true,
     
    },
    task_description: {
        type: String,
        required: true,
      
    },

    start_date: {
        type: String,
        required: true,
     
    },
    end_date: {
        type: String,
        required: true,
      
    },
    
    is_complete:{
        type:Boolean,
        default:false

    },
   
}, { timestamps: true });

const Task = mongoose.model("Ta", TaskSchema);

export default Task;
