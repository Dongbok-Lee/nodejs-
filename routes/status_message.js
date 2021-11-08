import express from 'express'
import { Router } from 'express'
import * as status_message_service from '../service/status_message_service.js'

router.get("/status", async (req, res, next) => {
    const ID = req.body.id;
    const message_Info = await status_message_service.get_Status_Message(ID)
    res.json(message_Info);
  });

  router.post("/status",async(req, res, next) =>{
    const {user_id, message, update_time} = req.body
    status_message_service.create_Status_Message({
        user_id,
        message,
        update_time
    });
  })

  router.put("/status",async(req,res,next) => {
      const {user_id, message, update_time} = req.body
      status_message_service.update_Status_Message({
          user_id,
          message,
          update_time
      });
  })

  router.delete("/status",async(req,res,next)=>{
      const ID = req.body.id;
      status_message_service.delete_Status_Message(ID)
  })