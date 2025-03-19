import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "mydb",
  password: "020817Zbt.",
});
