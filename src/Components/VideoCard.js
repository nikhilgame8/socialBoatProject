import React from 'react'

const VideoCard = ({video, handleSearch}) => {
    return (
        <div className="video-card">
            <video controls style={{ borderRadius: '10px' }} width="100%">
                <source src={video.video} type="video/mp4" />
                <source src={video.video} type="video/webm" />
                <source src={video.video} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
            <h3>{video.heading}</h3>
            <p className='video-description'>{video.text}</p>
            {/* <div>{video.video}</div> */}
            <div className='video-tag-container'>
                {
                    video.tags.map((tag, tagIndex) => (
                        <div className='video-tag' onClick={() => handleSearch(tag, 10)}>{tag}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default VideoCard