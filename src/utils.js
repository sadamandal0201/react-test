const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
  getContentAnchorEl: null,
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "center",
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "center",
  },
  variant: "menu",
};

export { MenuProps };

export const optionsCategories = [
  "Watches",
  "Jewelry",
  "Handbags",
  "Glasses and Sunglasses",
  "Whisky",
  "Wine",
  "Collectibles",
  "Other",
];

export const optionsStoreType = ["Physical Store", "eCommerce"];

export const optionsEcommerce = [
  "Shopify",
  "Woocommerce",
  "Square",
  "Custom",
  "Other",
];
