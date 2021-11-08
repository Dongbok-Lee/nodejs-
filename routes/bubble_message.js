import express from 'express'
import * as bubble_service from '../service/bubble_message_service.js'

const router = express.Router();

router.get("/", async (req, res, next) => {
    const ID = req.body.id;
    const message_Info = await bubble_service.get_Bubble_Message(ID)
    res.json(message_Info);
  });

router.post("/",async(req, res, next) =>{
    const {user_id, message, update_time} = req.body
    bubble_service.create_Bubble_Message({
        user_id,
        message,
        update_time
    });
  })

router.put("/",async(req,res,next) => {
      const {user_id, message, update_time} = req.body
      bubble_service.update_Bubble_Message({
          user_id,
          message,
          update_time
      });
  })

router.delete("/",async(req,res,next)=>{
      const ID = req.body.id;
      bubble_service.delete_Bubble_Message(ID)
  })

  export default router;