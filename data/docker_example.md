# docker example commands

## 100 docker Example Commands

```bash
# 1. Show docker version
docker --version

# 2. Show detailed system info
docker info

# 3. Pull an image from Docker Hub
docker pull nginx

# 4. Pull a specific tag
docker pull node:18-alpine

# 5. List downloaded images
docker images

# 6. List images with all details
docker images --all

# 7. Search Docker Hub for an image
docker search ubuntu

# 8. Remove an image
docker rmi nginx

# 9. Remove all unused images
docker image prune -a

# 10. Run a container from an image
docker run nginx

# 11. Run a container in detached mode (background)
docker run -d nginx

# 12. Run and give the container a name
docker run -d --name my-nginx nginx

# 13. Run with port mapping (host:container)
docker run -d -p 8080:80 nginx

# 14. Run with environment variable
docker run -d -e DATABASE_URL=postgres://localhost/db my-app

# 15. Run with a volume mount
docker run -d -v /host/path:/container/path nginx

# 16. Run with a named volume
docker run -d -v mydata:/app/data my-app

# 17. Run with resource limits (CPU and memory)
docker run -d --cpus="1.5" --memory="512m" my-app

# 18. Run and remove the container when it exits
docker run --rm ubuntu echo "Hello"

# 19. Run interactively with a terminal
docker run -it ubuntu bash

# 20. Run a one-off command in a new container
docker run --rm python:3.11 python -c "print('hello')"

# 21. List running containers
docker ps

# 22. List all containers (including stopped)
docker ps -a

# 23. List containers showing only IDs
docker ps -q

# 24. Stop a running container
docker stop my-nginx

# 25. Start a stopped container
docker start my-nginx

# 26. Restart a container
docker restart my-nginx

# 27. Kill a container immediately
docker kill my-nginx

# 28. Remove a stopped container
docker rm my-nginx

# 29. Force remove a running container
docker rm -f my-nginx

# 30. Remove all stopped containers
docker container prune

# 31. Execute a command in a running container
docker exec my-nginx ls /etc/nginx

# 32. Open an interactive shell in a running container
docker exec -it my-nginx bash

# 33. View container logs
docker logs my-nginx

# 34. Follow (tail) container logs
docker logs -f my-nginx

# 35. Show last 50 log lines
docker logs --tail 50 my-nginx

# 36. Show logs with timestamps
docker logs -t my-nginx

# 37. Show container resource usage stats
docker stats

# 38. Show stats for a specific container
docker stats my-nginx

# 39. Show running processes in a container
docker top my-nginx

# 40. Inspect low-level container details (JSON)
docker inspect my-nginx

# 41. Get a specific field from inspect output
docker inspect -f '{{.NetworkSettings.IPAddress}}' my-nginx

# 42. Copy a file from container to host
docker cp my-nginx:/etc/nginx/nginx.conf ./nginx.conf

# 43. Copy a file from host to container
docker cp ./config.conf my-nginx:/etc/nginx/nginx.conf

# 44. Show changes to container filesystem
docker diff my-nginx

# 45. Commit a container to a new image
docker commit my-nginx my-nginx-custom

# 46. Build an image from a Dockerfile
docker build -t my-app .

# 47. Build with a specific Dockerfile
docker build -f Dockerfile.prod -t my-app:prod .

# 48. Build with a build argument
docker build --build-arg NODE_ENV=production -t my-app .

# 49. Build without cache
docker build --no-cache -t my-app .

# 50. Tag an image
docker tag my-app:latest my-registry.com/my-app:1.0.0

# 51. Push an image to a registry
docker push my-registry.com/my-app:1.0.0

# 52. Log in to a registry
docker login my-registry.com

# 53. Log out of a registry
docker logout my-registry.com

# 54. Save an image to a tar archive
docker save -o my-app.tar my-app:latest

# 55. Load an image from a tar archive
docker load -i my-app.tar

# 56. Export a container's filesystem as a tar
docker export my-nginx -o nginx-fs.tar

# 57. Import a filesystem tar as an image
docker import nginx-fs.tar my-nginx-imported

# 58. List networks
docker network ls

# 59. Create a network
docker network create my-network

# 60. Run a container on a specific network
docker run -d --network my-network --name app my-app

# 61. Connect a running container to a network
docker network connect my-network my-nginx

# 62. Disconnect from a network
docker network disconnect my-network my-nginx

# 63. Remove a network
docker network rm my-network

# 64. Inspect a network
docker network inspect my-network

# 65. List volumes
docker volume ls

# 66. Create a volume
docker volume create mydata

# 67. Inspect a volume
docker volume inspect mydata

# 68. Remove a volume
docker volume rm mydata

# 69. Remove all unused volumes
docker volume prune

# 70. Show port mappings for a container
docker port my-nginx

# 71. Run with a restart policy
docker run -d --restart unless-stopped nginx

# 72. Run with always-restart policy
docker run -d --restart always nginx

# 73. Display image history (layers)
docker history my-app

# 74. Pull and run in one step
docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=secret postgres:14

# 75. Run Redis in the background
docker run -d --name redis -p 6379:6379 redis:alpine

# 76. Run MySQL with environment variables
docker run -d \
  --name mysql \
  -e MYSQL_ROOT_PASSWORD=secret \
  -e MYSQL_DATABASE=mydb \
  -p 3306:3306 \
  mysql:8

# 77. Create multi-stage build image
docker build --target production -t my-app:prod .

# 78. Use BuildKit (faster builds)
DOCKER_BUILDKIT=1 docker build -t my-app .

# 79. Squash image layers
docker build --squash -t my-app .

# 80. Run a container with a health check
docker run -d \
  --health-cmd="curl -f http://localhost/health || exit 1" \
  --health-interval=30s \
  --health-retries=3 \
  my-app

# 81. Run Docker Compose (v2 plugin)
docker compose up

# 82. Run Docker Compose in detached mode
docker compose up -d

# 83. Stop Docker Compose services
docker compose down

# 84. Rebuild Docker Compose services
docker compose up --build

# 85. View Docker Compose logs
docker compose logs -f

# 86. Run a one-off command via Compose
docker compose run app bash

# 87. Scale a Compose service
docker compose up -d --scale web=3

# 88. List Compose services
docker compose ps

# 89. Execute command in a Compose service container
docker compose exec web bash

# 90. Pull all Compose images
docker compose pull

# 91. Show image manifest (multi-arch)
docker manifest inspect nginx:latest

# 92. Remove all stopped containers, dangling images, unused networks
docker system prune

# 93. Full system prune including volumes
docker system prune -a --volumes

# 94. Show disk usage
docker system df

# 95. Show disk usage verbose
docker system df -v

# 96. View events in real time
docker events

# 97. Filter events by container name
docker events --filter "container=my-nginx"

# 98. Run with host network (no network isolation)
docker run -d --network host nginx

# 99. Run a privileged container
docker run --privileged -it ubuntu bash

# 100. Show docker version (full)
docker version
```
