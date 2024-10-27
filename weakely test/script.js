function updateQuantity(button, change) {
    const quantitySpan = button.parentElement.querySelector('.quantity');
    let quantity = parseInt(quantitySpan.textContent);
    quantity = Math.max(0, quantity + change); // Prevents quantity from going below 0
    quantitySpan.textContent = quantity;
  
    calculateTotal();
  }
  
  function calculateTotal() {
    let total = 0;
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear previous cart items
  
    const products = document.querySelectorAll('.products tbody tr');
  
    products.forEach(row => {
      const description = row.children[1].textContent;
      const price = parseInt(row.children[2].textContent);
      const quantity = parseInt(row.querySelector('.quantity').textContent);
      const subtotal = price * quantity;
  
      if (quantity > 0) {
        // Create cart item detail
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `<span>${description} ${price} x ${quantity} = Rs. ${subtotal}</span>`;
        cartItemsContainer.appendChild(cartItem);
      }
  
      total += subtotal;
    });
  
    const totalAmountElement = document.getElementById('total-amount');
    totalAmountElement.textContent = `Rs. ${total}`;
  
    const cartStatus = document.getElementById('cart-status');
    cartStatus.textContent = total > 0 ? 'Items in Cart' : 'Cart is Empty';
  }
  
  document.getElementById('checkout-btn').addEventListener('click', () => {
    alert('Proceeding to checkout!');
  });
  