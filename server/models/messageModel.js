const mongoose = require("mongoose");



const messageSchema = new mongoose.Schema({
    
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
      },
      message: {
        type: String,
        required: [true,"Message cannot be null"]
      },
      type:{
        type: String,
      
      }
    },
    {
      //when a new version of row is added to database
      //automatically add timestamp to that row
      //we save created time, but don't need for the scope of this project
      //an update time
      timestamps: {
        createdAt: true,
        updatedAt: false
      }
    })




const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
