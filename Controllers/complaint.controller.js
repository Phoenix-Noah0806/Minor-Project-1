let complaints = [];

export function getComplaints(req, res) {
  res.json(complaints);
}
export function getComplaintbyId(req,res){
  const id=Number(req.params.id);
  const complaint=complaints.find((i)=>i.id===id);
  if(!complaint){
    return res.status(404).send("Complaint not Found!!!!");
  }
  res.json(complaint)
}

export function newComplaints(req, res) {
  const newComplaint = {
    id: complaints.length + 1,
    name:req.body.name,
    email:req.body.email,
    title: req.body.title,
    description: req.body.description,
    status: "open",
    submittedAt:new Date().toLocaleString()
  };
  complaints.push(newComplaint);
  res.json({ message: "Complaint Registered", complaint: newComplaint });
}

export function updateComplaint(req, res) {
  const id = Number(req.params.id);
  const index = complaints.findIndex((i) => i.id === id);
  if (index === -1) {
    return res.status(404).send("Complaint not Found!!!!");
  }
  complaints[index].status = "resolved";
  res.json(complaints);
}

export function deleteComplaint(req, res) {
  const id = Number(req.params.id);

  const filter = complaints.filter((i) => i.id !== id);
  complaints = filter;
  res.json({ message: "Complaint Deleted", complaints: filter });
}
