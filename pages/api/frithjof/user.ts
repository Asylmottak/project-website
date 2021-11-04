import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";

export default withApiAuthRequired(
  (req: NextApiRequest, res: NextApiResponse) => {
    const session = getSession(req, res);

    // Check if session was fetched successfully
    if (session) {
      const user = session.user;
      res.status(200).json({ user: user });
    } else {
      return res.status(401).json({ error: "User not logged in..." });
    }
  }
);
