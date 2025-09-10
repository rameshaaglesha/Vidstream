import Link from 'next/link'
import React from 'react'

export default function VideoCard({ video }) {
  return (
    <Link
      href={`/videos/${video.id}`}
      className="max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg rounded overflow-hidden m-4 transition-transform transform hover:scale-105 bg-gray-900"
    >
      {/* 🎬 Local video preview instead of image */}
      <video
        src={video.src}
        className="w-full h-48 object-cover"
        muted
        playsInline
        preload="metadata"
        onMouseOver={e => e.currentTarget.play()}
        onMouseOut={e => { e.currentTarget.pause(); e.currentTarget.currentTime = 0 }}
      ></video>

      <div className="p-4">
        <h2 className="font-bold text-lg mb-2 truncate text-white">{video.title}</h2>
        <p className="text-gray-400 text-sm mb-2 truncate">{video.channel}</p>
        <p className="text-gray-500 text-sm mb-2">
          {video.views} views • {video.uploadedAt}
        </p>
      </div>
    </Link>
  )
}
