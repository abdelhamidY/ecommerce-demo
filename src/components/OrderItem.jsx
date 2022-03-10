const OrderItem = ({ image, title, price, quantity }) => {
  return (
    <tr>
      <th scope="row">{title}</th>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>{`${quantity * price} EGP`}</td>
    </tr>
  );
};

export default OrderItem;
