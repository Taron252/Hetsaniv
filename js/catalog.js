const catalogData = [
    {
      name: 'Товар 1',
      img: 'https://velobuy.ru/image/cache/catalog/product/47815/welt-ridge-1-0-hd-27-5-2021-762x508.jpg',
      price: 100
    },
    {
      name: 'Товар 2',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd4GfYAqYpm8W2sN6UKOfWA4Zzk36_n72q52SXEg7L_K4qGnvfL1hZnv-j7K91fsOBqIE&usqp=CAU',
      price: 200
    },
    {
      name: 'Товар 3',
      img: 'https://gogreen.by/pics/items/20201204121211_velosiped-forward-sporting-29-2-0-disc-2021-7.jpg',
      price: 300
    },
    {
      name: 'Товар 4',
      img: 'https://vamvelosiped.ru/images/product_images/info_images/-000260241_p_s.jpg',
      price: 400
    },
    {
        name: 'Товар 5',
        img: 'https://cdn.vseinstrumenti.ru/images/goods/sport-i-turizm/tovary-dlya-sporta/1229002/1000x1000/51438091.jpg',
        price: 400
      },
      {
        name: 'Товар 6',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMl450uDAUjcMg7HOGRUAfqt0dAecMtAto9n3PKMG4ez1E4PxGhS99Xw7I9_W9iJMujss&usqp=CAU',
        price: 400
      },
      {
        name: 'Товар 7',
        img: 'https://vamvelosiped.ru/images/product_images/info_images/-000340116_p_s.jpg',
        price: 400
      },
      {
        name: 'Товар 8',
        img: 'https://velomagazin.ru/upload/iblock/7e7/500_d_26_f010_black_green.jpg',
        price: 400
      },
      {
        name: 'Товар 9',
        img: 'https://cdn3.static1-sima-land.com/items/5980196/0/700.jpg?v=1618888809',
        price: 400
      },
      {
        name: 'Товар 10',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxn_vC1QInSxx8OpTuHU4D2K0QeMsIBwnFkw&usqp=CAU',
        price: 400
      },
      {
        name: 'Товар 11',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSM2Qv-5RT3jcsDg8iqiVsmrWWsmjez2t0pjYlz5iVzV1u8ZIdWRyCXVNeeB3CByR6Ae0&usqp=CAU',
        price: 400
      },
      {
        name: 'Товар 12',
        img: 'https://vamvelosiped.ru/images/product_images/info_images/-000253119_p_s.jpg',
        price: 400
      },
  ];

const catalogElement = document.getElementById('catalog');

catalogData.forEach((item) => {
  const itemElement = document.createElement('div');
  itemElement.className = 'item';

  const imgElement = document.createElement('img');
  imgElement.src = item.img;
  itemElement.appendChild(imgElement);

  const nameElement = document.createElement('div');
  nameElement.textContent = item.name;
  itemElement.appendChild(nameElement);

  const priceElement = document.createElement('div');
  priceElement.textContent = `${item.price} руб.`;
  itemElement.appendChild(priceElement);

  catalogElement.appendChild(itemElement);
});

