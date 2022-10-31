# minikube start
# eval $(minikube -p minikube docker-env)
# minikube addons enable ingress
kubectl apply -f ./k8s/postgres-subscriptions
kubectl apply -f ./k8s/postgres-users
kubectl apply -f ./k8s/postgres-tracks
kubectl apply -f ./k8s/subscriptions
kubectl apply -f ./k8s/users
kubectl apply -f ./k8s/tracks
kubectl apply -f ./k8s/client
mlinikube tunnel