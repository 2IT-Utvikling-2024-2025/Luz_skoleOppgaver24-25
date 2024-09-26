const Create = () => {
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                />
                <label>Blog body:</label>
                <texttarea>
                    required
                </texttarea>
                <label>blog author</label>
                <select>
                    <option value="mario">mario</option>
                    <option value="joshi">joshi</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
    )
}


export default Create;
