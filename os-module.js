//Work With Built In Modules 
const os = require('os');

//info about current User
const user = os.userInfo();

//return systemUptime In Seconds
console.log(`the System Uptime Is ${os.uptime()} seconds`);

//currnt Os
const currentOS = {
    name :os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()

}

console.log(currentOS);