// const { Router } = require("express");
const express = require("express");
const router=express.Router()
const app = express();

const {
    getAllContact,
    getSpecificContact,
    createContact,
    updateContact,
    deleteContact
} =require('../controller/contactController.js')

router.route("/contact").get(getAllContact).post(createContact);;
router.route("/contact/:id").get(getSpecificContact).put(updateContact).delete(deleteContact);;



module.exports=router