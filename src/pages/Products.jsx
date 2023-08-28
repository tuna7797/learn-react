import { Link } from 'react-router-dom';
import Spinner from '@/components/Spinner';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import useFetchData from '@/hooks/useFetchData';
import { getPbImageURL, numberWithComma } from '@/utils';

// PB → READ / CREATE / UPDATE / DELETE
//
// HTTP Methods
// CREATE => POST
// READ => GET
// UPDATE => PUT OR PATCH
// DELETE => DELETE

// useState
// useEffect
// custom hook

const endpoint = `${import.meta.env.VITE_PB_API}/collections/products/records`;

function Products() {
  useDocumentTitle('제품 목록');
  const { isLoading, data } = useFetchData(endpoint);

  if (isLoading) {
    return <Spinner size={160} />;
  }

  return (
    <div>
      <h1 className="text-indigo-950 text-2xl mb-5">Products</h1>
      <ul className='grid grid-cols-3'>
        {data.items?.map((item) => (
          <li key={item.id} className='justify-self-center'>
            <Link to={`/product/edit/${item.id}`}>
              <figure>
                <img
                  className="h-[160px] object-cover mx-auto"
                  src={getPbImageURL(item, 'photo')}
                  alt=""
                />
                <figcaption className='flex flex-col gap-1 items-center mt-2'>
                  <span>{item.title}</span>
                  <span className='font-semibold'>{numberWithComma(item.price)}</span>
                </figcaption>
              </figure>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;