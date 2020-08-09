// eslint-disable-next-line no-unused-vars
export default function log ({next, router, to, from, log}) {
  // eslint-disable-next-line no-new,no-unused-vars
  new Promise((resolve, reject) => {
    console.log(`From: -> ${from.path}(${from.name}) \nTo: -> ${to.path}(${to.name}) \nAt: ${new Date()}`)
    // d
    // eslint-disable-next-line no-unused-vars
  }).then(r => {})

  return next()
}
