CREATE TABLE cliente(
  id PRIMARY KEY AUTOINCREMENT,
  nombre VARCHAR(255) UNIQUE,
  cedulla VARCHAR(255) UNIQUE,
  compra INT
);

GO

CREATE TABLE servicio(
  id PRIMARY KEY AUTOINCREMENT,
  nombre VARCHAR(255) UNIQUE,
  idcliente INT UNIQUE,
  compra INT
);

