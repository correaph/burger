CREATE TABLE `burgers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `burger_name` varchar(70) NOT NULL,
  `devoured` boolean DEFAULT false,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);