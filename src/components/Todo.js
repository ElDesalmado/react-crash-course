import {useState} from 'react';
import Modal from "./Modal";
import Backdrop from "./Backdrop";

const Todo = (props) => {

    const [showModal, setModalActive] = useState(false)

    const deleteHandler = () => {
        console.log(`Delete clicked: ${props.text}`);
        setModalActive(true)
    }

    const closeModalHandler = () => {
        setModalActive(false)
    }

    return <div className='card'>
        <h2>{props.text}</h2>
        <div className='actions'>
            <button className='btn' onClick={deleteHandler}>Delete</button>
        </div>
        {showModal && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
        {showModal && <Backdrop onCancel={closeModalHandler}/>}
    </div>;
}

export default Todo;