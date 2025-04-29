const Task = require('./models/tasks');
const josnTasks = require('./tasks.json');

const populate = async () => {
  try {
    await Task.deleteMany();
    await Task.create(josnTasks);
  } catch (error) {
    console.log(error);
  }
};
module.exports = populate;
