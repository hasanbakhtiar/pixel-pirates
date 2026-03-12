import { useState } from "react"
import { Helmet } from "react-helmet"
import List from "./List";

const App: React.FC = () => {
  const [data,setData] = useState<string>("Hello");
  
  
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <List title={data} />
      <button onClick={()=>{setData("new value")}}>set data</button>
      
    </div>
  )
}

export default App