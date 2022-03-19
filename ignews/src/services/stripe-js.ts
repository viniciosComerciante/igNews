import { loadStripe } from "@stripe/stripe-js";

export async function getStripeJs() {
  const stripeJs = await loadStripe(
    "pk_test_51Ju6blLMpunIKRZokFQP5uvzMpg7J0GwoYTeZ0UxPrAOIL54zKxbCieBgLCs972nK5g6sf6d0p11O7RDwu0b7Qln00FZhdfWHQ"
  );

  return stripeJs;
}
