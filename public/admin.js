const buttons = document.querySelectorAll(".filter-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => {
      b.style.backgroundColor = "rgb(216, 204, 204)";
      b.style.color = "black";
    });
    btn.style.backgroundColor = btn.dataset.color;
    btn.style.color = "white";
  });
});

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
    if (c.status === "open") {
      pending++;
    } else if (c.status === "resolved") {
      resolved++;
    } else if (c.status === "rejected") {
      rejected++;
    }

    const div = document.createElement("div");
    div.className = "details";

    div.innerHTML = `
      <div class="top">
        <h5>ID: ${c.id}</h5>
        <button class="status">${c.status}</button>
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
    `;

    container.appendChild(div);
  });

  document.querySelector("#card1 p").innerText = total;
  document.querySelector("#card2 p").innerText = pending;
  document.querySelector("#card3 p").innerText = resolved;
  document.querySelector("#card4 p").innerText = rejected;
}

loadComplaints();
