function getBalance() {
  const balance = await web3.eth.getBalance(address);
  return balance;
}

//Incorrect Usage
const balance = getBalance(userAddress);
console.log(balance); // returns a Promise instead of the actual balance