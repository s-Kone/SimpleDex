CREATE TABLE IF NOT EXISTS Users (
    UserID          SERIAL,
    Username        VARCHAR(255) NOT NULL,
    Email           VARCHAR(255),
    HashedPassword    VARCHAR(255) NOT NULL,
    UserTypeID      INT NOT NULL,
    DateCreatedUTC  TIMESTAMP,
    PRIMARY KEY (UserID),
    FOREIGN KEY (UserTypeID) references UserType(UserTypeID)
);
