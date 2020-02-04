import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation} from 'react-i18next';
import swal from 'sweetalert';
import { createTask, getAllTasks, editTask, deleteTask } from '../../services/toDoService';

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textTask: '',
      posts: []
    };
    this.onClickAdd = this.onClickAdd.bind(this);
    this.onClickEdit = this.onClickEdit.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
  }

  componentDidMount() {
    this.getAllDataTasks();
  }

  onClickAdd() {
    const { textTask } = this.state;
    if (textTask !== '') {
      this.addTask(textTask);
    }
  }

  onClickEdit(id) {
    swal("Ingrese la nueva tarea:", {
      content: "input",
    })
    .then((value) => {
      if (value) {
        this.editItemTask(id,value);
      }
    });
  }

  onClickDelete(id) {
    const { t } = this.props;
    swal({
      title: t('are-you-sure'),
      text: t('delete-warning'),
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          this.deleteItemTask(id);
        }
      });
  }

  onChangeInput(e) {
    const { value } = e.target;
    this.setState({
      textTask: value
    });
  }

  addTask(task) {
    createTask(task).then(res => {
      if (res.status === 201) {
        this.getAllDataTasks();
        this.setState({ textTask: '' });
      }
    })
  }

  editItemTask(id, task) {
    editTask(id, task).then(res => {
      if (res.status === 204) {
        this.getAllDataTasks();
      }
    });
  }

  getAllDataTasks() {
    getAllTasks().then(res => {
      this.setState({
        posts: res.data
      });
    });
  }

  deleteItemTask(id) {
    const { t } = this.props;
    deleteTask(id).then(res => {
      if (res.status === 204) {
        this.getAllDataTasks();
        swal(t('success-delete'), {
          icon: "success",
        });
      }
    });
  }

  render() {
    const { t } = this.props;
    const { posts, textTask } = this.state;
    return(
      <>
        <div className="flex items-center justify-center my-4">
          <div className="text-center">
            <h1 className="font-semibold text-2xl">{t('todo-list')}</h1>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center w-1/2">
            <div className="w-2/3">
              <div className="flex flex-1">
                <input value={textTask} placeholder={t('add-task')} type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => this.onChangeInput(e)} />
              </div>
            </div>
            <div className="w-1/3">
              <div className="ml-4 flex flex-1">
                <button
                  type="button"
                  className="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded focus:outline-none"
                  onClick={() => this.onClickAdd()}
                >
                  {t('add')}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <table className="table-auto w-full">
            <thead>
            <tr>
              <th className="px-4 py-2">{t('task')}</th>
              <th className="px-4 py-2">{t('edit')}</th>
              <th className="px-4 py-2">{t('delete')}</th>
            </tr>
            </thead>
            <tbody>
              {posts && posts.map(item => (
                // eslint-disable-next-line no-underscore-dangle
                <tr key={item._id}>
                  <td className="border px-4 py-2">{item.task}</td>
                  <td className="border px-4 py-2 text-center">
                    <button
                      type="button"
                      className="w-18 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-1 px-4 border border-green-500 hover:border-transparent rounded focus:outline-none"
                      onClick={() => this.onClickEdit(item._id)}
                    >
                      {t('edit')}
                    </button>
                  </td>
                  <td className="border px-4 py-2 text-center">
                    <button
                      type="button"
                      className="w-18 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-4 border border-red-500 hover:border-transparent rounded focus:outline-none"
                      onClick={() => this.onClickDelete(item._id)}
                    >
                      {t('delete')}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>);
  }
}

MainContent.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation()(MainContent);
