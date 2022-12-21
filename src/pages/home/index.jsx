import ItemListContainer from "../../components/itemListContainer";
import { URL_BASE, URL_ENDPOINTS } from "../../constants/services";
import { useFetch } from "../../hooks/useFetch";
import ItemDetailContainer from "../../components/itemDetailContainer";
import './styles.css'
import { useNavigate } from "react-router-dom";

function Home() {
 
const {
        data: dataProduct,
        error: errorProduct,
        loading: loadingProduct,
      } = 
      useFetch(`${URL_BASE}${URL_ENDPOINTS.PRODUCTS}`);
   
  const navigate= useNavigate()  
  const onHandlerSelect=(product)=>{
    navigate(`/product/${product.id}`,{state: product})

  }


  return (
    <div className="App">
      <ItemListContainer
        grettings={"bienvenid@ a mi market place"} 
      >
        
      </ItemListContainer>
      <div className="container_cards">
      <ItemDetailContainer product={dataProduct} selectProduct={onHandlerSelect}>        
      </ItemDetailContainer>
      </div>
      <header className="App-header"></header>
    </div>
  );
}

export default Home;
