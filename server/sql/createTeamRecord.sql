CREATE TABLE IF NOT EXISTS TeamRecord (
        TeamRecordID     SERIAL,
        UserTeamID       INT NOT NULL,
        UserID           INT NOT NULL,
        Pokemon          JSON NOT NULL,
        DateModifiedUTC TIMESTAMP,
        PRIMARY KEY (TeamRecordID),
        FOREIGN KEY (UserID) REFERENCES Users(UserID)
);
