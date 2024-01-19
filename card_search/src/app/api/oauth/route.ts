import * as dotenv from "dotenv";
import { NextResponse } from "next/server";

dotenv.config({ path: "../../.env.local" });

export async function POST(request: Request) {
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
    console.log(tokenData);
    return tokenData.access_token;
  } catch (error) {
    console.log(error);
  }
}
