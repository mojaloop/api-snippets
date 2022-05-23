module.exports = {
  reject: [
    // husky >4 involves a full config migration with no current and apparent benefit.
    // So we are just sticking to husky@4.x.x for the time being.
    'husky'
  ]
}
