import Image from "next/image";
import Link from "next/link";

export default function VideoDetail({ params }) {
    const { id } = params;

    const video = videoData.find((video) => video.id === id);

    if (!video) {
        return <p className="text-white">Video not found.</p>;
    }

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col lg:flex-row lg:space-x-8">
                <div className="lg:w-2/3 w-full text-white">
                    {/* 🎬 Show local video */}
                    <video
                        src={video.src}
                        controls
                        autoPlay
                        className="w-full h-[300px] md:h-[450px] lg:h-[600px] rounded"
                    ></video>

                    <h1 className="text-xl md:text-2xl font-bold mt-4">{video.title}</h1>
                    <p className="mt-2 text-gray-400">{video.description}</p>
                </div>

                {/* Recommended videos */}
                <div className="lg:w-1/3 w-full text-white mt-8 lg:mt-0">
                    <h2 className="text-xl font-semibold mb-4">Recommended Videos:</h2>
                    <ul className="space-y-4">
                        {videoData
                            .filter((vid) => vid.id !== id)
                            .map((vid) => {
                                return (
                                    <Link
                                        href={`/videos/${vid.id}`}
                                        key={vid.id}
                                        className="flex items-start space-x-4"
                                    >
                                        <Image
                                            height={192}
                                            width={192}
                                            src={vid.thumbnail}
                                            alt={vid.title}
                                            className="w-24 h-16 object-cover rounded"
                                        />
                                        <div>
                                            <p className="text-lg font-semibold">{vid.title}</p>
                                            <p className="text-sm text-gray-400">
                                                {vid.views} views • {vid.uploadedAt}
                                            </p>
                                        </div>
                                    </Link>
                                );
                            })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

const videoData = [
  {
    id: "ABC",
    title: "Video ABC",
    description: "This is my local video named ABC.",
    thumbnail: "/thumbnail.jpg", 
    channel: "My Local Channel",
    views: "120",
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
