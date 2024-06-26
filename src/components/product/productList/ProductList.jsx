import ProductItem from "./ProductItem";
import './style.css'

export default function ProductList({products, refetchProduct}){

    return (
        <div className={'products'}>
            {products.length > 0 ? (
                products.map((product, index) => (
                    <div className={'productMap'} key={index}>
                        <ProductItem id={product.id} name={product.name} price={product.price} refetch={refetchProduct}/>
                    </div>
                ))
            ) : (
                <></>
            )}
        </div>
    );
}