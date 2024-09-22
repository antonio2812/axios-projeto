
import './App.css';
import axios from 'axios';

function App() {

  async function getRepos() {
    const url = 'https://api.github.com/users/JoaoVitor2004/repos';

    axios.get(url)
    .then((s) => {
      console.log(s);
      console.log("Success!");
    })
    .catch((e) => {
      console.log(e);
      console.log("Error!");
    })
    .finally(() => {
      console.log("A Request Finalizou!");
    })

    const text = document.getElementById("titulo");

    text.innerHTML = "Visualizar no console do DevTools!";
  }

  return (
    <div className='container'>
      <button onClick={getRepos}>Testar Request</button>

      <h1 id='titulo'></h1>
    </div>
  )
}

export default App
