CREATE DATABASE i4digital;

USE i4digital;

CREATE TABLE cliente(
id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
cedula_cliente VARCHAR(50) NOT NULL,
modelo_vehiculo VARCHAR(50) NOT NULL,
factores_compra TEXT NOT NULL,
calificacion_prueba_manejo INT(2) NOT NULL,
calificacion_satisfaccion INT(2) NOT NULL
);
