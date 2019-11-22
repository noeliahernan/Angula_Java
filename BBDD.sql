/*Creacción de base de datos*/

CREATE DATABASE `prueba` ;

/*Creacción de tabla*/
CREATE TABLE `usuarios` (
 `id` INT NOT NULL AUTO_INCREMENT,
 `nombre` VARCHAR( 255 ) NULL ,
 `apellidos` VARCHAR( 255 ) NULL ,
 `usuario` VARCHAR( 22 ) NOT NULL ,
 `password` VARCHAR( 13 ) NOT NULL ,
 PRIMARY KEY ( `id` ) 
) ENGINE = MYISAM ;


/*Insertar datos*/
INSERT INTO `prueba`.`usuarios` (
 `id` ,
`nombre` ,
`apellidos` ,
`usuario` ,
`password` 
)
VALUES (
 '1', 'Noelia', 'Hernan Zazo', 'noeliahernan1989@gmail.com', '12345'
), (
 '2', 'Juan ', 'Perez Garcia', 'juanito@gmail.com', '123456'
);
