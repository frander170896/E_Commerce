CREATE SCHEMA `implementosdeportivos` ;

use implementosdeportivos;

drop table `implementosdeportivos`.`comprasArticulos`;
drop table `implementosdeportivos`.`categoria`;
drop table `implementosdeportivos`.`articulos`;
drop TABLE `implementosdeportivos`.`usuarios`;
drop TABLE `implementosdeportivos`.`compras`;

CREATE TABLE `implementosdeportivos`.`articulos` (
id bigint(20) NOT NULL AUTO_INCREMENT,
precio int(11) DEFAULT NULL,
descripcion varchar(255) DEFAULT NULL,
nombre varchar(255) DEFAULT NULL,
fecha_registro TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
estado int(11) NOT NULL DEFAULT 0,
cantidad int(11) NOT NULL,
imagen varchar(255) DEFAULT NULL,
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
CONSTRAINT FKarticulo FOREIGN KEY (articulo) REFERENCES articulos (id) ON UPDATE CASCADE ON DELETE CASCADE,
CONSTRAINT FKcompra FOREIGN KEY (compra) REFERENCES compras (id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE `implementosdeportivos`.`usuarios` (
id bigint(20) NOT NULL AUTO_INCREMENT,
usuario varchar(255) DEFAULT NULL,
contra varchar(255) DEFAULT NULL,
PRIMARY KEY (id)
);

CREATE TABLE implementosdeportivos.CATEGORIA (
   ARTICULO_ID BIGINT(20) NOT NULL,
   CATEGORY_ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   CATEGORY_NAME INT NOT NULL,
   FOREIGN KEY (ARTICULO_ID) REFERENCES ARTICULOS(ID) ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE = InnoDB ROW_FORMAT = DEFAULT;

INSERT INTO `implementosdeportivos`.`articulos` (`precio`, `descripcion`, `nombre`, `estado`,`cantidad`, `imagen`)
 VALUES ('1000', 'Art1 desc', 'Art1', '1',2,'server/imagenes/a3.jpg');
INSERT INTO `implementosdeportivos`.`articulos` (`precio`, `descripcion`, `nombre`, `estado`,`cantidad`) 
VALUES ('2000', 'Art2 desc', 'Art2', '1',3);
INSERT INTO `implementosdeportivos`.`articulos` (`precio`, `descripcion`, `nombre`, `estado`,`cantidad`) 
VALUES ('3000', 'Art3 desc', 'Art3', '1',1);

INSERT INTO `implementosdeportivos`.`usuarios` (`usuario`, `contra`) VALUES ('david', '123');
