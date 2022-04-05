INSERT INTO Endpoint (EndpointID, EndpointDesc, Method, EndpointPath)
VALUES 
    (1, 'Register', 'POST', '/API/v2/users/register'),
    (2, 'Login', 'POST', '/API/v2/users/login'),
    (3, 'Documentation', 'GET', '/API/v2/documentation'),
    (4, 'Admin Stats', 'GET', '/API/v2/admin'),
    (5, 'Search Pokemon By Name', 'GET', '/API/v2/searchPokemon/name'),
    (6, 'Search Pokemon Type', 'GET', '/API/v2/searchPokemon/type'),
    (7, 'Add Team', 'POST', '/API/v2/teams'),
    (8, 'Get Team', 'GET', '/API/v2/teams'),
    (9, 'Update Team', 'PATCH', '/API/v2/teams'),
    (10, 'Delete Team', 'DELETE', '/API/v2/teams')
;

INSERT INTO UserType (UserTypeID, UserTypeDesc)
VALUES
    (1, 'Admin'),
    (2, 'User')
;
