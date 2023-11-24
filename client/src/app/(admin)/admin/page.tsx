import NavbarAdmin from "./navbar.admin";

async function getRoles() {
  const res = (await fetch("http://localhost:3001/roles")).json();
  return res;
}

export default async function Admin() {
  return (
    <main>
      <NavbarAdmin />
      <section>
        <h1>ADMIN PANEL</h1>
      </section>
    </main>
  );
}
