import { useNavigate } from "react-router-dom"


const Home = () => {
    const navigate = useNavigate()
    const navigateHandler = () => {
    
        setTimeout( () => {
            navigate("/products")
        },3000)
    }
  return (
   <div className='Home'>

   <h1>I am Home </h1>
   <button onClick={navigateHandler}>Go to Product</button>
   </div>
  )
}

export default Home