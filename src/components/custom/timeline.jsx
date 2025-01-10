import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { useState,useEffect } from 'react';
const AlternateReverseTimeline = ({timelineData}) => {

    const [pos, setPos] = useState('alternate-reverse');

  useEffect(() => {
    const handleResize = () => {
        console.log(window.innerWidth);
      if(window.innerWidth>765) setPos('alternate-reverse');
      else setPos('left');
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  console.log(pos);

  return (
    <Timeline
      position="alternate-reverse"
    >
      {/* First TimelineItem */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent></TimelineContent>
      </TimelineItem>

      {/* Render timeline items dynamically */}
      {timelineData.map((data, index) => {
        return <>
          {/* Year Item */}
          <TimelineItem key={data.year} >
            <TimelineSeparator>
              <span className="font-bold text-lg">{data.year}</span>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent></TimelineContent>
          </TimelineItem>

          {/* Details Items */}
          {data.details.map((detail, detailIndex) => {
            let aposition = (index + detailIndex) % 2 === 0 ? "left" : "right";
            if(pos==="left") aposition="left";
            return (
              <TimelineItem key={detail.name} position={aposition}>
                <TimelineSeparator>
                  <TimelineDot color="primary"/>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <div className="p-4 border rounded-md shadow">
                    <h1 className="text-xl font-semibold">{detail.name}</h1>
                    <p className="text-gray-600">{detail.description}</p>
                    <img
                      src={detail.image}
                      alt={`${detail.name} image`}
                      className="w-32 h-32 rounded-full mt-4"
                    />
                  </div>
                </TimelineContent>
              </TimelineItem>
            );
          })}
            </>
    })}

      {/* Last TimelineItem */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary"/>
        </TimelineSeparator>
        <TimelineContent></TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default AlternateReverseTimeline;
