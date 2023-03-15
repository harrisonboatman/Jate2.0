import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import '../../index.css'
import background from '../../assets/categories-bg2.png'

function CategoryMenu() {
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <div className="categories-menu sm:object-none sm:object-right mt-[7vh] flex justify-around items-end w-full">
    <div className="flex justify-around items-end w-full flex-wrap">
      
      {categories?.map((item) => (
        <div>
          
        <div className='my-2'>
        <button className=" bg-[#43464b] ring-2 ring-white text-white lg:text-2xl md:text-lg sm: text-sm rounded-xl lg:p-2 md: p-1 hover:bg-green-500 duration-300"
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
        </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default CategoryMenu;
