import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterCarBrand,
  filterCarModel,
  getVendorsItemsAction,
} from "../store/actions";
import { Pagination } from "./Pagination";
import { PaginationReact } from "./PaginationReact";
import {useTranslation} from "react-i18next";

export default function ProductFilterVendor(props) {
  const productsVendor = useSelector((state) => state.vendorItems);
  const [itemsInDB, setItemsInDB] = useState(0);

  const [state, setState] = useState({
    model: "",
    brand: "",
    search: "",
    priceMoreThan: 0,
    priceLessThan: 0,
  });


  const stateRedux = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterCarBrand());
    dispatch(getVendorsItemsAction({}, 0));
  }, []);

  useEffect(() => {
    localStorage.setItem("TotalProductsvendor", productsVendor);
    setItemsInDB(productsVendor ? productsVendor.TotalItem : 0);
  }, [productsVendor]);


  const handleChange = (event) => {
    const { value, name } = event.target;
    if (name === "brand") {
      dispatch(filterCarModel(value));
      setState((previous) => {
        return {
          ...previous,
          model: "",
        };
      });
    }
    setState((previous) => {
      return {
        ...previous,
        [name]: value,
      };
    });
    handleSearchClick();
  }
  const handlePriceChange = (event) => {

    switch (event.target.name) {
      case "priceLess":
        setState({
          ...state,
          priceLessThan: +event.target.value,
        });
        break;
      case "priceMore":
        setState({
          ...state,
          priceMoreThan: +event.target.value,
        });
        break;
      default:
        break;
    }
  }

  const handleFocus=()=>{
    document.getElementById("focus").focus();
  }

  const handleClick = (params) => {
    console.log(params);

    dispatch(getVendorsItemsAction(state, params.selected*3));
    localStorage.setItem("TEST2", params.selected * 3);
    
    // dispatch(filterCarModel(event.target.value));
  };
  const handleSearchClick = () => {
    dispatch(getVendorsItemsAction(state, 0));
  };

  const handleClear = () => {
    setState({
      model: "",
      brand: "",
      search: "",
      priceLessThan: 0,
      priceMoreThan: 0,
    });
    
    dispatch(getVendorsItemsAction({}, 0));

    // handleSearchClick();
    // setTimeout(() => {
    //   handleSearchClick();
    // }, 5000);
  }
  const handleClear2 = () => {
    setState({
      search: "",
    });
    dispatch(getVendorsItemsAction({}, 0));

  };
  const {t, i18n} = useTranslation();
  return (
    <div className="col-3" style={{paddingLeft:"0px"}}>
    <div className="productFilterVendor" style={{left:"15px",marginRight:"20px"}}>
 
      <div class="search">
        <input type="checkbox" id="trigger" onClick={handleFocus} class="search__checkbox" />
        <label class="search__label-init" for="trigger"></label>
        <label class="search__label-active" onClick={handleClear2} for="trigger"></label>
        <div class="search__border"></div>
        <input type="text" class="search__input" id="focus" name="search" onChange={handleChange} value={state.search}/>
        <div class="search__close"></div>
      </div>

      <div className="ml-2" filter="price">
        <h4 className="font-weight-bold mb-3 text-center">{t("Filter.FilterOptions")}</h4>
      </div>
      <hr style={{borderColor:"grey",border:"1px solid"}}/>
      <div className="" style={{marginTop:"70px",width:"300px"}}>
        <input
          type="range"
          name="priceLess"
          onChange={handlePriceChange}
          value={state.priceLessThan}
          className="form-range"
          min="0"
          max="999"
          step="10"
        />
        <label htmlFor="customRange" className="form-label ml-2" style={{fontSize:"20px",fontWeight:"700"}}>
        {t("repeated.From")} {state.priceLessThan}
        </label>
      </div>

      <div className="">
        <input
          type="range"
          name="priceMore"
          onChange={handlePriceChange}
          value={state.priceMoreThan}
          className="form-range"
          min="1000"
          max="5000"
          step="10"
        />
        <label htmlFor="customRange" className="form-label ml-2" style={{fontSize:"20px",fontWeight:"700"}}>
        {t("repeated.To")} {state.priceMoreThan}{" "}
        </label>
      </div>

      <div className="mb-3">
        <select
          value={state.brand}
          name="brand"
          onChange={handleChange}
          className="custom-select custom-select-lg mb-3"
          style={{fontWeight:"700"}}
        >
          <option value="" key="no-value" style={{fontWeight:"700"}}>
          {t("Filter.ChooseBrand")}
          </option>
          {stateRedux.brand.map((item, index) => (
            <option value={item.name} key={index} style={{fontWeight:"700"}}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <select
          value={state.model}
          disabled={!state.brand}
          name="model"
          onChange={handleChange}
          className="custom-select custom-select-lg mb-3"
          style={{fontWeight:"700"}}
        >
          <option value="" key="no-value" style={{fontWeight:"700"}}> 
          {t("Filter.ChooseModel")}
          </option>

          {stateRedux.model.map((item, index) => (
            <option value={item.model} key={index} style={{fontWeight:"700"}}>
              {item.model}
            </option>
          ))}
        </select>
      </div>
      <button
        type="button"
        onClick={handleSearchClick}
        className="btn btn-dark mr-1"
        style={{fontWeight:"700",height:"60px"}}
      // style={{
      //   background:
      //     "linear-gradient(to right, rgb(197, 191, 191),  green )",
      // }}
      >
        {t("Filter.ApplyFilter")}
      </button>
      <button
        type="button"
        className="btn btn-danger "
        style={{fontWeight:"700",height:"60px"}}
        // style={{
        //   background:
        //     "linear-gradient(to right, rgb(197, 191, 191),  red )",
        // }}
        onClick={handleClear}
      >
        {t("Filter.ClearFilter")}
      </button>
      <div
        className="pagination"
        style={{
          zIndex: "100",
          position: "absolute",
          left: "350px",
          bottom: "-3.5%",
          height:"80px"
        }}
      >
        {productsVendor && itemsInDB > 3 && (
          <PaginationReact
            NumberOfItemsInDB={itemsInDB}
            NumberToShow={3}
            handleClick={handleClick}
          />
        )}
      </div>
    </div>
    </div>
  );
}
