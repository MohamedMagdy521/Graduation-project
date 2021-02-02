import React from 'react'
import ProductFilter from '../../../../components/ProductFilter'

export default function ProductsList() {
    return (
      <div className="productList">
        <div className="container">
          <div className="row">
            <div className="col-4" style={{ marginTop: "15%" }}>
              <ProductFilter />
            </div>
            <div className="col-8" style={{ marginTop: "15%" }}>
              <p>Hello magdy</p>
            </div>
          </div>
        </div>
      </div>
    );
}