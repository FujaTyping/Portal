import type { NextApiRequest, NextApiResponse } from "next";

const MALCID = process.env.NEXT_PUBLIC_MAL_CLIENT_ID;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch(
      "https://api.myanimelist.net/v2/users/FujaTyping/animelist?fields=list_status&limit=20&sort=list_updated_at",
      {
        headers: {
          "X-MAL-CLIENT-ID": `${MALCID}`,
        },
      }
    );

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ error: "Failed to fetch data" });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
