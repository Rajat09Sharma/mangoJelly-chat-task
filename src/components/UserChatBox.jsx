import Message from "./Message";
import Navbar from "./Navbar";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux"
import { messageAction } from "../store/index.js";


export default function UserChatBox() {
    const msgInput = useRef();
    const msgList = useSelector(state => state.message.message);
    const dispatch = useDispatch();

    function handleMessageSubmit(event) {
        event.preventDefault();
        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd.entries());
        msgInput.current.value = "";
        // console.log(data);
        const d = new Date();
        const millSecond = d.getMilliseconds();
        const date = d.toDateString();
        const time = d.toLocaleTimeString();
        const result = {
            ...data,
            millSecond,
            time,
            date,
            userId: 1,
            name: "User"
        }
        // console.log(result);
        dispatch(messageAction.sendMessage(result))
    }

    return (
        <div className="chat-box-container">
            <Navbar />
            <div className="chat-box px-4">
                {
                    msgList.map(e => {
                        return (
                            <Message key={e.millSecond} userId={e.userId ? true : false} message={e.message} name={e.name} time={e.time} />
                        )
                    })
                }
            </div>
            <form className="d-flex px-2 msg-form" onSubmit={handleMessageSubmit}>
                <input ref={msgInput} className="form-control me-2 bg-dark text-light" type="e" name="message" />
                <Button variant="contained" type="submit" endIcon={<SendIcon />}>Send</Button>
            </form>
        </div>
    )
}
