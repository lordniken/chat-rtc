import React from 'react'
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';

export const Message: React.FC = () => {
    return (
        <Comment
            author={<a>lordniken</a>}
            avatar={
                <Avatar alt="lordniken">
                    l
                </Avatar>
            }
            content={
                <p>
                    We supply a series of design principles, practical patterns and high quality design
                    resources (Sketch and Axure), to help people create their product prototypes beautifully
                    and efficiently.
                </p>
            }
            datetime={
                <Tooltip title={moment().format('HH:mm DD.MM.YYYY')}>
                    <span>{moment().fromNow()}</span>
                </Tooltip>
            }
        />
    )
}