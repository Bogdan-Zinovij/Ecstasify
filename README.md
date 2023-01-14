![Ecstasify banner](./client/public/banner.png)

# Usage

### Endpoints:

Tracks service:

- GET http://localhost/api/v1/tracks
- GET http://localhost/api/v1/tracks/:id
- POST http://localhost/api/v1/tracks
  `body: {
    "name": "Time",
    "author": "Danya"
}`
- PATCH http://localhost/api/v1/tracks/:id
  `body: {
    "name": "Gth",
    "author": "Artem"
}`
- DELETE http://localhost/api/v1/tracks/:id

Subscriptions service:

- GET http://localhost/api/v1/subscriptions/subscription-plans
- GET http://localhost/api/v1/subscriptions/subscription-plans/:id
- POST http://localhost/api/v1/subscriptions/subscription-plans
  `body: {
    "name": "Artem",
    "price": "20"
}`
- PATCH http://localhost/api/v1/subscriptions/subscription-plans/:id
  `body: {
    "name": "Artem",
    "price": "20"
}`
- DELETE http://localhost/api/v1/subscriptions/subscription-plans/:id

Users service:

> Auth

- POST http://localhost/api/v1/users/auth/sign-up
  `body: {
    "name": "Bogdan",
    "password": "1236",
    "email": "test@n.et"
}`
- POST http://localhost/api/v1/users/auth/sign-in
  `body: {
    "password": "1236",
    "email": "test@n.et"
}`
- POST http://localhost/api/v1/users/auth/sign-out
  `Authorization: Bearer <token>`
- POST http://localhost/api/v1/users/auth/sign-refresh
  `Authorization: Bearer <token>`
- POST http://localhost/api/v1/users/auth/sign-verify
  `body: {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}`

> Users CRUD

- GET http://localhost/api/v1/users
  `Authorization: Bearer <token>`
- GET http://localhost/api/v1/users/:id
  `Authorization: Bearer <token>`
- POST http://localhost/api/v1/users
  `Authorization: Bearer <token>`
  `body: {
    "name": "Bogdan",
    "password": "1236",
    "email": "test@n.et"
}`
- PATCH http://localhost/api/v1/users/:id
  `Authorization: Bearer <token>`
  `body: {
    "name": "Artem",
    "password": "1234",
    "email": "test@n.et"
}`
- DELETE http://localhost/api/v1/users/:id
  `Authorization: Bearer <token>`
