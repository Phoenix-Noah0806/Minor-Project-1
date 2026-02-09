const submit=document.getElementById("submitBtn");
submit.addEventListener("click",submitComplaint);
async function submitComplaint(){
  const name=document.getElementById("fullname").value;
  const email=document.getElementById("email").value;
  const title =document.getElementById("title").value;
  const description=document.getElementById("description").value;

  await fetch("/complaints",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({name,email,title,description})
  })
  alert("Complaint Submitted Successfully!!!");
  document.getElementById("fullname").value="";
  document.getElementById("email").value="";
  document.getElementById("title").value="";
  document.getElementById("description").value="";
}

