exports.getProduct = ({ limit = 100, page = 1 }) => {
  return `select a.id, a.name, a.stock, a.description, a.price, c.category as categories, a.images, a.weight, a.condition, a.brand, a.rating, b.company_name as seller from products as a
          inner join users as b on b.id = a.seller_id
          inner join categories as c on c.id = a.category_id
          order by id asc
          limit ${limit} offset ${(page - 1) * limit}`;
};

exports.countAll = () => {
  return `select count(id) from products`;
};

exports.getAllProduct = () => {
  return `select a.id, a.name, a.stock, a.description, a.price, c.category as categories, a.images, a.weight, a.condition, a.brand, a.rating, b.company_name as seller from products as a
          inner join users as b on b.id = a.seller_id
          inner join categories as c on c.id = a.category_id
          order by id asc`;
};

exports.getProductById = ({ id }) => {
  return `select name, description, stock, price, category_id, images, weight, condition, brand, rating, seller_id from products where id = ${id}`;
};

exports.addProduct = ({
  name = null,
  stock = null,
  description = null,
  price = null,
  category_id = null,
  images = null,
  weight = null,
  condition = null,
  brand = null,
  rating = null,
  seller_id = null,
}) => {
  let id = parseInt(new Date().getTime() * Math.random() * 10) / 1000000;
  return `insert into products(id, name, stock, description, price, category_id, images, weight, condition, brand, rating, seller_id)
            values (${id}, '${name}', ${stock}, '${description}', '$ ${price}', '${category_id}', '${images}', ${weight}, '${condition}', '${brand}', ${rating}, ${seller_id})`;
};

exports.updateProduct = (request, initial) => {
  const {
    id,
    name = initial.name,
    stock = initial.stock,
    description = initial.description,
    price = initial.price,
    category_id = initial.category_id,
    images = initial.images,
    weight = initial.weight,
    condition = initial.condition,
    brand = initial.brand,
    rating = initial.rating,
    seller_id = initial.seller_id,
  } = request;
  return `update products set name = '${name}', 
            stock = ${stock}, 
            description = '${description}', 
            price = '$ ${price}', 
            category_id = ${category_id}, 
            images = '${images}',
            weight = ${weight}, 
            condition = '${condition}', 
            brand = '${brand}', 
            rating = ${rating}, 
            seller_id = ${seller_id}
            where id = ${id}`;
};

exports.deleteProduct = ({ id }) => {
  return `delete from products where id = ${id}`;
};
