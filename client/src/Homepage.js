import React, { useEffect, useState } from "react";
import NavigationBar from "./NavBar/NavigationBar";
import client from "./axios";
import "./css/styles.css";
import youtubeClient from "./apis/youtube";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import { Grid } from "@material-ui/core";



export default function Homepage() {
  const [nameNavBar, setnameNavBar] = useState("");
  const [logOutButton, setlogOutButton] = useState(false);
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setselectedVideo] = useState(null);
  const [viewHistory, setviewHistory] = useState(true);
  const [show, setShow] = useState(false);
  

  useEffect(() => {
    client.get("/profile").then((res) => {
      setnameNavBar(res.data);
    });
    client.get("/logout").then((res) => {
      if (res.data === "User is logged out successfully") {
        setlogOutButton(true);
      }
    });
  });

  async function handleSubmit(searchTerm) {
    const { data: { items: videos } } = await youtubeClient.get("search", {
      params: {
        maxResults: 5,
        q: searchTerm,
      }
    });

    setVideos(videos);
    setselectedVideo(videos[0]);
    setShow(false)
  }

  const onVideoSelect = (video) => {
    setselectedVideo(video);
  };

  const setShowChange = boolean => {
    if (boolean === false){
      setShow(false)
    }
    else {
      setShow(true)
    }
  }

  return (
    <div>
      <NavigationBar nameNavBar={nameNavBar} logOutButton={logOutButton} viewHistory = {viewHistory} />
      <Grid style={{ justifyContent: "center" }} container spacing={10}>
        <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onSubmit={handleSubmit} />
            </Grid>
            <Grid item xs={8} className='selectedVideoGrid'>
              <VideoDetail video={selectedVideo} userName={nameNavBar} show={show} setShow={setShowChange}/>
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
