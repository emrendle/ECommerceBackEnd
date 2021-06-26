// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category);

// Categories have many Products
Category.belongsToMany(Product, {
  through: {
    model: Product,
    unique: false
  },
  as: 'products_in_category'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tags, {
    through: {
    model: ProductTag,
    unique: false
  },
  as: 'product_tag'
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, :{
    through: {
    model: ProductTag,
    unique: false
  },

  as: 'products_in_tag'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
