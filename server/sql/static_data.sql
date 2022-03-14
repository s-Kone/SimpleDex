INSERT INTO Endpoint (EndpointID, EndpointDesc)
VALUES 
    (1, 'SearchPokemon'),
    (2, 'PostTeam')
;

INSERT INTO UserType (UserTypeID, UserTypeDesc)
VALUES
    (1, 'Admin'),
    (2, 'User')
;

-- TODO: store passwords as hash
INSERT INTO User (Username, UserPassword, UserTypeID, DateCreatedUTC)
VALUES
    ('admin', '1234abcd', 1, UTC_TIMESTAMP);
