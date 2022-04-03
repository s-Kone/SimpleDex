CREATE TABLE Endpoint (
    EndpointID      INT NOT NULL,
    EndpointDesc    VARCHAR(255),
    Method          VARCHAR(24),
    EndpointPath    VARCHAR(255),
    PRIMARY KEY (EndpointID)
);
