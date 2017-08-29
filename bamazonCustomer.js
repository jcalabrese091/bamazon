var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3000,

  // Your username
  user: "root",

  // Your password
  password: "Apr171990",
  database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err){
  console.log(err);
  return
}
  // run the start function after the connection is made to prompt the user
  start();
});

// function which prompts the user for what action they should take
function start() {
  connection.query("SELECT id, product_name, department_name, price, stock_quantity FROM products",function(err, res){
    for (var i = 0; i < res.length; i++) {
      console.log("ID" + res[i].id + "\n Product" + res[i].product_name + "\n Price" + res[i].price);
    }
 
  inquirer
    .prompt([{
      type: "input",
      message: "What is the ID of the Item?",
      name: "id",
    },{
      type: "input",
      message: "How many would you like to buy",
      name: "how"
    }])

    .then(function(answer) {
      var answerId = parseInt(answer.id)
      var answerHow = parseInt(answer.how)

      connection.query(
        "UPDATE products SET ? WHERE ?"[{
          stock_quantity: res[i].stock_quantity - answerHow
        },{
          id: answerId
          }
        ], function(err,res){   
        }
        );
        if (res[i].id == answerId && res[i].stock_quantity >= answerHow) 
        console.log("order complete");
        else if(res[i].id !== answerId || res[i].stock_quantity < answerHow)
        console.log("out of stock");    
      // based on their answer, either call the bid or the post functions
      // if (answer.start.toLowerCase() === "") {
      //   postAuction();
      // }
      // else {
      //   bidAuction();
      // }
      connection.end();
    });
  }); 
}
