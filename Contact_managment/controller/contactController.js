const asyncHandler=require('express-async-handler')
const Contact =require('../models/contactModel')
//@desc get all contact
//@route get api/contact 
//@acess Public

const getAllContact = asyncHandler( async (req, res) => {
  const contact = await Contact.find()
  res.json(contact);
  // console.log("Get all contact")
});


//@desc get specificContact contact
//@route get api/contact 
//@acess Public

const getSpecificContact= asyncHandler(async (req, res) => {
  res.json({ message: `Get conatact ${req.params.id}` });
const temp = Upcoming.find({})
if(temp){

}
  // console.log("Get all contact")
});

//@desc  Create contact
//@route post api/contact 
//@acess Public

const createContact = asyncHandler(async(req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All field are mandotary");
  }
  res.json({ message: `Create conatact ` });
  console.log(`This is body data ${req.body}`);
});

//@desc  Update contact
//@route put api/contact 
//@acess Public

const updateContact = asyncHandler(async (req, res) => {
  res.json({ message: `update  conatact for ${req.params.id}` });
});

//@desc delete  contact
//@route delete api/contact 
//@acess Public

const deleteContact =asyncHandler( async (req, res) => {
  res.status(201).json({ message: `delete contact for ${req.params.id}` });
  // console.log("Get all contact")
});


module.exports={
    getAllContact,
    getSpecificContact,
    createContact,
    updateContact,
    deleteContact
}