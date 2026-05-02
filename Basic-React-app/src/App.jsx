
import './App.css'
import Title from './Title.jsx'
import Product from './Product.jsx'
import ProductTab from './ProductTab.jsx'
import Props from './Props.jsx'
import Conditionals from './Conditionals.jsx'
import ActivityCom from './ActivityCom.jsx'
import Button from './Button.jsx'
import Form from './Form.jsx'
import Counter from './counter.jsx'
import LikeButton from './LikeButton.jsx'
import Hws from './Hws.jsx'
function App() {
  

  return (
    <>
      <ProductTab/> {/*this is how we create the components*/}
    <Props/> {/*this is how we create the props and use them */}
    <Conditionals/> {/*this is how we create the condtionals and use them in the react */}
    <ActivityCom/>
    <Button/>
    <br></br>
    <Form/>
    <Counter/>
    <LikeButton/>
    <Hws/>

    </>
    //the empty <> & </> is used to group react children and it avoids creating an extra node in dom 
    // this is also known as react fragment
  )
}

export default App
