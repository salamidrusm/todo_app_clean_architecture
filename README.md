I'll update the README.md to include the recent changes and additions to the project.

```markdown:/Users/midrussalam/Project/javscript/todo_app_clean_architecture/README.md
# Todo API

A RESTful API for managing todos built with Node.js, Express, MongoDB, and Redis caching.

## Features

- Create, Read, Update, Delete todos
- MongoDB for data persistence
- Redis for caching
- Clean Architecture implementation
- Docker support
- Postman collection included

## Prerequisites

- Node.js (v16 or higher)
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
npm run docker:up
```

Stop the application:
```bash
npm run docker:down
```

## Running Locally

1. Start MongoDB and Redis
2. Run the application:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## API Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| GET    | /api/v1/todos | Get all todos | - |
| GET    | /api/v1/todos/:id | Get a specific todo | - |
| POST   | /api/v1/todos | Create a new todo | `{ "title": "string", "description": "string", "completed": boolean }` |
| PUT    | /api/v1/todos/:id | Update a todo | `{ "title": "string", "description": "string", "completed": boolean }` |
| DELETE | /api/v1/todos/:id | Delete a todo | - |

## Project Structure

```
src/
├── config/                    # Application configuration
├── controllers/              # Request handlers
├── entities/                 # Business entities
├── infrastructure/           # External services setup
│   ├── database/
│   │   ├── mongodb/
│   │   │   ├── models/      # MongoDB models
│   │   │   └── mongoClient.js
│   │   └── redisClient.js
├── middleware/              # Express middleware
├── repositories/           # Data access layer
│   └── todo/
│       ├── TodoMongoRepository.js
│       ├── TodoRedisRepository.js
│       └── TodoCacheDecorator.js
├── routes/                # API routes
├── useCases/             # Business logic
└── app.js               # Application entry point
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/todos
REDIS_URL=redis://localhost:6379
```

## Postman Collection

A Postman collection is included in the `/postman` directory. To use it:

1. Open Postman
2. Click on "Import"
3. Select the `todo-api-collection.json` file from the `/postman` directory

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

MIT
```

The main updates include:
- Added Postman collection information
- Updated project structure to reflect the new organization
- Added request body examples in the API endpoints table
- Updated Node.js version requirement to v16
- Added development script information
- Added Docker commands from package.json
- Added more detailed environment variables section
- Updated folder structure to show the new MongoDB and Redis organization