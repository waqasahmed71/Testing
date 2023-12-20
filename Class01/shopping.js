// // Define an interface for the item
// interface Item {
//     name: string;
//     price: number;
//   }
//   // Function to calculate the total price after applying discounts
//   function calculateTotal(items: Item[]): number {
//     let total = 0;
//     // Apply a 10% discount if the total price is greater than 100
//     if (items.reduce((sum, item) => sum + item.price, 0) > 100) {
//       total = items.reduce((sum, item) => sum + item.price, 0) * 0.9;
//     } else {
//       total = items.reduce((sum, item) => sum + item.price, 0);
//     }
//     return total;
//   }
//   // Function to simulate the shopping scenario
//   function simulateShopping(): void {
//     const shoppingCart: Item[] = [
//       { name: 'Product A', price: 30 },
//       { name: 'Product B', price: 50 },
//       { name: 'Product C', price: 25 },
//     ];
//     console.log('Items in the shopping cart:');
//     shoppingCart.forEach((item) => {
//       console.log(`${item.name}: $${item.price}`);
//     });
//     const total = calculateTotal(shoppingCart);
//     console.log(`Total price after discounts: $${total.toFixed(2)}`);
//   }
//   // Run the simulation
//   simulateShopping();
// Define an interface for the item
// Function to simulate shopping in a specific section
// Simulate the shopping experience
function simulateShopping() {
    // Scenario 1 - Buying Groceries
    console.log("Welcome to the supermarket!");
    var totalBill = 0;
    // Simulate buying fruits
    var buyFruits = true;
    if (buyFruits) {
        console.log("Great choice! Here are the available fruits:");
        var fruits = ["Apple", "Banana", "Orange", "Grapes"];
        for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
            var fruit = fruits_1[_i];
            var price = Math.floor(Math.random() * 10) + 1; // Random price between 1 and 10
            console.log("- ".concat(fruit, ": $").concat(price));
            totalBill += price;
        }
    }
    else {
        console.log("No fruits today.");
    }
    // Simulate buying vegetables
    var buyVegetables = false;
    if (buyVegetables) {
        console.log("Sure, let's check out the vegetables section:");
        var vegetables = ["Carrot", "Broccoli", "Spinach", "Potato"];
        for (var _a = 0, vegetables_1 = vegetables; _a < vegetables_1.length; _a++) {
            var vegetable = vegetables_1[_a];
            var price = Math.floor(Math.random() * 5) + 1; // Random price between 1 and 5
            console.log("- ".concat(vegetable, ": $").concat(price));
            totalBill += price;
        }
    }
    else {
        console.log("No vegetables today.");
    }
    console.log("Total bill: $".concat(totalBill.toFixed(2)));
    // Scenario 2 - Checking Discounts
    var discountApplied = false;
    if (totalBill > 15) {
        discountApplied = true;
        var discountPercentage = 10;
        var discountAmount = (totalBill * discountPercentage) / 100;
        totalBill -= discountAmount;
        console.log("Congratulations! You get a ".concat(discountPercentage, "% discount."));
    }
    console.log("Discounted total: $".concat(totalBill.toFixed(2)));
    // Scenario 3 - Checkout Process
    console.log("Let's proceed to checkout!");
    var chosenPaymentMethod = 0;
    // Nested loop for payment options
    while (chosenPaymentMethod < 1 || chosenPaymentMethod > 3) {
        console.log("Choose your payment method:");
        var paymentMethods = ["Credit Card", "Debit Card", "Cash"];
        for (var i = 0; i < paymentMethods.length; i++) {
            console.log("".concat(i + 1, ". ").concat(paymentMethods[i]));
        }
        chosenPaymentMethod = 2; // Assume the user chooses the second option
        if (chosenPaymentMethod < 1 || chosenPaymentMethod > 3) {
            console.log("Invalid choice. Please choose a valid payment method.");
        }
    }
    switch (chosenPaymentMethod) {
        case 1:
            console.log("You've chosen Credit Card. Please proceed to the card terminal.");
            break;
        case 2:
            console.log("You've chosen Debit Card. Please insert your card into the card reader.");
            break;
        case 3:
            console.log("You've chosen Cash. Please prepare the exact amount.");
            break;
    }
    console.log("Thank you for shopping with us!");
}
// Simulate the shopping experience
simulateShopping();
