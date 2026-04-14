const { connect } = require("./services/blockchain");

async function main() {
  const provider = await connect();
  console.log("Connected:", provider);
}
