import mysql from "mysql";

export const dp = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Potatoes5",
    database: "blog"
});