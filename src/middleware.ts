import { defineMiddleware } from "astro:middleware";

const hookPath: string = "/installHook.js.map";

export const onRequest = defineMiddleware(async (context, next) => {
  try {
    const response = await next();
    const { pathname } = context.url;
    if (response.status === 404 && pathname.endsWith(hookPath)) {
      return pathname.startsWith(hookPath) ? new Response("", {
        status: 200,
      }) : context.rewrite(hookPath);
    }
    return response;
  } catch (e) {
    // Handle error and optionally return 404
    return context.rewrite("/404");
  }
});
