import { handleAuth } from "@auth0/nextjs-auth0";

/**
 * Handles authentication routes.
 * /api/auth/me
 * /api/auth/login
 * /api/auth/logout
 * /api/auth/callback
 */
export default handleAuth();
