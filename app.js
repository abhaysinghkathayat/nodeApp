//npm global command come with node js
//npm version

//local depandency --use it only in this particular project
//npm i <pakageName>

//global dependancy --use it in any project
//npm install -g <pakageName> this is for wo=indows
//sudo install -g <pakageName> this is for mac

//package.json -mainfest file(stores Inportant information about project/packages)
//manula approach (create package.json in the root,create properties etc)
//npm init (step by step,press enter to skip)
//npm init -y (everything default)

//npm init -y faster then npm init 
//then install loadash package using npm i loadash for install dependencies
//install bootstrap package
//install j query npm i jquery

const _ = require('lodash');
const iteams =[1,[2,[[3,4]]]];
const newIteams = _.flattenDeep(iteams);
console.log(newIteams);





