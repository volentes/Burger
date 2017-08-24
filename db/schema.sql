-- Schema for creating the Burger DB -- 

-- Creates the database -- 
CREATE DATABASE burgers_db; 
USE burgers_db; 

-- Creates a burgers table with the required values -- 
CREATE TABLE burgers (

    id INT NOT NULL AUTO_INCREMENT, 
    burger_name VARCHAR(255) NOT NULL, 
    devoured BOOLEAN DEFAULT FALSE, 
    ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  	PRIMARY KEY(id)

);

SELECT * FROM burgers; 
