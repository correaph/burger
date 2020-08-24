CREATE DATABASE `burger`;
USE `burger`;
CREATE TABLE `tb_burger` (
  `id` int NOT NULL AUTO_INCREMENT,
  `burger_name` varchar(70) NOT NULL,
  `eaten` tinyint DEFAULT '0',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;