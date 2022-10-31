# Ecastasify🎵

# k8s lab-2

## How to start
NOTE: Make sure that minikube is running and ingress addons are enabled.

In directory of the project run .sh file:
`./lab2.sh`

Open in your browser:
http://localhost/api/v1 

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
- GET http://localhost/api/v1/users
- GET http://localhost/api/v1/users/:id
- POST http://localhost/api/v1/users
 `body: {
        "name": "Bogdan",
        "password": "1236",
        "email": "test@n.et"
    }`
- PATCH http://localhost/api/v1/users/:id
`body: {
        "name": "Artem",
        "password": "1234",
        "email": "test@n.et"
    }`
- DELETE http://localhost/api/v1/users/:id
