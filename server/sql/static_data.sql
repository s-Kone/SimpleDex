INSERT INTO Endpoint (EndpointID, EndpointDesc, Method, EndpointPath)
VALUES 
    (1, 'Register', 'POST', '/API/v1/users/register'),
    (2, 'Login', 'POST', '/API/v1/users/login'),
    (3, 'Documentation', 'GET', '/API/v1/documentation'),
    (4, 'Admin Stats', 'GET', '/API/v1/admin'),
    (5, 'Search Pokemon By Name', 'GET', '/API/v1/searchPokemon/name'),
    (6, 'Search Pokemon Type', 'GET', '/API/v1/searchPokemon/type'),
    (7, 'Post Team', 'POST', '/API/v1/teams'),
    (8, 'Get Team', 'GET', '/API/v1/teams'),
    (9, 'Update Team', 'PUT', '/API/v1/teams')
;

INSERT INTO UserType (UserTypeID, UserTypeDesc)
VALUES
    (1, 'Admin'),
    (2, 'User')
;
