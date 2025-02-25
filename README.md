# Project Attempt: E-commerce Marketplace PWA

## Disclaimer
Due to time constraints and managing a full-time job, I was unable to fully complete this task. However, I wanted to share my attempt at the exercise. I hope this provides some insight into my approach and thought process.

## Project Overview
This project follows a microservices architecture, consisting of the following components:

1. **pwa-api-gateway** - Acts as the API gateway for routing requests to the appropriate services.
2. **pwa-core** - Handles business logic and core functionalities.
3. **pwa-db** - Manages data persistence and database interactions.
4. **pwa-ui** - Provides the front-end user interface.

## Technologies Used
- **Microservices Architecture**
- **Node.js**
- **Database** (PostgreSQL)
- **React**
- **Docker** (for containerization)

## Setup Instructions

1. in your linux envinronment with docker engine installed, Clone the repository:
    ```sh
    git clone <repository-url>
    ```

2. create docker network
    ```
    docker network create --subnet 172.18.0.0/16 pwa_network
    ```

3. cd inside the repo and bring up the server
    ```
    docker compose up -d
    ```
4. if your linux envinronment ip adddress is accessible for example 192.168.1.x open your browser and open
    ```
    https://192.168.1.100
    ```
5. to stop the server command
    ```
    docker compose down
    ```

## Future Enhancements
If time permits, these areas could be improved:

- Complete implementation of all microservices, created the container to discover all containers and register them automatically to kong gateway
- Integration with authentication mechanisms
- Improved error handling and logging
- Comprehensive testing

## Conclusion
While this project is incomplete, I hope it serves as a useful reference. Feel free to explore and contribute as needed. Thanks for reviewing my work!