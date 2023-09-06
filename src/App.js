import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [videosData, setVideosData] = useState([]);
  const [searchVideo, setSearchVideo] = useState("");

  // useEffect(() => {
  //   handleSearch("abs", 10);
  // }, []);

  const handleSearch = async (query, numResults) => {
    try {
      const response = await axios.get('https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos', {
        params: {
          q: query,
          numResults: numResults,
        },
      });

      const videos = response.data; // Process the API response as needed
      // Update your component state with the fetched videos

      setVideosData(videos.results)
      console.log(videos)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <div style={{ width: "100vw" }}>
      <div className='container'>
        <div className='search-div'>
          <div className='search-container'>
            <input type='search' className='search-input' value={searchVideo} onChange={(e) => setSearchVideo(e.target.value)} placeholder='Search your video' />
            <button type='button' className='search-button' onClick={() => handleSearch(searchVideo, 10)}>Search</button>
          </div>
        </div>
        <div className='videos-container'>
          {videosData.map((video, index) => (
            <div key={index} className="video-card">
              <video controls width="100%">
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
