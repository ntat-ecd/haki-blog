import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    
    const [title, setTitle] = useState(null)
    const [body, setBody] = useState(null)
    const [author, setAuthor] = useState('mario')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory()


    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { title, body, author }
        setIsPending(true)
        console.log(blog)
        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added')
            setIsPending(false)

           //history.go(-1)
           history.push('/')
        })
    }
    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Blog body</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>

                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="haki">Haki</option>
                    <option value="john">John</option>
                </select>

                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding blog...</button>}
{/* log result
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p> */}

            </form>
        </div>
    );
}

export default Create;