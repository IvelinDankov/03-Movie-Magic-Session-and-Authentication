### Movie Magic after session and authorization.

# movie-magic-may-2025

SoftUni JS Back-End Course Workshop

## Bonuses

- [x] DB Movies Filtering
- [x] Filter already attached cast
- [ ] Extract rotues
- [ ] Name in movie

<!-- IMPORTANT STEPS -->

- Install bcrypt and hash pass in User Model with pre fn.
- Save User with create
- in Login page POST
  - Take user data
  - call service login
  - set auth cookie
  - redirect to home page 'for example'
- User Service Login
  - Get user from DB
  - Exist or Not
  - Valid Pass
  - If Not Valid ?
  - Valid ok... Generate Token with jwt
  - return this Token end send to userController
