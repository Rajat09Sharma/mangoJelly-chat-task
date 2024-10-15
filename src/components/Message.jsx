import Avatar from '@mui/material/Avatar';

export default function Message({ userId, message, time, name }) {

    let msgBoxCSS = " msg-box "
    let msgRowCSS = "msg-row my-4 "
    let msgTextCSS = "msg-text "
    if (userId) {
        msgRowCSS += " msg-row-user";
        msgTextCSS += " msg-text-user";
        msgBoxCSS += " msg-box-user";
    }

    return (
        <div className={msgBoxCSS}>
            <div className={msgRowCSS}>
                <div className={msgTextCSS}>
                    <h2>{message}</h2>
                    <span>{time}</span>
                </div>
                <div className='avatar mx-2'>
                    <Avatar sx={{ width: 46, height: 46 }} >{name.slice(0, 1).toUpperCase()}</Avatar>
                </div>
            </div>
        </div>
    )
}
