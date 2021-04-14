import React from 'react'
import './Post.css';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import PostBody from './PostBody';
import PostGraph from './PostGraph';

function Post() {
    return (
        <div className="post">
            <div className="post__header">
                <div className="post__headerleft">
                    <div className="post__headerlefttop">
                    <h5>Notice</h5>
                    <h5>Latest Post</h5>
                    </div>

                    <div className="post__headerleftbody">
                        <div className="post__headerleftbodyinner">
                        <InsertDriveFileOutlinedIcon className="icon"/>
                        <small>
                        <a href="">Update</a>

                        Guide to earning Game Point due to bulletin board ov
                        </small>
                        </div>

                        <div className="post__headerleftbodyinner">
                        <InsertDriveFileOutlinedIcon className="icon"/>
                        <small>
                        <a href="">Update</a>

                        Guide to earning Game Point due to bulletin board ov
                        </small>
                        </div>

                        <div className="post__headerleftbodyinner">
                        <InsertDriveFileOutlinedIcon className="icon"/>
                        <small>
                        <a href="">Update</a>

                        Guide to earning Game Point due to bulletin board ov
                        </small>
                        </div>

                        <div className="post__headerleftbodyinner">
                        <InsertDriveFileOutlinedIcon className="icon"/>
                        <small>
                        <a href="">Update</a>

                        Guide to earning Game Point due to bulletin board ov
                        </small>
                        </div>
                    </div>

                </div>

                <div className="post__headerright">
                <div className="post__headerrighttop">
                <h5>Popular Post</h5>
                <h5>Freedom</h5>
                <h5>humor</h5>
                </div>

                <div className="post__headerrightinner">
                <p>
                1 st[Freedom] Who will be friends with me Telegram~^^ Go!
                </p>
                <p>
                2nd place[Free] Attendance.
                </p>
                <p>
                3rd place[Freedom] Exodus
                </p>
                <p>
                No. 4
                </p>
                </div>
                </div>

            </div>

            <div className="mockinvestment">
            <div className="mock">
            <div className="mock1">
            <h2>NASDAQ Mock Investment</h2>
            </div>
            <div className="mock2">
            <h2>NASDAQ Mock Investment Guide</h2>
            </div>
            </div>

            <div className="mockguide">
            <p className="mockguidep1">
            Monavi Nasdaq Mo Investment can be participated only with Game Point, which can be obtained through community (writing/logging in).
            </p>
            <p>
            Monavi has nothing to do with real investment and is a virtual simulated investment content.
            </p>

            <p>
            Game Point cannot be exchanged or exchanged for cash, and Nasdaq Mo investment is provided for community purposes.
            </p>

            <p className="mockguidep2">
            For more information on how to use it, please refer to the simulated investment usage guide menu.
            </p>
            </div>

            </div>

            <div className="post__body">
                   <PostBody />
                   <PostGraph />
            </div>
        </div>
    )
}

export default Post
