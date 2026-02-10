const buttons = document.querySelectorAll(".filter-btn");
let currentFilter = "ALL";
let searchText = "";
document.getElementById("searchInput").addEventListener("input", (e) => {
  searchText = e.target.value.toLowerCase();
  loadComplaints();
});

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => {
      b.style.backgroundColor = "rgb(216, 204, 204)";
      b.style.color = "black";
    });
    btn.style.backgroundColor = btn.dataset.color;
    btn.style.color = "white";

    currentFilter = btn.innerText.toUpperCase();
    loadComplaints();
  });
});
async function changeStatus(id, status) {
  await fetch(`/complaints/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status }),
  });

  loadComplaints();
}
async function loadComplaints() {
  const res = await fetch("/complaints");
  const complaints = await res.json();

  const container = document.getElementById("complaintsContainer");
  container.innerHTML = "";

  let total = complaints.length;
  let pending = 0;
  let resolved = 0;
  let rejected = 0;

  complaints.forEach((c) => {
    if (c.status === "PENDING") {
      pending++;
    } else if (c.status === "RESOLVED") {
      resolved++;
    } else if (c.status === "REJECTED") {
      rejected++;
    }
  });

  let filtered = complaints;

  if (currentFilter === "PENDING")
    filtered = complaints.filter((c) => c.status === "PENDING");
  else if (currentFilter === "RESOLVED")
    filtered = complaints.filter((c) => c.status === "RESOLVED");
  else if (currentFilter === "REJECTED")
    filtered = complaints.filter((c) => c.status === "REJECTED");

  filtered = filtered.filter(
    (c) =>
      c.name.toLowerCase().includes(searchText) ||
      c.title.toLowerCase().includes(searchText) ||
      String(c.id).includes(searchText),
  );

  filtered.forEach((c) => {
    const div = document.createElement("div");
    div.className = "details";

    div.innerHTML = `
      <div class="top">
        <h5>ID: ${c.id}</h5>
        <button class="status" style="background-color:${
          c.status === "RESOLVED"
            ? "lightgreen"
            : c.status === "REJECTED"
              ? "#FFA07A"
              : "rgb(245,176,47)"
        }">${c.status}</button>
      </div>

      <div class="middle">
        <h4>${c.title}</h4>
      </div>

      <div class="lower">
        <img width="25" height="25"
          src="https://img.icons8.com/color/48/cartoon-boy.png"/>
        <h5>${c.name}</h5>

        <img width="25" height="25"
          src="https://img.icons8.com/color/48/new-post.png"/>
        <h5>${c.email}</h5>
      </div>

      <div class="lowermost">
        <p>${c.description}</p>
        <p>Submitted: ${c.submittedAt || "-"}</p>
      </div>

      <div class="status-btns">
        <button  id="pending" onclick="changeStatus(${c.id},'PENDING')" 
          ${c.status === "PENDING" ? "disabled" : ""}>Set Pending</button>

        <button id="resolve" onclick="changeStatus(${c.id},'RESOLVED')" 
          ${c.status === "RESOLVED" ? "disabled" : ""}>Set Resolved</button>

        <button id="reject" onclick="changeStatus(${c.id},'REJECTED')" 
          ${c.status === "REJECTED" ? "disabled" : ""}>Set Rejected</button>
      </div>
    `;

    container.appendChild(div);
  });

  document.querySelector("#card1 p").innerText = total;
  document.querySelector("#card2 p").innerText = pending;
  document.querySelector("#card3 p").innerText = resolved;
  document.querySelector("#card4 p").innerText = rejected;
}

loadComplaints();
