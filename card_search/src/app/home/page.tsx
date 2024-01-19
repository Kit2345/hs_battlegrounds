import { tokenGeneration } from "../oauth/tokenGeneration";

export default async function Page() {
  const res = await tokenGeneration();
  console.log("Debug");
  console.log(res);

  return (
    <section className="main-content-container">
      <div>Home works</div>
    </section>
  );
}
