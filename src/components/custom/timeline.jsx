import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
const AlternateReverseTimeline = ({timelineData}) => {



  return (
    <Timeline position="alternate-reverse">
      {/* First TimelineItem */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent></TimelineContent>
      </TimelineItem>

      {/* Render timeline items dynamically */}
      {timelineData.map((data, index) => (
        <React.Fragment key={data.year}>
          {/* Year Item */}
          <TimelineItem>
            <TimelineSeparator>
              <span className="font-bold text-lg">{data.year}</span>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent></TimelineContent>
          </TimelineItem>

          {/* Details Items */}
          {data.details.map((detail, detailIndex) => {
            const position = (index + detailIndex) % 2 === 0 ? "left" : "right";
            return (
              <TimelineItem key={detail.name} position={position}>
                <TimelineSeparator>
                  <TimelineDot />
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
        </React.Fragment>
      ))}

      {/* Last TimelineItem */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent></TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default AlternateReverseTimeline;
