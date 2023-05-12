import React, { useEffect, useState } from 'react';

export default function Product() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    // mount될 때 호출
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('JSON 데이터', data);
        setProducts(data);
        console.log('products', products);
      });

    // 컴포넌트가 없어질 때 메모리를 정리하기 위해서 return
    // unMount될 때 호출(컴포넌트가 없어질 때, 화면에서 사라질 때)
    return () => {
      console.log('청소 완료');
    };
  }, [checked]);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <>
      <input
        id='checkbox'
        type='checkbox'
        value={checked}
        onChange={() => {
          handleChange();
        }}
      />
      <label htmlFor='checkbox'>Show only Hot Sale</label>
      <ul>
        {products?.map((product) => {
          return (
            <li key={product.id}>
              <article>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </article>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
    </>
  );
}
