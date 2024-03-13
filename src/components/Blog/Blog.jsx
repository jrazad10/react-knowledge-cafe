import PropTypes from 'prop-types';
import { BsBookmarkHeartFill } from "react-icons/bs";


const Blog = ({ blog, handleAddToBookmarks, handleMarkAsRead }) => {
    const { title, cover, reading_time, hashtags, posted_date, author, autor_img, id } = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4 '>
                <div className='flex'>
                    <img className='w-14' src={autor_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button
                        onClick={() => handleAddToBookmarks(blog)}
                        className=' ml-2 text-2xl text-red-600'
                    ><BsBookmarkHeartFill></BsBookmarkHeartFill></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx} className='m-2'><a>{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(id, reading_time)}
                className='text-purple-800 font-bold underline'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func

}

export default Blog;