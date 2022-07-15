// DATA IN DATABASES
const products = [
  {
    id_produk: 1,
    nama_produk: 'Huawei P30 Pro'
  },
  {
    id_produk: 2,
    nama_produk: 'Huawei Nova ST'
  },

  // <<<< TESTING ADD ONE PRODUCT (you can add new product)>>>>>
  {
    id_produk: 3,
    nama_produk: 'Nokia 5 mantap'
  },
  {
    id_produk: 4,
    nama_produk: 'Nyamnyung S20'
  },
  {
    id_produk: 5,
    nama_produk: 'Iphone 5'
  }
];

const product_stocks = [
  {
    id_produk: 1,
    qty: 15
  },
  {
    id_produk: 1,
    qty: 6
  },
  {
    id_produk: 2,
    qty: 4
  },
  {
    id_produk: 2,
    qty: 18
  },

  // <<<< TESTING ADD ONE PRODUCT (you can add new product)>>>>>
  {
    id_produk: 3,
    qty: 1
  },
  {
    id_produk: 3,
    qty: 200
  },
  {
    id_produk: 4,
    qty: 11
  },
  {
    id_produk: 5,
    qty: 30
  },
  {
    id_produk: 5,
    qty: 15
  }
];


exports.getCarts = async (req, res) => {
  const carts = [];
  try{

    // 1. INITIAL SEARCH PRODUCT ID
    products.map((product, index) => {
        if (product.id_produk !== carts?.id_produk){
          carts.push({
            id_produk: product.id_produk,
            nama_produk: product.nama_produk,
            total_stock: 0
          });
        }
    });

    // 2. COUNT QTY by PRODUCT ID
    for (const [index, productInWarehouse] of product_stocks.entries()) {
      carts.map(cart => {
        if(productInWarehouse.id_produk === cart.id_produk){
          cart.total_stock += productInWarehouse.qty;
        }
      });
    }
    
    // 3. Remove the Product Id if you want not to send a response to the client
    carts.map(cart => delete cart?.id_produk);
    
    res.status(200).send({
      hasil: carts
    });

  } catch(error) {

    res.status(500).send({
      status: 'Failed',
      message: error.message
    });

  }
}