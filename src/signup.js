// Signup lives in the KeyTrain Learning app (keytrainlearning.com): its Stripe checkout, account
// creation, and post-checkout pages all run there. This site only links into it.
export const LEARNING_APP = 'https://keytrainlearning.com'

export const LEARNING_SIGNUP = `${LEARNING_APP}/signup/standard`
export const HALO_SIGNUP = `${LEARNING_APP}/halo/signup`
// The Terms of Service every signup accepts live in the app too.
export const TERMS_URL = `${LEARNING_APP}/terms`

// Tier ids must match HaloTier in keytrain-learning, which preselects the plan from ?tier=.
export const haloSignup = (tier) => `${HALO_SIGNUP}?tier=${tier}`

// Short shareable URLs on this site (keytrainsecure.com/signup/…). The build writes a static
// redirect page for each one, and App.jsx routes them too for the dev server.
export const signupRedirects = {
  '/signup/learning': LEARNING_SIGNUP,
  '/signup/halo': HALO_SIGNUP,
}
