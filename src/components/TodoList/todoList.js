import React, {useState, useEffect} from 'react';
import styles from './todoList.module.css'
import Input from '../Input/input';
import Button from '../Buttons/button';
import TaskItems from '../TaskItems/taskItems';

const TodoList = () => {
  
  const [taskValue, setTaskValue] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [filteredTaskList, setFilteredTaskList] = useState([])
  const [filterType, setFilterType] = useState('all');

  const addTaskHandler = () => {
    if(taskValue.trim()){
      setTaskList([...taskList, 
      { 
        id: Date.now(),
        text: taskValue.trim(),
        completed: false
      } ]);
      setTaskValue("");
      setFilteredTaskList([...taskList, 
      { 
        id: Date.now(),
        text: taskValue.trim(),
        completed: false
      } ])
    }
  }

  const handleKeyDown = (e) => {
    if(e.key === 'Enter'){
      addTaskHandler()
    }
  }

  const taskToggleHandler = (id) => {
    console.log("task toggle",id )
    const updatedTaskList = taskList.map((item) => {
      if(item.id === id) {
        item.completed = !item.completed
      }
      return item
    })
   setTaskList(updatedTaskList)
  }

  const deleteTask = (id) => {
      const updatedTaskList = taskList.filter((item) => item.id !== id)
      setTaskList(updatedTaskList)
  } 

  const editTask = (updatedValue, id) => {
    const updatedTaskList = taskList.map((item) => {
        if(item.id === id) {
          item.text = updatedValue
        }
        return item
    })
    setTaskList(updatedTaskList)
  }

  const filterTaskList = () => {
  if (filterType === 'all') {
    return taskList;
  } else if (filterType === 'completed') {
    return taskList.filter((task) => task.completed);
  } else if (filterType === 'pending') {
    return taskList.filter((task) => !task.completed);
  } else if (filterType === 'clearAll') {
      setTaskList([])
    return taskList
  }
};

// Update the filteredTaskList state
useEffect(() => {
  setFilteredTaskList(filterTaskList());
}, [taskList, filterType, filterTaskList]);

// Update the filterType state when a filter button is clicked
const handleFilterAll = () => {
  setFilterType('all');
};

const handleFilterCompleted = () => {
  setFilterType('completed');
};

const handleFilterPending = () => {
  setFilterType('pending');
};

const clearAllHandler = () => {
  setFilterType('clearAll');
}
  return (
    <div className={styles.todoContainer}>
        <h1 className={styles.headerTodo}>TodoList</h1>
        <div className={styles.listContainer}>
        <div className={styles.inputContainer}>
          <Input placeholder='create a task'
            value={taskValue}
            onKeyDown={handleKeyDown}
            onChange={(e) => setTaskValue(e.target.value)} />
          <Button onClick={addTaskHandler}>
            Add Task
          </Button>
        </div>
        <h5>{filterType.toUpperCase()} TASK</h5>

        <ul style={{listStyle:"none", overflowY: "scroll", height: "calc(100% - 120px)" }}>
           {filteredTaskList.map((task, i) => {
            return (
              <TaskItems 
               key={task.id}
               completed={task.completed}
               task={task}
               onToggle={taskToggleHandler}
               onDelete={deleteTask}
               onEdit={editTask}
              />
            )
           })}
        </ul>

        
      </div>
      <div className={styles.filtersbtns}>
          <Button onClick={handleFilterAll} className={styles.allBtn}>
            ALL
          </Button>
          <Button onClick={handleFilterCompleted} className={styles.completedBtn}>
            COMPLETED
          </Button>
          <Button onClick={handleFilterPending} className={styles.pendingBtn}>
            PENDING
          </Button>
          <Button onClick={clearAllHandler} className={styles.clearBtn}>
            Clear All
          </Button>
        </div>
    </div>
  )
}

export default TodoList