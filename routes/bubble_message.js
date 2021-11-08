import express from 'express'
import { Router } from 'express'
import * as bubble_service from '../service/bubble_message_service'

router.get("/bubble", async (req, res, next) => {
    const ID = req.body.id;
    const message_Info = await bubble_service.get_Bubble_Message(ID)
    res.json(message_Info);
  });

  router.post("/bubble",async(req, res, next) =>{
    const {user_id, message, update_time} = req.body
    bubble_service.create_Bubble_Message({
        user_id,
        message,
        update_time
    });
  })

  router.put("/bubble",async(req,res,next) => {
      const {user_id, message, update_time} = req.body
      bubble_service.update_Bubble_Message({
          user_id,
          message,
          update_time
      });
  })

  router.delete("/bubble",async(req,res,next)=>{
      const ID = req.body.id;
      bubble_service.delete_Bubble_Message(ID)
  })