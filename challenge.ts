import * as mysql from "mysql2";

// Create a connection to the MySQL database
const connection = await mysql.createConnection({
  host: "127.0.0.1",
  user: "Kevo",
  password: "Gogeta465807",
  database: "classicmodels",
});

// Use the connection to execute a query
const [rows] = await connection.execute("SELECT * FROM customers");
console.log(rows); // Outputs the rows returned by the query
