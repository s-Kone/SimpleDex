CREATE TABLE TeamRecord (
        TeamRecordID     INT NOT NULL AUTO_INCREMENT,
        UserTeamID       INT NOT NULL,
        UserID           INT NOT NULL,
        PokemonID1       INT NOT NULL,
        PokemonID2       INT NOT NULL,
        PokemonID3       INT NOT NULL,
        PokemonID4       INT NOT NULL,
        PokemonID5       INT NOT NULL,
        PokemonID6       INT NOT NULL,
        DateModifiedUTC DATETIME,
        PRIMARY KEY (TeamRecordID),
        FOREIGN KEY (UserID) REFERENCES User(UserID)
);
