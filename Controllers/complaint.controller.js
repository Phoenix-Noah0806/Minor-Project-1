let complaints = [
  {
    id: 1,
    title: "Water Leakage",
    description: "Water is leaking from the ceiling in room 203",
    status: "open",
  },
  {
    id: 2,
    title: "Electricity Issue",
    description: "No power supply in the computer lab",
    status: "open",
  },
  {
    id: 3,
    title: "Broken Chair",
    description: "Chair is broken in classroom B12",
    status: "resolved",
  },
  {
    id: 4,
    title: "Internet Not Working",
    description: "Wi-Fi is not working in the library",
    status: "open",
  },
  {
    id: 5,
    title: "Air Conditioner Problem",
    description: "AC is not cooling in seminar hall",
    status: "resolved",
  },
];

export function getComplaints(req, res) {
  res.json(complaints);
}

export function newComplaints(req, res) {
  const newComplaint = {
    id: complaints.length + 1,
    title: req.body.title,
    description: req.body.description,
    status: "open",
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
