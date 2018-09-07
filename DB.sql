CREATE SCHEMA `implementosdeportivos` ;

use implementosdeportivos;

CREATE TABLE `implementosdeportivos`.`articulos` (
id bigint(20) NOT NULL AUTO_INCREMENT,
precio int(11) DEFAULT NULL,
descripcion varchar(255) DEFAULT NULL,
nombre varchar(255) DEFAULT NULL,
estado int(11) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE `implementosdeportivos`.`compras` (
id bigint(20) NOT NULL AUTO_INCREMENT,
total int(11) DEFAULT NULL,
subtotal int(11) DEFAULT NULL,
estado int(11) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE `implementosdeportivos`.`comprasArticulos` (
id bigint(20) NOT NULL AUTO_INCREMENT,
compra bigint(20) DEFAULT NULL,
articulo bigint(20) DEFAULT NULL,
PRIMARY KEY (id),
CONSTRAINT FKarticulo FOREIGN KEY (articulo) REFERENCES articulos (id),
CONSTRAINT FKcompra FOREIGN KEY (compra) REFERENCES compras (id)
);

CREATE TABLE `implementosdeportivos`.`usuarios` (
id bigint(20) NOT NULL AUTO_INCREMENT,
usuario varchar(255) DEFAULT NULL,
contra varchar(255) DEFAULT NULL,
PRIMARY KEY (id)
);

INSERT INTO `implementosdeportivos`.`articulos` (`precio`, `descripcion`, `nombre`, `estado`) VALUES ('1000', 'Art1 desc', 'Art1', '1');
INSERT INTO `implementosdeportivos`.`articulos` (`precio`, `descripcion`, `nombre`, `estado`) VALUES ('2000', 'Art2 desc', 'Art2', '1');
INSERT INTO `implementosdeportivos`.`articulos` (`precio`, `descripcion`, `nombre`, `estado`) VALUES ('3000', 'Art3 desc', 'Art3', '1');

INSERT INTO `implementosdeportivos`.`usuarios` (`usuario`, `contra`) VALUES ('david', '123');
