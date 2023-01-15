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

Make sure you have [Minikube](https://kubernetes.io/uk/docs/tasks/tools/install-minikube/) and [kubectl](https://kubernetes.io/docs/tasks/tools/) installed.
 
1. Clone the repo:
 ```sh
 git clone https://github.com/Bogdan-Zinovij/Ecstasify.git
 ```

2. Start minikube
 ```sh
 minikube start
 ```

3. Switch to the minikube environment
 ```sh
 eval $(minikube -p minikube docker-env)
 ```

4. Enable extensions for minikube
 ```sh
 minikube addons enable ingress
 ```
 
Create the configuration file `.env` for each service as shown in the respective `.env.example` files.
 
5. Create Docker images of service migrations
 ```sh
 docker build -t tracks-migrations:0.1 -f ./services/tracks/migrations/Dockerfile .
 docker build -t users-migrations:0.1 -f ./services/users/src/db/migrations/Dockerfile .
 docker build -t authors-migrations:0.1 -f ./services/authors/src/db/migrations/Dockerfile .
 docker build -t subscriptions-migrations:0.1 -f ./services/subscriptions/src/db/migrations/Dockerfile .
 docker build -t playlists-migrations:0.1 -f ./services/playlists/migrations/Dockerfile .
 docker build -t files-migrations:0.1 -f ./services/files/src/db/migrations/Dockerfile .
 ```

6. Create a Docker image for each service and client
 ```sh
 docker build -t tracks:0.1 ./services/tracks/
 docker build -t users:0.1 ./services/users/
 docker build -t authors:0.1 ./services/authors/
 docker build -t subscriptions:0.1 ./services/subscriptions/
 docker build -t notifications:0.1 ./services/notifications/
 docker build -t playlists:0.1 ./services/playlists/
 docker build -t files:0.1 ./services/files/
 docker build -t client:0.1 ./services/client/
 ```

7. Сompile dependencies for all services
 ```sh
 helm dep build ./helm/charts/tracks
 helm dep build ./helm/charts/users
 helm dep build ./helm/charts/subscriptions
 helm dep build ./helm/charts/authors
 helm dep build ./helm/charts/notifications
 helm dep build ./helm/charts/playlists
 helm dep build ./helm/charts/files
 ```

8. Сompile the dependencies for the application
 ```sh
 helm dep update helm
 helm dep build helm
 ```

9. Install the ecstasify app
 ```sh
 helm install ecstasify ./helm
 ```

10. Run the tunnel in a separate terminal
 ```sh
 minikube tunnel
 ```
 
11. Open http://localhost to view the app in your browser.
