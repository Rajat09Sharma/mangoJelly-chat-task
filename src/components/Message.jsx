import Avatar from '@mui/material/Avatar';
import { useEffect, useRef } from 'react';

export default function Message({ userId, message, time, name, lastMsg }) {
    const scrollToCurrentMsgRef=useRef();
    let msgBoxCSS = " msg-box "
    let msgRowCSS = "msg-row my-4 "
    let msgTextCSS = "msg-text "
    if (userId) {
        msgRowCSS += " msg-row-user";
        msgTextCSS += " msg-text-user";
        msgBoxCSS += " msg-box-user";
    }

    useEffect(()=>{
       if(lastMsg){
        scrollToCurrentMsgRef.current.scrollIntoView();
       } 
    },[lastMsg])

    return (
        <div ref={lastMsg?scrollToCurrentMsgRef:null} className={msgBoxCSS}>
            <div className={msgRowCSS}>
                <div className={msgTextCSS}>
                    <h2>{message}</h2>
                    <span>{time}</span>
                </div>
                <div className='avatar mx-2'>
                    <Avatar>{name.slice(0, 1).toUpperCase()}</Avatar>
                </div>
            </div>
        </div>
    )
}
