# Todo API

A RESTful API for managing todos built with Node.js, Express, MongoDB, and Redis caching.

## Features

- Create, Read, Update, Delete todos
- MongoDB for data persistence
- Redis for caching
- Clean Architecture implementation
- Docker support

## Prerequisites

- Node.js (v14 or higher)
- Docker and Docker Compose
- MongoDB
- Redis

## Installation

1. Clone the repository
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies
```bash
npm install
```


## Running with Docker

Start the application and its dependencies:
```bash
docker-compose up --build
```

## Running Locally

1. Start MongoDB and Redis
2. Run the application:
```bash
npm start
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/v1/todos | Get all todos |
| GET    | /api/v1/todos/:id | Get a specific todo |
| POST   | /api/v1/todos | Create a new todo |
| PUT    | /api/v1/todos/:id | Update a todo |
| DELETE | /api/v1/todos/:id | Delete a todo |

## Project Structure

```
src/
├── config/           # Application configuration
├── controllers/      # Request handlers
├── entities/         # Business entities
├── infrastructure/   # External services setup
├── interfaces/       # Interface definitions
├── middleware/       # Express middleware
├── repositories/     # Data access layer
├── routes/          # API routes
├── useCases/        # Business logic
└── app.js           # Application entry point
```

## Environment Variables

- `PORT` - Application port (default: 3000)
- `MONGODB_URI` - MongoDB connection string
- `REDIS_URL` - Redis connection string

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

MIT