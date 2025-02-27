import { Link } from 'react-router-dom';
const BlogList = ({ blogs, title, handleDelete }) => {
    return (
        <div className="bloglist">
            <h2>{title}</h2>
            {blogs.map((blog) =>
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    {/* <button onClick={() => handleDelete(blog.id)}>Delete blog</button> */}
                    </Link>
                </div>)};
        </div>
    );
}

export default BlogList;