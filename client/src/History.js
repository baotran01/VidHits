import React, { useEffect, useState } from "react";
import NavigationBar from "./NavBar/NavigationBar";
import "./css/styles.css";
import client from "./axios";
import HistoryList from "./HistoryList";
import { Grid } from "@material-ui/core";
import HistoryVideoDetail from "./HistoryVideoDetail";

export default function History() {
    const [videoList, setVideoList] = useState([]);
    const [selectedVideo, setselectedVideo] = useState(null);
    const [returnHomePage, setreturnHomePage] = useState(true);
    useEffect(() => {
        let videos = [];
        client
            .get("/viewhistory")
            .then((res) => {
                for (let video in res.data) {
                    videos.push(res.data[video]);
                }
            })
            .then(() => {
                setVideoList(videos);
                console.log(videos[0]);
                setselectedVideo(videos[0]);
            });
    }, []);

    const onVideoSelect = (video) => {
        setselectedVideo(video);
    };

    const deleteFromHistory = () => {
        client.delete('/deleteVideo/' + selectedVideo.id)
            .then(res => {
                console.log(res.data)
                let newvideoList = videoList
                const index = newvideoList.findIndex(obj => obj.id === selectedVideo.id)
                newvideoList.splice(index,1)
                setselectedVideo(newvideoList[0])
                setVideoList(newvideoList)
        })
    }

    return (
        <div>
            <NavigationBar returnHomePage= {returnHomePage} />
            <Grid style={{ justifyContent: "center" }} container spacing={10}>
                <Grid item xs={11}>
                    <Grid container spacing={10}>
                        <Grid item xs={8} className="selectedVideoGrid">
                            <HistoryVideoDetail video={selectedVideo} deleteFromHistory={deleteFromHistory} />
                        </Grid>
                        <Grid item xs={4}>
                            <HistoryList
                                videos={videoList}
                                onVideoSelect={onVideoSelect}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
