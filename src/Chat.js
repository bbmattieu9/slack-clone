import React from 'react'
import './Chat.css'
import { useParams } from 'react-router-dom'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';

function Chat() {

    const { roomId } = useParams();
    return ( 
    <div className='chat'>
        <h2>you are in the { roomId } room</h2>

        <div className="chat__header">

            <div className="chat__headerLeft">
                <h4 className="chat__channelName">
                    <strong>
                        #general
                    </strong>
                    <StarBorderOutlinedIcon />
                </h4>
            </div>

            <div className="chat__headerRight">

            </div>
        </div>
    </div>
    );
}

export default Chat
