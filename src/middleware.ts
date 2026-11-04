import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  try {
    const response = await next();
    if (response.status === 404 && context.url.pathname.endsWith("installHook.js.map")) {
      return new Response("", {
        status: 200,
      });
    }
    return response;
  } catch (e) {
    // Handle error and optionally return 404
    return context.rewrite("/404");
  }
});
