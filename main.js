// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
// console.log(data)

// 1: Show me how to calculate the average price of all items.
function question1() {
  let averageCost = 0
  data.forEach(function(dataEntry) {
    averageCost += dataEntry.price
  })
  let averagePrice = (averageCost / data.length).toFixed(2)  // rounding up to 24 :-/
  console.log('The average price is $' + averagePrice)
}


// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2() {
  let itemsInCostRange = []
  data.forEach(function(dataEntry) {
    if (dataEntry.price > 14.00 && dataEntry.price < 18.00)
      itemsInCostRange.push(dataEntry.title)
  })
  console.log(itemsInCostRange)
}


// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  data.forEach(function(dataEntry) {
    if (dataEntry.currency_code === "GBP")
      console.log(dataEntry.title + " costs " + dataEntry.price + " pounds")
  })
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  data.forEach(function(dataEntry) {
    if (dataEntry.materials.includes("wood"))
      console.log(dataEntry.title)
  })
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  data.forEach(function(dataEntry) {
    if (dataEntry.materials.length >= 8) {
      console.log(dataEntry.title + " has " + dataEntry.materials.length + " materials")
      for (var i = 0; i < dataEntry.materials.length; i++) {
        console.log("-" + dataEntry.materials[i])
      }
    }
  })
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  let i = 0
  data.forEach(function(dataEntry) {
    if (dataEntry.who_made === "i_did") {
      i++
    }
  })
  console.log(i + " items were made by their sellers")
}
