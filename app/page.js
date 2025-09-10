"use client";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import VideoGrid from "./components/VideoGrid";

export default function Home() {
  const videoData = [
  {
    id: "ABC",
    title: "RAJ RADADIYA",
    description: "RAJ KI BAKCHODI",
    thumbnail: "/thumbnail.jpg", 
    channel: "BROCODE BY RAJ",
    views: "100",
    uploadedAt: "Dec 21, 2023",
    src: "/videos/ABC.mp4",
  },
  {
    id: "ABCD",
    title: "Video ABCD",
    description: "This is my local video named ABCD.",
    thumbnail: "/thumbnail.jpg",
    channel: "My Local Channel",
    views: "95",
    uploadedAt: "Dec 21, 2023",
    src: "/videos/ABCD.mp4",
  },
  {
    id: "ABCDE",
    title: "Video ABCDE",
    description: "This is my local video named ABCDE.",
    thumbnail: "/thumbnail.jpg",
    channel: "My Local Channel",
    views: "210",
    uploadedAt: "Dec 21, 2023",
    src: "/videos/ABCDE.mp4",
  },
  {
    id: "ABCDEF",
    title: "Video ABCDEF",
    description: "This is my local video named ABCDEF.",
    thumbnail: "/thumbnail.jpg",
    channel: "My Local Channel",
    views: "180",
    uploadedAt: "Dec 21, 2023",
    src: "/videos/ABCDEF.mp4",
  },
  {
    id: "ABCDEFG",
    title: "Video ABCDEFG",
    description: "This is my local video named ABCDEFG.",
    thumbnail: "/thumbnail.jpg",
    channel: "My Local Channel",
    views: "60",
    uploadedAt: "Dec 21, 2023",
    src: "/videos/ABCDEFG.mp4",
  },
  {
    id: "ABCDEFGH",
    title: "Video ABCDEFGH",
    description: "This is my local video named ABCDEFGH.",
    thumbnail: "/thumbnail.jpg",
    channel: "My Local Channel",
    views: "75",
    uploadedAt: "Dec 21, 2023",
    src: "/videos/ABCDEFGH.mp4",
  },
  {
    id: "ABCDEFGHI",
    title: "Video ABCDEFGHI",
    description: "This is my local video named ABCDEFGHI.",
    thumbnail: "/thumbnail.jpg",
    channel: "My Local Channel",
    views: "33",
    uploadedAt: "Dec 21, 2023",
    src: "/videos/ABCDEFGHI.mp4",
  },
];



  const [videos, setVideos] = useState(videoData);
  const [searchResults, setSearchResults] = useState(videos);

  const handleSearch = (query) => {
    const results = videos.filter((video) =>
      video.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  return <>
    <div>
      <div className="container mx-auto p-4">
        <SearchBar handleSearch={handleSearch}/>
        <VideoGrid videos={searchResults}/>
      </div>
    </div>
  </>;
}