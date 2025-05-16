import React, {useState} from 'react'
import Checkbox from '../Checkbox/checkbox'
import Button from '../Buttons/button'
import Input from '../Input/input'
import styles from './taskItems.module.css'


const TaskItems = ({key, task, completed, onToggle, onDelete, onEdit}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedInput, setUpdatedInput] = useState(task.text);
  
  const saveHandler = () => {
    onEdit(updatedInput, task.id)
    setIsEditing(!isEditing)
  }

  console.log("updatedInput", updatedInput)

  return (
    <div>
      <li className={styles.listItem}>
        <div className={styles.itemContainer}>
           <Checkbox 
            checked={task.completed}
            id={`task-${task.id}`}
            onChange={() => onToggle(task.id)}
           />
          {isEditing ?
           <Input   value={updatedInput}
            className={styles.editItem} 
            onChange={(e) => setUpdatedInput(e.target.value)}
            placeholder={task.text}/> 
           : <span className={task.completed ? styles.taskLableDone : styles.taskLable}>{task.text}</span>}
        </div>
         <div className={styles.buttonContainer}>
          {isEditing ? <Button 
           onClick={saveHandler}>
            SAVE
          </Button> :
           
           <Button className={task.completed ? styles.editDoneCss : ''}
           onClick={() => setIsEditing(!isEditing)}>
            EDIT
          </Button>} 
          <Button className={styles.deleteBtn} onClick={ () => onDelete(task.id)}>
            DELETE
          </Button>
         </div>
      </li>
    </div>
  )
}

export default TaskItems