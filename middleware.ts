import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|rmvb|mp4|mov|wmv|flv|avi|mkv|3gp|ts|m3u8|mp3|wav|flac|ogg|aac|amr|m4a|m4r|opus|oga|ogv|ogm|ogx|spx|opus|pdf|epub|txt|json|xml|yaml|yml|md|mdx|graphql|gql|wasm|map|webmanifest|rss|atom|xml|swf|tar|gz|bz2|7z|rar|iso|img|dmg|pkg|deb|rpm|exe|bat|msi|sh|ps1|apk|ipa|crx|xpi|crx|xpi)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
