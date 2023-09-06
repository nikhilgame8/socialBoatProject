// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import Loader from './Components/Loader';
import VideoCard from './Components/VideoCard';
import SearchBar from './Components/SearchBar';
import Navbar from './Components/Navbar';
import { useLottie } from "lottie-react";
import workoutAnimation from "./workoutAnimation.json";

function App() {

  const [videosData, setVideosData] = useState([]);
  const [searchVideo, setSearchVideo] = useState("");
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   handleSearch("abs", 10);
  // }, []);

  const handleSearch = async (query, numResults) => {
    setLoading(true);
    try {
      const response = await axios.get('https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos', {
        params: {
          q: query,
          numResults: 20,
        },
      });

      const videos = response.data; // Process the API response as needed
      // Update your component state with the fetched videos

      setVideosData(videos.results)
      // setSearchVideo("");
      console.log(videos)
    } catch (error) {
      // console.error('Error fetching data:', error);
      setVideosData([]);
    } finally {
      setLoading(false);
    }
  };
  const handleSearchByEnter = (event) => {
    if (event.key === 'Enter') {
      handleSearch(searchVideo, 10); // Calling your video search function here
    }
  };

  const options = {
    animationData: workoutAnimation,
    loop: true
  };

  const { View } = useLottie(options);

  return (
    <div>
      <Navbar />
      <div className='background-animation'>
        {View}
      </div>
      <div className='container'>
        <SearchBar searchVideo={searchVideo} handleSearch={handleSearch} handleSearchByEnter={handleSearchByEnter} setSearchVideo={setSearchVideo} />
        <section className='view-section'>
          {
            loading ?
              <Loader />
              :
              <div className='videos-container'>
                {videosData.map((video, index) => (
                  <div key={index}>
                    <VideoCard video={video} handleSearch={handleSearch} />
                  </div>
                ))}
              </div>
          }
        </section>
      </div>
    </div>
  );
}

export default App;
