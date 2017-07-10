// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
// console.log(data)

// 1: Show me how to calculate the average price of all items.
function question1() {
  let totalCost = 0
  data.forEach(function(dataEntry) {
    totalCost += dataEntry.price
  })
  let averagePrice = (totalCost / data.length).toFixed(2)  // rounding up to 24 :-/
  console.log('The average price is $' + averagePrice)
}

// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2() {
  data.filter(function(item) {
    return item.price > 14 && item.price < 18.00
  }).forEach(function(item) {
    console.log(item.title)
  })
}

// 3: Which item has a "GBP" currency code? Display it's name and price.
function isGbp(item) {
  return item.currency_code === "GBP"
}

function question3 () {
  console.log(data.find(isGbp).title + " costs " + data.find(isGbp).price + " pounds")
}

// 4: Display a list of all items who are made of wood.
function question4 () {
  let woodItems = data.filter(function(item) {
    return item.materials.includes("wood")
  }).map(function(item) {
    return item.title
  })
  console.log(woodItems)
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
