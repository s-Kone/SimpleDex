CREATE TABLE LogEndpointAccess(
    LogEndpointAccessID SERIAL,
    EndpointID          INT NOT NULL,
    UserID              INT,
    LogDateUTC          TIMESTAMP,
    PRIMARY KEY (LogEndpointAccessID),
    FOREIGN KEY (EndpointID) REFERENCES Endpoint(EndpointID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);
