const { ethers } = require("ethers");
const { RPC_URL } = require("../config");

async function connect() {
  return new ethers.JsonRpcProvider(RPC_URL);
}

module.exports = { connect };
```
