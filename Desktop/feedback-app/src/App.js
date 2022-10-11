function App() {
    const title ='Blog post'
    const body ='This is my blog post'
    const comments =[
        {id: 1, text: 'Comment one'},
        {id: 2, text: 'Comment two'},
        {id: 3, text: 'Comment three'},
    ]
    const loading=false
    const showComments= true

    if (loading)return <h1> Laoding...</h1>
  return (
    <div className="container">
      <h1> {title.toUpperCase()}</h1>
      <p> {body}</p>

      {showComments && (  <div className="comments">
        <h3> comments({comments.length})</h3>
        <ul>
         {comments.map((comments,index)=> (
            <li key={index}> { comments.text}</li>
         ))}

        </ul>
      </div>
      )}
    
    </div>
  )
}
export default App;
