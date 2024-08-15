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

    is_complete:{
        type:Boolean,
        default:false

    },
    start_date: {
        type: String,
        required: true,
     
    },
    end_date: {
        type: String,
        required: true,
      
    },
   
}, { timestamps: true });

const Task = mongoose.model("Tasks", TaskSchema);

export default Task;
