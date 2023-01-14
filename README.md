![Ecstasify banner](./client/public/banner.png)

# What is Ecastasify🎵

This project is the implementation of an online platform for listening to music by many users through a web client. The user can register on the site, choose a subscription plan, create playlists of tracks, receive notifications about the release of new tracks and even become an author.

# Preview

![preview](https://user-images.githubusercontent.com/71723893/212487021-98b976c7-ab2c-46e0-882c-459024ba6bfb.png)

# Main features:

- USER:
  - [x] Create personal account
  - [x] Choose a subscription plan
  - [x] Listen to music
- ADMIN:
  - [x] Manage and create new users
  - [x] Manage and create authors
  - [x] Manage and create tracks with some metadata
  - [x] Manage and create playlists <br>

# Who worked on the project

This project is implemented by a team of four developers:

### Backend:

- Khrapko Vasyl <br>
  (khrapko2002@gmail.com, https://github.com/KhrapkoVasyl) <br>
  Implemented: 'subscriptions', 'files', 'notifications' services

- Zinovyj Bogdan <br>
  (bogdanolexandrov@gmail.com, https://github.com/Bogdan-Zinovij) <br>
  Implemented: 'users(+auth)', 'authors' services

- Byaliy Danil <br>
  (byaliy03@gmail.com, https://github.com/DanilByaliy) <br>
  Implemented: 'tracks', 'playlists' services

### Frontend:

- Matiushenko Artem <br>
  (artom.matyushenko@gmail.com, https://github.com/artemmatiushenko1) <br>
  Implemented: web client <br>

# Installation

1. Clone the repo:
   ```sh
   git clone https://github.com/Bogdan-Zinovij/Ecstasify.git
   ```
2. TBC..<br>

# Endpoints usage example:

### Tracks service:

- GET http://localhost/api/v1/tracks
- GET http://localhost/api/v1/tracks/:id
- POST http://localhost/api/v1/tracks <br>
  `body: {
    "name": "Time",
    "author": "Danya"
}`
- PATCH http://localhost/api/v1/tracks/:id <br>
  `body: {
    "name": "Gth",
    "author": "Artem"
}`
- DELETE http://localhost/api/v1/tracks/:id <br>

### Subscriptions service:

- GET http://localhost/api/v1/subscriptions/subscription-plans
- GET http://localhost/api/v1/subscriptions/subscription-plans/:id
- POST http://localhost/api/v1/subscriptions/subscription-plans <br>
  `body: {
    "name": "Artem",
    "price": "20"
}`
- PATCH http://localhost/api/v1/subscriptions/subscription-plans/:id <br>
  `body: {
    "name": "Artem",
    "price": "20"
}`
- DELETE http://localhost/api/v1/subscriptions/subscription-plans/:id

### Users service:

> Auth

- POST http://localhost/api/v1/users/auth/sign-up <br>
  `body: {
    "name": "Bogdan",
    "password": "1236",
    "email": "test@n.et"
}`<br>
  `Auth required : None` <br>
  `Permissions required : None`
- POST http://localhost/api/v1/users/auth/sign-in <br>
  `body: {
    "password": "1236",
    "email": "test@n.et"
}`<br>
  `Auth required : None` <br>
  `Permissions required : None`
- POST http://localhost/api/v1/users/auth/sign-out <br>
  `Auth required : Yes` <br>
  `Permissions required : None`
- POST http://localhost/api/v1/users/auth/sign-refresh <br>
  `Auth required : Yes` <br>
  `Permissions required : None`
- POST http://localhost/api/v1/users/auth/sign-verify <br>
  `body: {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}`<br>
  `Auth required : Yes` <br>
  `Permissions required : None`

> Users CRUD

- GET http://localhost/api/v1/users <br>
  `Auth required : Yes` <br>
  `Permissions required : Yes`
- GET http://localhost/api/v1/users/:id <br>
  `Auth required : Yes` <br>
  `Permissions required : Yes`
- POST http://localhost/api/v1/users <br>
  `body: {
    "name": "Bogdan",
    "password": "1236",
    "email": "test@n.et"
}`<br>
  `Auth required : Yes` <br>
  `Permissions required : Yes`
- PATCH http://localhost/api/v1/users/:id <br>
  `body: {
    "name": "Artem",
    "password": "1234",
    "email": "test@n.et"
}`<br>
  `Auth required : Yes` <br>
  `Permissions required : Yes`
- DELETE http://localhost/api/v1/users/:id <br>
  `Auth required : Yes` <br>
  `Permissions required : Yes`
