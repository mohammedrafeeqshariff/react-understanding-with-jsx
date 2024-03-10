import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]

  return(
    <>

    <div className='kg'>
      <h1>Kalvium gallery</h1>
    </div>

    <div className='images'>
      {
        data.map((ele)=>{
          return <img src={ele.img} alt="elephant image"/>
        })
      }
    </div>
    </>
  )
}

export default App;
