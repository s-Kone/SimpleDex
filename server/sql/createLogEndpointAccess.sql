CREATE TABLE LogEndpointAccess(
    LogEndpointAccessID INT NOT NULL AUTO_INCREMENT,
    EndpointID          INT NOT NULL,
    UserID              INT,
    LogDateUTC          DATETIME,
    PRIMARY KEY (LogEndpointAccessID),
    FOREIGN KEY (EndpointID) REFERENCES Endpoint(EndpointID),
    FOREIGN KEY (UserID) REFERENCES User(UserID)
);
