const API_URL = "http://localhost:5000/users";

function addUser() {
  const name = document.getElementById("name").value;

  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name })
  })
  .then(() => {
    document.getElementById("name").value = "";
    loadUsers();
  });
}

function loadUsers() {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("userList");
      list.innerHTML = "";
      data.forEach(user => {
        const li = document.createElement("li");
        li.textContent = user.name;
        list.appendChild(li);
      });
    });
}

loadUsers();
