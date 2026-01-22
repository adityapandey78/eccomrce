import { Box, Flex, Grid, Heading, Pagination } from '@sparrowengg/twigs-react';
import SectionHeader from '../../homepage/component/SectionHeader';
import { useQuery } from '@tanstack/react-query';
import {useState } from 'react';
import ProductCard from '../../homepage/component/ProductCard';
import Loading from '../../../commons/pages/Loading';
import Error from '../../../commons/pages/Error';
import { useEffect } from 'react';
import { getProductsQuery } from '../../homepage/services/getProductQuery';
// import { Product } from '../../../commons/types/product';
const ProductPage = () => {

    const [activePage,setActivePage]=useState(1);
    // const { data, isLoading, isError } = useQuery<ApiProduct[]>({
    //     queryKey: ['products'],
    //     queryFn: fetchProducts,
    // });
    // const products: Product[] = useMemo(
    //     () => data?.map(mapApiProductToProduct) ?? [],
    //     [data],
    // );

    const {data:products=[], isLoading, isError} = useQuery(getProductsQuery())
    
    const itemsPerPage=12;

    const start=(activePage-1)*itemsPerPage;
    const end=start+itemsPerPage;
    const paginatedProducts=products.slice(start,end)
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, [paginatedProducts]);


      
    if (isLoading) return <Loading/>;
    if (isError) return <Error/>;

    
    // console.log(paginatedProducts)
    
    console.log({
        // slug,
        productsLength: products.length,
        isLoading,
        isError,
        // productFound: !!products.find((p) => p.id === Number(slug))
      });
   
    return (
        <Flex flexDirection='column'
            css={{
                width: '100vw',
                minHeight: '100vh',
                padding: '60px 135px',
                gap:'$30',
            }}
        >
            <SectionHeader
                title="Explore All Products"
                tag="Exciting offer"
            ></SectionHeader>
            
            <Flex css={{minHeight:'1260px'}}>
                <Grid css={{
                    gridTemplateColumns: `repeat(4,minmax(0,1fr))`,
                    gridTemplateRows:`repeat(3,minmax(0,1fr))`,
                    gap: '30px',
                    transition:'0.2s all ease',
                    
                }} >
                    {paginatedProducts.map((item, idx) => {
                        return <ProductCard key={item.id} product={item} />;
                    })}
                </Grid>
            </Flex>
            <Flex justifyContent='center' alignItems='center' css={{
                width:'100%',
                marginTop:'$30'

            }}>
                <Pagination
                    activePage={activePage}
                    itemsPerPage={itemsPerPage}
                    total={products.length}
                    onChange={(event, page) => setActivePage(page)}
                    size='lg'
            />
            </Flex>
        </Flex>
    );
};

export default ProductPage;
