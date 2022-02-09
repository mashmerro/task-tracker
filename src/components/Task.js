import { FaTimes } from 'react-icons/fa';    // X delete icon for task

const Task = ({task, onDelete}) => {
    return(
        <div className='task'>
            <h3>
                {task.text} 
                <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)} /> 
                {/* Props gets passed down (onDelete), actions gets passed up (onClick) */}
            </h3> 
            <p>{task.day}</p>
        </div>
    );
}

export default Task