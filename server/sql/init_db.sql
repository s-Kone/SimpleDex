CREATE TABLE IF NOT EXISTS UserType (
    UserTypeID      INT NOT NULL,
    UserTypeDesc    VARCHAR(255),
    PRIMARY KEY (UserTypeID)
);

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

CREATE TABLE IF NOT EXISTS TeamRecord (
        TeamRecordID     SERIAL,
        UserTeamID       INT NOT NULL,
        UserID           INT NOT NULL,
        Pokemon          JSON NOT NULL,
        DateModifiedUTC TIMESTAMP,
        PRIMARY KEY (TeamRecordID),
        FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

CREATE TABLE Endpoint (
    EndpointID      INT NOT NULL,
    EndpointDesc    VARCHAR(255),
    PRIMARY KEY (EndpointID)
);

CREATE TABLE LogEndpointAccess(
    LogEndpointAccessID SERIAL,
    EndpointID          INT NOT NULL,
    UserID              INT,
    LogDateUTC          TIMESTAMP,
    PRIMARY KEY (LogEndpointAccessID),
    FOREIGN KEY (EndpointID) REFERENCES Endpoint(EndpointID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);
