// npm--v : to learn version
// npm i <packagename> : to install local dependency
// npm install -g <packagename> : to install global dependency

//packaga.json
//manual approach  (create package.json)
//npm init (step by step you need to press enter to skip)
//npm init -y (everything default)

const _ = require('lodash')

const items = [1, [2,[3,[4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);
