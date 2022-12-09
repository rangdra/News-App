'use client';

import TimeAgo from 'react-timeago';

interface IProps {
  time: string;
}

function LiveTimeStamp({ time }: IProps) {
  return <TimeAgo date={time} />;
}

export default LiveTimeStamp;
