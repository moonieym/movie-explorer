// test.js

async function testBackend() {
  // Ruta pública
  let res = await fetch("http://localhost:5000/test");
  console.log("Ruta /test:", await res.json());

  // Login para obtener token
  res = await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: "Maria" }),
  });
  const data = await res.json();
  console.log("Login:", data);

  const token = data.token;

  // Ruta protegida con token
  res = await fetch("http://localhost:5000/profile", {
    headers: { Authorization: token },
  });
  console.log("Ruta /profile:", await res.json());
}

testBackend();
