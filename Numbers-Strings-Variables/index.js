//exercise 1
console.log(2 + 3);

//exercise 2
let username = prompt("Name");
let color = prompt("Favorite Color");
alert("hello!");

      //exercise 3
      const item1 = 8.99;
      const item2 = 2.99;
      const taxRate = 0.07;
      const subtotal = item1 + item2;
      const total = subtotal + subtotal * taxRate;
      console.log(`Subtotal: $${subtotal}`);
      console.log(`Total: $${total}`);

      //exercise 4
      const firstName = 'Maddie';
      const lastName = 'Poshard';
      console.log(`Welcome, ${firstName} ${lastName}!`);

      //exercise 5
      let inventory = 100;
      console.log(`Initial inventory: ${inventory}`);
      inventory -= 15;
      console.log(`After sales: ${inventory}`);
      inventory += 20;
      console.log(`After restock: ${inventory}`);

      //exercise 6
      const price = 120;
      const tax = 0.1;
      const discount = 0.15;
      const fullPrice = price + price * tax;
      const discountTotal = fullPrice - fullPrice * discount
      console.log(`Price with tax:$${fullPrice}`)
      console.log(`Price after discount:$${discountTotal}`)
