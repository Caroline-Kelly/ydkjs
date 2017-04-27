const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;


var bankAccountBalance = prompt("Please enter your bank account balance:");

//calculate the prices of the items including tax - these amounts are used for all further calculations
var phoneAndAccTotal= (PHONE_PRICE + ACCESSORY_PRICE) + ((PHONE_PRICE + ACCESSORY_PRICE) * TAX_RATE);
var phoneTotal = (PHONE_PRICE + (PHONE_PRICE * TAX_RATE));

//if there is enough money in the bank account to purchase at least one phone, run the loop
while(bankAccountBalance > phoneTotal){

   /* first check to see if the user has enough money to purchase both a phone and
		accessory and if so, purchase them */
if (bankAccountBalance > phoneAndAccTotal){
		console.log("One phone plus one accessory purchased for $" + phoneAndAccTotal.toFixed(2));
		console.log("Your balance is now $" + (bankAccountBalance - phoneAndAccTotal).toFixed(2));
		bankAccountBalance -= phoneAndAccTotal.toFixed(2);
		}

  /* if not, check to see if the user has enough to purchase just the phone and
	if so, purchase just the phone*/

else if (bankAccountBalance > phoneTotal){
		console.log("One phone purchased for $" + phoneTotal.toFixed(2));
		console.log("Your balance is now $" + (bankAccountBalance - phoneTotal).toFixed(2));
		bankAccountBalance -= phoneTotal.toFixed(2);
		}
}
//when the bank account balance is too low to purchase a phone this function runs
	console.log("Your account balance is $" + Number(bankAccountBalance).toFixed(2) + ".  You do not have enough money to purchase a phone.");
