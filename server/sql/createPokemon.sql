CREATE TABLE POKEMON (
    PokemonID INT NOT NULL AUTO_INCREMENT,
    PokeDexNumberID INT NOT NULL,
    PokemonName VARCHAR(30) NOT NULL,
    Move1 VARCHAR(24) NOT NULL,
    Move2 VARCHAR(24),
    Move3 VARCHAR(24),
    Move4 VARCHAR(24),
    PokemonType VARCHAR(24) NOT NULL,
    PokemonType2 VARCHAR(24)
)
