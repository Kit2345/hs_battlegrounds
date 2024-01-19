import { tokenGeneration } from "../api/oauth/tokenGeneration";

export default async function Page() {
  //works:
  // const res = await tokenGeneration();

  //Doesnt work
  const res = await fetch("api/oauth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });

  console.log(res);

  return (
    <section className="main-content-container">
      <div>Home works</div>
    </section>
  );
}
