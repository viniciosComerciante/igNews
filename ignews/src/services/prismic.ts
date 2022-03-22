import * as prismic from "@prismicio/client";
import * as prismicH from "@prismicio/helpers";

const endpoint = prismic.getEndpoint("ignews-vinicios");
const accessToken = process.env.PRISMIC_ACCESS_TOKEN; // Set an access token
const routes = [
  // Update to match your website's URL structure
  { type: "publication", path: "/pages" },
];

export default prismic.createClient(endpoint, { routes, accessToken });
