import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <LoadComments></LoadComments>
    </div >
  );
}
/* Use state using with component */
function Counter() {
  const [count, setCount] = useState(0);
  const increaseClick = () => setCount(count + 1)
  const decreaseClick = () => setCount(count - 1)
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increaseClick}>Increase +</button>
      <button onClick={decreaseClick}>Decrease -</button>
    </div>
  )
}
// json placeholder with comment 
function LoadComments() {
  const [comments, setComments] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(data => setComments(data))
  }, [])
  /* Return JSX */
  return (
    <div>
      <h3>Load Comments</h3>
      {
        comments.map(comment => <Comment name={comment.name} body={comment.body}></Comment>)
      }
    </div>
  )
}
function Comment(props) {
  return (
    <div style={{ backgroundColor: "skyblue", margin: "20px", padding: "20px" }}>
      <h4>{props.name}</h4>
      <p>{props.body}</p>
    </div>
  )
}
export default App;


