const Web3 = require("web3");
const path = require("path");
const fs = require("fs");

const TOKEN_ABI = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "../../IERC20.json"),
    "utf-8"
  )
).abi;

 exports.watchTokenTransfers = async(tokenAddress, owner) => {
    console.log("we are seeing this")
  const web3 = new Web3(
    new Web3.providers.WebsocketProvider(
      "wss://mainnet.infura.io/ws/v3/0c0804f3fa054aee94a95a7862cc1139"
    )
  );

  // Instantiate token contract object with JSON ABI and address
  const tokenContract = new web3.eth.Contract(
    TOKEN_ABI,
    tokenAddress,
    (error, result) => {
      if (error) console.log(error);
    }
  );

  // Generate filter options
  const options = {
    filter: {
      from: owner,
    },
    fromBlock: 0,
  };

  // Subscribe to Transfer events matching filter criteria
  try {
    const response = await tokenContract.events.Transfer(options, async (error, event) => {
      if (error) {
        throw error;
      }
      console.log("at txHash " + event.transactionHash);
      const trns = await event.transactionHash;
      console.log("we are seeeing the trans here", trns);
      console.log("Found incoming transaction from " + owner);
      if (event && event.returnValues && event.returnValues.Result) {
        console.log("to " + event.returnValues.Result.to);
      }

      return ;
    });
    console.log("we aree seeing the reponse here", response);
    return response
  } catch (error) {
    console.log(error);
  }
}