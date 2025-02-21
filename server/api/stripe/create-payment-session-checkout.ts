import Stripe from 'stripe'


export default defineEventHandler(async (event) => {

  const config  = useRuntimeConfig()

  const stripe = new Stripe("sk_test_51N11SyBMH61eA80aSptawI4yiOWqcRkjzGMMJtyfhncE40M8ZS93IjBpdIr7IKZwDwHuIIcqTj1NsZ9ZJuL0cLOL00OVVZ8tW6")

  const body  = await readBody(event)
  const parseBody = JSON.parse(body)
  const stripeCustomerId = parseBody?.stripeCustomerId
  const lineItems =  parseBody?.lineItems
  const order_id  = parseBody?.order_id


  // var referer = req.headers.referer;
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    customer: stripeCustomerId,
    line_items: lineItems,
    invoice_creation: {
      enabled: true,
    },
    // {CHECKOUT_SESSION_ID} is a string literal; do not change it!
    // the actual Session ID is returned in the query parameter when your customer
    // is redirected to the success page.
    success_url: `http://localhost:3000/{CHECKOUT_SESSION_ID}`,
    // cancel_url: `${referer}?canceled=true`,
    payment_intent_data: {
      metadata: {
        order_id:order_id
      },
      setup_future_usage: 'off_session',
    },
  })

  return {
    sessionId: session.id,
  }
})
