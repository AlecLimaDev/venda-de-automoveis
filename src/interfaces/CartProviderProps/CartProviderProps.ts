export interface CartProviderProps {
    handleAddItemToCart?: (url: any, name: any, price: any) => void; 
    handleRemoveItemFromCart?: (clickedItemIndex: any) => void;
    children?: any;
    url?: any;
  }
  