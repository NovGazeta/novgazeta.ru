import { defineMiddleware } from "astro:middleware";

const mapPath: string = "/installHook.js.map";
const notfoundPath: string = "/404";

export const onRequest = defineMiddleware(async (context, next) => {
  try {
    const response = await next();
    const { pathname }: { pathname: string } = context.url;
    if (response.status === 404 && pathname.endsWith(mapPath)) {
      return pathname.startsWith(mapPath) ? new Response("", {
        status: 200,
      }) : context.rewrite(mapPath);
    }
    return response;
  } catch (e) {
    // Handle error and optionally return 404
    return context.rewrite(notfoundPath);
  }
});
