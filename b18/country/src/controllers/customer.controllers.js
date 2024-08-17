const Cust = require('../model/customer.model.js');

exports.findAll = (req, res) => {
Cust.find()
  .then(users => {
  res.send(users);
}).catch(err => {
  res.status(500).send({
  message: err.message || "Something went wrong while getting list of users."
});
});
};

exports.create = (req, res) => {

if(!req.body) {
  return res.status(400).send({
  message: "Please fill all required field"
});
}

const user = new TUser({
  tid:req.body.tid,
  tage:req.body.tage,
  tname:req.body.tname,
  taddress:req.body.taddress,
  tphone:req.body.tphone,
  temail:req.body.temail,
  tdob:req.body.tdob
});

user.save()
  .then(data => {
  res.send(data);
}).catch(err => {
  res.status(500).send({
  message: err.message || "Something went wrong while creating new user."
});
});
};

exports.findOne = (req, res) => {
 Cust.findById(req.params.id)
  .then(user => {
  if(!user) {
   return res.status(404).send({
   message: "User not found with id " + req.params.id
 });
}
 res.send(user);
}).catch(err => {
  if(err.kind === 'ObjectId') {
    return res.status(404).send({
    message: "User not found with id " + req.params.id
  });
}
return res.status(500).send({
  message: "Error getting user with id " + req.params.id
});
});
};

exports.update = (req, res) => {

if(!req.body) {
  return res.status(400).send({
  message: "Please fill all required field"
});
}

Cust.findByIdAndUpdate(req.params.id, {
  tid:req.body.tid,
  tage:req.body.tage,
  tname:req.body.tname,
  taddress:req.body.taddress,
  tphone:req.body.tphone,
  temail:req.body.temail,
  tdob:req.body.tdob
}, {new: true})
.then(user => {
 if(!user) {
   return res.status(404).send({
   message: "user not found with id " + req.params.id
 });
}
res.send(user);
}).catch(err => {
if(err.kind === 'ObjectId') {
  return res.status(404).send({
  message: "user not found with id " + req.params.id
});
}
return res.status(500).send({
  message: "Error updating user with id " + req.params.id
});
});
};

exports.delete = (req, res) => {
Cust.findById(req.params.id)
.then(user => {
if(!user) {
  return res.status(404).send({
  message: "user not found with id " + req.params.id
});
}
res.send({message: "user deleted successfully!"});
}).catch(err => {
if(err.kind === 'ObjectId' || err.name === 'NotFound') {
  return res.status(404).send({
  message: "user not found with id " + req.params.id
});
}
return res.status(500).send({
  message: "Could not delete user with id " + req.params.id
});
});
};
