// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Defining the association between th Product and Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
});

// Define a Category as having many Products, thus creating a foreign key in the `Product` table
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

Product.belongsToMany(Tag, {
  // Defining the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false,
  },
});

Tag.belongsToMany(Product, {
  // Defining the third table needed to store the foreign keys
  through:{
    model: ProductTag,
    unique: false,
  },
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
