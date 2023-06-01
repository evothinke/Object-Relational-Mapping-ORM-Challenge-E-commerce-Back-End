
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//associations between category and prodcut models
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'cascade',
});

Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'cascade',
});
//associations between product and tag where productTag is used as the join table.
Product.belongsToMany(Tag, {
  through: 'ProductTag',
  onDelete: 'cascade',
});

Tag.belongsToMany(Product, {
  through: 'ProductTag',
  onDelete: 'cascade'
})
//exporting models
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};