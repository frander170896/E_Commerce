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
nombrecompleto varchar(255),
gender int,
email varchar(255),
PRIMARY KEY (id)
);

CREATE TABLE implementosdeportivos.NOTICIAS (
   NOTICIA_ID INT,
   DESCRIPCION LONGTEXT ASCII,
   FECHA DATETIME,
   TOPIC INT,
    PRIMARY KEY (NOTICIA_ID)
) ENGINE = InnoDB ROW_FORMAT = DEFAULT;
CREATE TABLE implementosdeportivos.COMENTARIOS (
   COMENTARIO_ID INT,
   DESCRIPCION LONGTEXT ASCII,
   USUARIO_ID bigint(20),
   NOTICIA_ID INT,
   TOPIC varchar(255),
  PRIMARY KEY (COMENTARIO_ID),
  CONSTRAINT `FK_USER` FOREIGN KEY (`USUARIO_ID`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
 -- CONSTRAINT `FK_NOTICIA` FOREIGN KEY (`NOTICIA_ID`) REFERENCES `NOTICIAS` (`NOTICIA_ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB ROW_FORMAT = DEFAULT;

CREATE TABLE `categoria` (
  `ARTICULO_ID` bigint(20) NOT NULL,
  `CATEGORY_ID` int(11) NOT NULL AUTO_INCREMENT,
  `CATEGORY_NAME` varchar(100) NOT NULL,
  PRIMARY KEY (`CATEGORY_ID`),
  KEY `categoria_ibfk_1` (`ARTICULO_ID`),
  CONSTRAINT `categoria_ibfk_1` FOREIGN KEY (`ARTICULO_ID`) REFERENCES `articulos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `implementosdeportivos`.`articulos` (`precio`, `descripcion`, `nombre`, `estado`,`cantidad`, `imagen`)
 VALUES ('20000', 'This is a perfect baseball element, you can use anywhere.', 'Baseball Glove', '1',2,'/server/imagenes/guantebeisball.jpg');

INSERT INTO `implementosdeportivos`.`articulos` (`precio`, `descripcion`, `nombre`, `estado`,`cantidad`, `imagen`)
VALUES ('10000', 'Soccer ball, perfect for your match', 'Soccer Ball', '1',3,'/server/imagenes/balon.jpg');

INSERT INTO `implementosdeportivos`.`articulos` (`precio`, `descripcion`, `nombre`, `estado`,`cantidad`, `imagen`)
VALUES ('17000', 'Chelseas uniform', 'Chelseas Uniform', '1',1,'/server/imagenes/chelseauniform.png');

INSERT INTO `implementosdeportivos`.`articulos` (`precio`, `descripcion`, `nombre`, `estado`,`cantidad`, `imagen`)
VALUES ('11000', 'Colombias tshirt, cotton', 'Colombia', '1',1,'/server/imagenes/chelseauniform.png');

INSERT INTO `implementosdeportivos`.`articulos` (`precio`, `descripcion`, `nombre`, `estado`,`cantidad`, `imagen`)
VALUES ('8000', 'Espinilleras, for soccer', 'Espinilleras', '1',1,'/server/imagenes/espinilleras.jpg');


INSERT INTO `implementosdeportivos`.`categoria` (`ARTICULO_ID`, `CATEGORY_NAME`) 
VALUES (1, 'Individuales');

INSERT INTO `implementosdeportivos`.`categoria` (`ARTICULO_ID`, `CATEGORY_NAME`) 
VALUES (2, 'Combos');

--INSERT INTO `implementosdeportivos`.`usuarios` (`usuario`, `contra`) VALUES ('david', '123');
