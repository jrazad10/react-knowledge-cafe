
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'




function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmarks = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (time, id) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)
    //remove the read blog from bookmark
    // console.log("remove bookmark", id);

    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmarks)
  }


  return (
    <>

      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookmarks={handleAddToBookmarks}></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>



    </>
  )
}

export default App
