import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import VideoGrid from "../components/VideoGrid"; // Ensure this component is properly set up
// import { getVideos } from "../api/api"; // Assuming this is an API function
import { useAuth } from "../AuthContext"; // Assuming you're using a context for authentication


const HomePage = () => {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const { isAuthenticated } = useAuth(); // Check if the user is logged in
  const navigate = useNavigate();

  // Dummy data for testing
  const dummyVideos = 
    [
      {
        "videoId": "video01",
        "category": "Tutorial",
        "title": "Introduction to HTML",
        "videoUrl": "https://cdn.pixabay.com/video/2023/11/26/190776-888535446_large.mp4",
        "thumbnailUrl": "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1694162055256-Topic%20%2814%29.jpg",
        "description": "Learn the basics of HTML and how to structure your first webpage.",
        "channelId": "channel01",
        "uploader": "user01",
        "category":"Music",
        "views": 15000,
        "likes": 1200,
        "dislikes": 30,
        "uploadDate": "2024-10-01",
        "comments": [
          {
            "commentId": "comment01",
            "userId": "user02",
            "text": "Great tutorial, thanks for the clarity!",
            "timestamp": "2024-10-02T09:00:00Z"
          },
          {
            "commentId": "comment02",
            "userId": "user03",
            "text": "This is very helpful, I learned a lot!",
            "timestamp": "2024-10-02T10:00:00Z",
          },
          {
            "commentId": "comment03",
            "userId": "user04",
            "text": "I have a question about step 3, can you elaborate?",
            "timestamp": "2024-10-02T11:00:00Z",
          },
        ]
      },
      {
        "videoId": "video02",
        "category": "Podcast",
        "title": "Understanding JavaScript Closures",
        "videoUrl":"https://cdn.pixabay.com/video/2024/01/23/197898-905833761_tiny.mp4",
        "thumbnailUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTHf9NWx5zhwO2z-He-ykRU-jWcwADusRQsg&s",
        "description": "Deep dive into closures and their use cases.",
        "channelId": "channel02",
        "uploader": "user03",
        "category":"News",
        "views": 24500,
        "likes": 1300,
        "dislikes": 50,
        "uploadDate": "2024-09-18",
        "comments": [
          {
            "commentId": "comment02",
            "userId": "user04",
            "text": "I finally understood closures. Thanks!",
            "timestamp": "2024-09-19T10:00:00Z"
          }
        ]
      },
      {
        "videoId": "video03",
        "category": "Tutorial",
        "title": "Mastering CSS Flexbox",
        "videoUrl":"https://media.istockphoto.com/id/1256688365/video/html-code-writing.mp4?s=mp4-640x640-is&k=20&c=ivcpjLfuB89BVg-KUCO_Cp5e_n3C_qu7K6WuSXBoCm8=",
        "thumbnailUrl": "https://www.moussasaidi.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F3r8assm688ft%2F4YJSxoKNCP6BmYQciqeqQa%2F46f1836bf297f3196289fc6bb784ffa1%2Fog-flexbox.png&w=1920&q=75",
        "description": "Learn how to create responsive layouts using Flexbox.",
        "channelId": "channel03",
        "uploader": "user05",
        "category":"Gaming",
        "views": 23000,
        "likes": 1150,
        "dislikes": 25,
        "uploadDate": "2024-08-25",
        "comments": [
          {
            "commentId": "comment03",
            "userId": "user06",
            "text": "Flexbox is so much easier after watching this!",
            "timestamp": "2024-08-26T15:30:00Z"
          }
        ]
      },
      {
        "videoId": "video04",
        "category": "Interview",
        "title": "Career in Web Development - Tips and Advice",
        "videoUrl":"https://cdn.pixabay.com/video/2020/06/06/41263-429379223_tiny.mp4",
        "thumbnailUrl": "https://i3.ytimg.com/vi/TEOQbkd6sz8/maxresdefault.jpg",
        "channelId": "channel04",
        "uploader": "user07",
        "category":"Sports",
        "views": 19000,
        "likes": 900,
        "dislikes": 20,
        "uploadDate": "2024-09-10",
        "comments": [
          {
            "commentId": "comment04",
            "userId": "user08",
            "text": "Very motivational! Looking forward to my web dev journey.",
            "timestamp": "2024-09-11T11:00:00Z"
          }
        ]
      },
      {
        "videoId": "video05",
        "category": "Tutorial",
        "title": "JavaScript Asynchronous Programming",
        "videoUrl":"https://cdn.pixabay.com/video/2020/02/13/32290-391434450_tiny.mp4",
        "thumbnailUrl": "https://i.ytimg.com/vi/OFpqvaJ3QYg/maxresdefault.jpg",
        "description": "A beginner’s guide to understanding promises, async/await, and more.",
        "channelId": "channel05",
        "uploader": "user09",
        "category":"T-series",
        "views": 27000,
        "likes": 1500,
        "dislikes": 40,
        "uploadDate": "2024-07-21",
        "comments": [
          {
            "commentId": "comment05",
            "userId": "user10",
            "text": "This cleared up a lot of confusion, thank you!",
            "timestamp": "2024-07-22T08:00:00Z"
          }
        ]
      },
      {
        "videoId": "video06",
        "category": "Vlog",
        "title": "Exploring the Mountains - A Weekend Trip",
        "videoUrl":"https://media.istockphoto.com/id/1252621883/video/aerial-view-of-the-niseko-volcano-in-hokkaido-japan.mp4?s=mp4-640x640-is&k=20&c=oFi-xHeWJmbwvRHVfXpdrxiadfjuCBDOHXBi-CK8Br8=",
        "thumbnailUrl": "https://static.vecteezy.com/system/resources/thumbnails/050/808/523/small/traveler-documenting-their-adventures-with-camera-tourist-exploring-their-travels-in-a-picturesque-photo.jpeg",
        "description": "Join me on my adventure through the mountains for a weekend escape.",
        "channelId": "channel06",
        "uploader": "user11",
        "category":"Podcast",
        "views": 31000,
        "likes": 1600,
        "dislikes": 60,
        "uploadDate": "2024-06-15",
        "comments": [
          {
            "commentId": "comment06",
            "userId": "user12",
            "text": "Looks like a beautiful trip, thanks for sharing!",
            "timestamp": "2024-06-16T13:30:00Z"
          }
        ]
      },
      {
        "videoId": "video07",
        "category": "Tutorial",
        "title": "Advanced React Patterns",
        "videoUrl":"https://cdn.pixabay.com/video/2023/08/10/175438-853585100_tiny.mp4",
        "thumbnailUrl": "https://miro.medium.com/v2/resize:fit:1400/1*PDLXhIsh_ceBpN_MGCaotw.png",
        "description": "Learn advanced React patterns and best practices for scalable apps.",
        "channelId": "channel07",
        "uploader": "user13",
        "category":"Live",
        "views": 35000,
        "likes": 2000,
        "dislikes": 70,
        "uploadDate": "2024-04-30",
        "comments": [
          {
            "commentId": "comment07",
            "userId": "user14",
            "text": "This will definitely help with my React projects. Thanks!",
            "timestamp": "2024-05-01T10:00:00Z"
          }
        ]
      },
      {
        "videoId": "video08",
        "category": "Review",
        "title": "Reviewing the Latest iPhone 15",
        "videoUrl":"https://media.istockphoto.com/id/1394818748/video/putting-power-cable-for-charge-battery-on-mobile-phone-at-night.mp4?s=mp4-640x640-is&k=20&c=LBCifmVapf8S3mutJoHDcCb3GulL-fHBdT346RzvI68=",
        "thumbnailUrl": "https://sm.ign.com/ign_in/review/i/iphone-15-/iphone-15-pro-review_kk94.jpg",
        "description": "Unboxing and reviewing the new iPhone 15 with all its features.",
        "channelId": "channel08",
        "uploader": "user15",
        "category":"Thrillers",
        "views": 42000,
        "likes": 2500,
        "dislikes": 100,
        "uploadDate": "2024-05-01",
        "comments": [
          {
            "commentId": "comment08",
            "userId": "user16",
            "text": "I’m thinking about getting this. Thanks for the honest review!",
            "timestamp": "2024-05-02T14:00:00Z"
          }
        ]
      },
      {
        "videoId": "video09",
        "category": "Tutorial",
        "title": "Building a Todo App with Vue.js",
        "videoUrl":"https://cdn.pixabay.com/video/2023/07/28/173531-849610811_tiny.mp4",
        "thumbnailUrl": "https://i.ytimg.com/vi/VJ4KXnlF8I8/maxresdefault.jpg",
        "channelId": "channel09",
        "category":"Mantras",
        "uploader": "user17",
        "views": 38000,
        "likes": 2100,
        "dislikes": 80,
        "uploadDate": "2024-03-10",
        "comments": [
          {
            "commentId": "comment09",
            "userId": "user18",
            "text": "This tutorial was so helpful for my first Vue.js app!",
            "timestamp": "2024-03-11T16:00:00Z"
          }
        ]
      },
      {
        "videoId": "video10",
        "category": "Interview",
        "title": "How to Become a Full Stack Developer",
        "videoUrl":"https://cdn.pixabay.com/video/2024/09/20/232267_tiny.mp4",
        "thumbnailUrl": "https://www.shutterstock.com/image-vector/full-stack-developer-programmer-who-260nw-2315735079.jpg",
        "description": "Advice from professionals on how to pursue a full-stack development career.",
        "channelId": "channel10",
        "uploader": "user19",
        "category":"Jukebox",
        "views": 45000,
        "likes": 3000,
        "dislikes": 120,
        "uploadDate": "2024-02-28",
        "comments": [
          {
            "commentId": "comment10",
            "userId": "user20",
            "text": "I’m definitely following these tips. Thank you for sharing!",
            "timestamp": "2024-03-01T09:00:00Z"
          }
        ]
      },
      {
        "videoId": "video11",
        "category": "Tutorial",
        "title": "Getting Started with TypeScript",
        "videoUrl":"https://cdn.pixabay.com/video/2016/08/22/4733-179738669_tiny.mp4",
        "thumbnailUrl": "https://www.atatus.com/blog/content/images/size/w960/2022/09/typescript-getting-started.png",
        "description": "An introduction to TypeScript and how to get started with it.",
        "channelId": "channel11",
        "category":"Music",
        "uploader": "user21",
        "views": 29000,
        "likes": 1600,
        "dislikes": 50,
        "uploadDate": "2024-01-15",
        "comments": [
          {
            "commentId": "comment11",
            "userId": "user22",
            "text": "TypeScript has been so helpful in my projects. Great tutorial!",
            "timestamp": "2024-01-16T07:30:00Z"
          }
        ]
      },
      
    
  ];
  
  

  // Fetch videos (or use dummy data for testing)
// useEffect(() => {
//   setVideos(dummyVideos);
//   setFilteredVideos(dummyVideos);
//   console.log(videos);  
// }, []);
useEffect(() => {
  setVideos(dummyVideos);
  setFilteredVideos(dummyVideos);
  console.log(videos);  // Debugging statement
}, []);

const handleCategoryClick = (category) => {
  setSelectedCategory(category);
  if (category === "All") {
    setFilteredVideos(videos);
  } else {
    setFilteredVideos(
      videos.filter((video) => video.category === category)
    );
  }
};



  // Filter videos whenever selectedCategory or videos change
  useEffect(() => {
    const filtered =
      selectedCategory === "All"
        ? videos
        : videos.filter((video) => video.category === selectedCategory);
    setFilteredVideos(filtered);
  }, [selectedCategory, videos]);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
  };

  // Handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Handle video click to navigate
  const handleVideoClick = (video) => {
    navigate(`/video/${video.id}`, { state: { video } });
  };
  
  const onSearch = (searchTerm) => {
    // Filter the videos by title
    const filteredVideos = videos.filter(video =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredVideos(filteredVideos);  // Update the filtered videos state
    console.log(filteredVideos); // Log the filtered videos
  };

  return (
    <>
    
      <div>
     
        
        <Header onSidebarToggle={toggleSidebar} onSearch={onSearch} />
        <div className="flex">
          <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
          <main className="ml-64 p-4">
            {/* Only display if authenticated */}
            {isAuthenticated ? (
              <>
              
               

                <div className="hidden sm:flex space-x-2 mb-4">
                  {[
                    "All",
                    "Music",
                    "News",
                    "Gaming",
                    "Sports",
                    "T-series",
                    "Podcast",
                    "Live",
                    "Thrillers",
                    "Mantras",
                    "Jukebox",
                  ].map((category) => (
                    <button
                      key={category}
                      className={`px-3 py-1 rounded ${
                        selectedCategory === category
                          ? "bg-blue-500 text-white"
                          : "bg-gray-700 hover:bg-gray-600 text-white"
                      }`}
                      onClick={() => handleCategoryChange(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                {/* Video Grid */}
                <VideoGrid videos={filteredVideos} onVideoClick={handleVideoClick} />
              </>
            ) : (
              <p className="text-center text-gray-600 mt-10">
                Please <strong>Sign In</strong> to view videos and filters.
              </p>
            )}
          </main>
        </div>
      </div>
    </>
  );
};

export default HomePage;
