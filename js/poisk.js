const searchInput = document.getElementById('search');

searchInput.addEventListener('input', (event) => {

const searchValue = event.target.value.toLowerCase();

const productCards = document.querySelectorAll('.product-card');

productCards.forEach((productCard) => {

const productName = productCard.querySelector('.product-name').textContent.toLowerCase();

  if (productName.includes(searchValue)) {

      productCard.style.display = 'block';
    } else {
          productCard.style.display = 'none';
    }

  });
  

});



