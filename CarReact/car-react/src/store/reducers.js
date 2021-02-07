/* eslint-disable import/no-anonymous-default-export */
import * as TYPES from "./types";

export default (
  state = {
    //Products-------------
    products: [],
    productDetails: [],
    productID: "",

    //blog-----------
    blogDetails: [],
    blogs: [],
    blogID: "",
    blogFilterBrand: [],
    blogFilterBrandActive: false,
    blogFilterModel: [],
    blogFilterSearch: [],
    brand: [],
    model: [],
    modelAddFilter: [],
    filterblog: [],
    addVote: 0,
    removeVote: 0,
    //--------------
    user: [],
    userID: "",
    userSignIn: {},
    userSignUp: {},
    token: "",
    //vendor------------------
    vendor: [],
    vendorID: "",
    vendorItems: [],

    vendorSignIn: {},
    vendorSignUp: {},
  },
  action
) => {
  switch (action.type) {
    case TYPES.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case TYPES.GET_PRODUCT_DETAILS:
      return {
        ...state,
        productDetails: action.payload,
      };
    case TYPES.GET_PRODUCT_ID:
      return {
        ...state,
        productID: action.payload,
      };
    case TYPES.ADD_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };
    case TYPES.GET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    //------------BLOG---------------
    case TYPES.GET_BLOGS:
      return {
        ...state,
        blogs: action.payload,
      };
    case TYPES.GET_BLOG_DETAILS:
      return {
        ...state,
        blogDetails: action.payload,
      };
    case TYPES.GET_BLOG_ID:
      return {
        ...state,
        blogID: action.payload,
      };
    case TYPES.GET_BLOG_FILTER_BRAND:
      return {
        ...state,
        ...action.payload,
      };
    case TYPES.GET_BLOG_FILTER_BRAND_ACTIVE:
      return {
        ...state,
        blogFilterBrandActive: action.payload,
      };
    case TYPES.GET_BLOG_FILTER_MODEL:
      return {
        ...state,
        blogFilterModel: action.payload,
      };
    case TYPES.GET_BLOG_FILTER_SEARCH:
      return {
        ...state,
        blogFilterSearch: action.payload,
      };
    case TYPES.GET_BRAND:
      return {
        ...state,
        brand: action.payload,
      };
    case TYPES.GET_MODEL:
      return {
        ...state,
        model: action.payload,
      };

    case TYPES.ADD_VOTE:
      return {
        ...state,
        addVote: action.payload,
      };
    case TYPES.REMOVE_VOTE:
      return {
        ...state,
        removeVote: action.payload,
      };
    // case TYPES.GET_MODEL_ADD_FILTER:
    //   return {
    //     ...state,
    //     modelAddFilter: action.payload,
    //   };
    case TYPES.GET_RESULTS_FILTER:
      return {
        ...state,
        filterblog: action.payload,
      };
    // case TYPES.ADD_BLOG:
    //   return {
    //     ...state,
    //     blogs: action.payload,
    //   };

    //-------------USER----------------
    case TYPES.GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case TYPES.GET_USER_ID:
      return {
        ...state,
        userID: action.payload,
      };

    case TYPES.USER_SIGN_IN:
      return {
        ...state,
        userSignIn: action.payload,
      };
    case TYPES.USER_SIGN_UP:
      return {
        ...state,
        userSignUp: action.payload,
      };

    //---------------Vendor------------
    case TYPES.GET_VENDOR:
      return {
        ...state,
        vendor: action.payload,
      };
    case TYPES.GET_VENDOR_ID:
      return {
        ...state,
        vendorID: action.payload,
      };
    case TYPES.GET_VENDOR_ITEMS:
      return {
        ...state,
        vendorItems: action.payload,
      };

    case TYPES.VENDOR_SIGN_IN:
      return {
        ...state,
        vendorSignIn: action.payload,
      };
    case TYPES.VENDOR_SIGN_UP:
      return {
        ...state,
        vendorSignUp: action.payload,
      };

    default:
      return state;
  }
};
