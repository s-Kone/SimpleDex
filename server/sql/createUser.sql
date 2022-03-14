CREATE TABLE User (
    UserID          INT NOT NULL AUTO_INCREMENT,
    Username        VARCHAR(255) NOT NULL,
    UserPassword    VARCHAR(255) NOT NULL,
    UserTypeID      INT NOT NULL,
    DateCreatedUTC  DateTime,
    PRIMARY KEY (UserID),
    FOREIGN KEY (UserTypeID) references UserType(UserTypeID)
);
