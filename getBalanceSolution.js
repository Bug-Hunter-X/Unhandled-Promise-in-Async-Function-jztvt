async function getBalance() {
  const balance = await web3.eth.getBalance(address);
  return balance;
}

//Correct Usage
async function showBalance(){
const balance = await getBalance(userAddress);
console.log(balance); // returns the actual balance
}
showBalance();