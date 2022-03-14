CREATE TABLE TeamRecord (
        TeamRecordID    INT NOT NULL AUTO_INCREMENT,
        TeamID          INT NOT NULL,
        UserID          INT NOT NULL,
        PokemonID       INT NOT NULL,
        DateModifiedUTC DATETIME,
        PRIMARY KEY (TeamRecordID)
);
