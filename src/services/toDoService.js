import apiURL from '../utils/axios';

export const createTask = task =>
  apiURL.post('/todo/register', {
    task
  });

export const getAllTasks = () =>
  apiURL.get('/todo/all');

export const editTask = (id, task) =>
  apiURL.put('/todo/edit', {
    _id: id,
    task
  });

export const deleteTask = id =>
  apiURL.delete('/todo/delete', {
    data: {
      _id: id
    }
  });

export default { createTask, getAllTasks, editTask, deleteTask };
