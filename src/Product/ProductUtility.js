export const productData =
  [
    {
      category: "Fruits",
      products: [{ price: "$1", stocked: true, name: "Apple" },
      { price: "$1", stocked: true, name: "Dragonfruit" },
      { price: "$2", stocked: false, name: "Passionfruit" }]
    },
    {
      category: "Vegetables",
      products: [{ price: "$2", stocked: true, name: "Spinach" },
      { price: "$4", stocked: false, name: "Pumpkin" },
      { price: "$1", stocked: true, name: "Peas" }]
    }
  ];

export async function SearchProduct(searchText) {
  return new Promise((res) => {
    let results = []
    setTimeout(() => {
      productData.filter(g => {
        let filteredProducts = g.products.filter(p => !searchText
          || searchText.trim() === ''
          || p.name.trim().toUpperCase().startsWith(searchText.trim().toUpperCase()))
        if (filteredProducts.length > 0)
          results.push({ ...g, products: filteredProducts })
      })
      res(results);
    }, 500)
  })
}