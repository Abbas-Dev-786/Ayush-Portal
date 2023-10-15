const Message = require("../models/messageModel");

async function getMostRecentMessages (){
    return await Message
      .find()
      .sort({_id:-1})
      .limit(10);
  }


module.exports={getMostRecentMessages}