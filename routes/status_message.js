import express from 'express'
import * as status_message_service from '../service/status_message_service.js'

const router = express.Router();

router.get("/", async (req, res, next) => {
    const ID = req.body.id;
    const message_Info = await status_message_service.get_Status_Message(ID)
    res.json(message_Info);
  });

router.post("/",async(req, res, next) =>{
    try {
        const {user_id, message, update_time} = req.body
        status_message_service.create_Status_Message({
            user_id,
            message,
            update_time
        });
    } catch (e) {
        console.error(e)
        res.json(e)
    }
    res.json(req.body);
  })

  
router.put("/",async(req,res,next) => {
      const {user_id, message, update_time} = req.body
      status_message_service.update_Status_Message({
          user_id,
          message,
          update_time
      });
  })

router.delete("/",async(req,res,next)=>{
      const ID = req.body.id;
      status_message_service.delete_Status_Message(ID)
  })

  export default router;