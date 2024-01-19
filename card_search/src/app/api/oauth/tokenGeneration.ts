import * as dotenv from "dotenv";
dotenv.config({ path: "../../.env.local" });

// export async function POST() {
//   const res = await fetch('https://data.mongodb-api.com/...', {
//     next: { revalidate: 60 }, // Revalidate every 60 seconds
//   })
//   const data = await res.json()

//   return Response.json(data)
// }

export async function tokenGeneration() {
  const userName = process.env.client_id;
  const password = process.env.client_secret;

  try {
    const tokenResponse: any = await fetch("https://oauth.battle.net/token", {
      method: "POST",
      headers: {
        Authorization: "Basic " + btoa(`${userName}:${password}`),
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
      }),
    });

    const tokenData = await tokenResponse.json();
    return tokenData.access_token;
  } catch (error) {
    console.log(error);
  }
}
