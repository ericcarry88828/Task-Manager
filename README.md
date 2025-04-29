# Task Manager
This Task Manager project is designed to efficiently manage tasks through a user-friendly interface. It implements CRUD operations, allowing users to create, read, update, and delete tasks seamlessly. The project includes a front-end page where users can add new to-do items, mark completed tasks with a check, and modify or delete existing tasks. This intuitive design aims to enhance productivity by providing a straightforward way to organize and track tasks.

## Features
The RESTful API allows users to perform the following operations:
- The Task Manager allows users to perform the following operations:
- Create tasks: Add new to-do items with fields such as name and completed status.
- Read tasks: View existing tasks to keep track of pending and completed items.
- Update tasks: Modify task details, including marking tasks as completed.
- Delete tasks: Remove tasks that are no longer needed.

## Deployment
### Local
 - Clone the repository:
 ```
git clone https://github.com/ericcarry88828/Task-Manager.git
```
- Navigate into the directory:
```
cd Task-Manager
```
- Configure the `.env` file:
```
- Open the `.env` file in your preferred text editor.
- Set the `MONGO_URI` variable to point to your local MongoDB instance. For example:
  MONGO_URI=mongodb://127.0.0.1:27017/your-database-name
```
- Install dependencies:
```
npm install
```
- Start the application:
```
npm start
```

### Docker
 - Clone the repository:
```
git clone https://github.com/ericcarry88828/Task-Manager.git
```
- Navigate into the directory:
```
cd Task-Manager
```
- Start the application using Docker:
```
docker compose up
```

- **Important:** If you have changed the MongoDB service name in your `docker-compose.yml`, make sure to update the hostname in the `MONGO_URI`. For example, if the service name is changed to `my-mongo`, set:
    MONGO_URI=mongodb://my-mongo:27017/your-database-name


## Examples
### Create a Task
Create a new task using the following request:

```
POST /api/v1/tasks
```
```josn
{
  "name": "do laundry"
}
```
Response:
```josn
{
  "task": {
    "name": "do laundry",
    "completed": false,
    "_id": "68106a836c6b8acd7064fac7",
    "__v": 0
  }
}
```

### Get a Single Task or All Tasks
Retrieve all tasks. Returns a list of task objects and the total count.

```
GET /api/v1/auth/jobs
```
Response:
```josn
{
  "tasks": [
    {
        "_id": "6810692a6c6b8acd7064faaf",
        "name": "clean room",
        "completed": false,
        "__v": 0
    },
    {
        "_id": "6810692a6c6b8acd7064faae",
        "name": "wash dishes",
        "completed": false,
        "__v": 0
    },
    {
        "_id": "6810692a6c6b8acd7064fab2",
        "name": "exercise",
        "completed": false,
        "__v": 0
    },
    {
        "_id": "6810692a6c6b8acd7064fab3",
        "name": "read a book",
        "completed": false,
        "__v": 0
    },
    {
        "_id": "6810692a6c6b8acd7064fab4",
        "name": "write in journal",
        "completed": false,
        "__v": 0
    },
    {
        "_id": "6810692a6c6b8acd7064fab5",
        "name": "call mom",
        "completed": false,
        "__v": 0
    },
    {
        "_id": "6810692a6c6b8acd7064fab7",
        "name": "finish project",
        "completed": false,
        "__v": 0
    },
    {
        "_id": "6810692a6c6b8acd7064fab1",
        "name": "buy groceries",
        "completed": false,
        "__v": 0
    },
    {
        "_id": "6810692a6c6b8acd7064fab6",
        "name": "study for exam",
        "completed": false,
        "__v": 0
    },
    {
        "_id": "68106a836c6b8acd7064fac7",
        "name": "do laundry",
        "completed": false,
        "__v": 0
    }
  ],
  "count": 10
}
```

Retrieve a single job by its ID. Returns the job object if found, or an error message if not found.
```
GET /api/v1/tasks/68106a836c6b8acd7064fac7
```
```json
{
  "task": {
    "_id": "68106a836c6b8acd7064fac7",
    "name": "do laundry",
    "completed": false,
    "__v": 0
  }
}
```

```json
{
  "msg": "No task with id : 68106a836c6b8acd7064fac8"
}
```

### Update a Task
Update an existing task item using the following request:

```
PATCH /api/v1/tasks/68106a836c6b8acd7064fac7
```
```json
{
  "name": "cook dinner",
}
```

Upon successful update of the task item, respond with the updated details of the item, or an error message if not found.

```json
{
  "task": {
    "_id": "68106a836c6b8acd7064fac7",
    "name": "cook dinner",
    "completed": false,
    "__v": 0
  }
}
```

```json
{
  "msg": "No job with id 680f5a2eadcefa69303daf8d"
}
```

### Delete a Task Item
Delete an existing task item using the following request:
```
DELETE /api/v1/tasks/68106a836c6b8acd7064fac7
```