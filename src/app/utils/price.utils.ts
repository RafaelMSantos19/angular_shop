export const formatPrice = (price: number): string => {
  return price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
};

export const calculateSubtotal = (price: number, quantity: number): number => {
  return price * quantity;
};