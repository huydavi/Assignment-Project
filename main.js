$(document).ready(function () {
  $.ajax({
    url: "http://localhost:9000/store/products",
    type: "GET",
    success: function (result) {
      const container = $("#shoes-product");
      const products = result.products;
      const productElements = products.map((product) => {
        return `
        <div class="d-flex container gap-5 item__list" style="margin-top: 30px;">
              <div class="card text-center" >
                <img src="${
                  product.thumbnail
                }" class="card-img-top object-fit-cover" alt="..." style="height: 250px; width: 100%;">
                <div class="card-body">
                  <h5 class="card-title fs-2 mt-2">${product.title}</h5>
                  <p class="card-price mt-3 fs-3">${
                    product.variants[0].prices[0].amount / 100
                  }$</p>
                </div>
              </div>
        </div>
        `;
      });
      container.append(productElements.join(""));
      console.log(result);
    },
  });
});
