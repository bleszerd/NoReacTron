import { useEffect, useState } from "react";
import axios from 'axios'

function App() {
  const [data, setData] = useState()

  useEffect(() => {
    async function fetchApiData() {
      const response = await axios.get(`http://localhost:3333/getalldata`)
      setData(response.data.data)
    }

    fetchApiData()
  }, [])

  return (
    <div>
      { data &&
        (
          <ul>
            {
              data.map(item => (
                <li key={item.id}>
                  <p>{item.id}</p>
                  <p>{item.name}</p>
                </li>
              ))
            }
          </ul>
        )
      }
    </div>
  );
}

export default App;
