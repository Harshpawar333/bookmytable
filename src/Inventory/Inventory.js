import React, { useState } from 'react'
import './Inventory.css'
import Datepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
function Inventory() {
  const [selectedDate, setSelectedDate] = useState(null)
  return (
    <div>
      <div className="input-group searchbox">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <button type="button" className="btn btn-outline-primary">
          search
        </button>
      </div>

      <div>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Id.</th>
              <th scope="col">Items</th>
              <th scope="col">Category</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>mozzarella cheese</td>
              <td>Dairy</td>
              <td>1 kg</td>
              <td>750</td>
              <td>12/15/22</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Pizza Base</td>
              <td>Pizza</td>
              <td>10</td>
              <td>120</td>
              <td>12/15/22</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Burger Bun</td>
              <td>Dairy</td>
              <td>10</td>
              <td>70</td>
              <td>12/15/22</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="newItem">
        <div className="form-group d-flex mb-2 ">
          <label className="label" for="exampleFormControlInput1">
            Id.
          </label>
          <input
            type="text"
            className="form-control input"
            placeholder="item-id"
          />
        </div>
        <div className="form-group d-flex mb-2">
          <label className="label" for="exampleFormControlInput1">
            Item Name
          </label>
          <input
            type="text"
            className="form-control input"
            placeholder="Item Name"
          />
        </div>

        <div className="form-group d-flex mb-2">
          <label className="label" for="exampleFormControlSelect1">
            Select Category
          </label>
          <select className="form-control input" id="exampleFormControlSelect1">
            <option>Dairy</option>
            <option>Pizza</option>
            <option>Vegitables/fruits</option>
            <option>Meat</option>
            <option>spices</option>
            <option>cleaning equipments</option>
          </select>
        </div>
        <div className="form-group d-flex mb-2">
          <label className="label" for="exampleFormControlInput1">
            Quantity
          </label>
          <input
            type="text"
            className="form-control input"
            placeholder="Quantity"
          />
        </div>
        <div className="form-group d-flex mb-2">
          <label className="label" for="exampleFormControlInput1">
            Price
          </label>
          <input
            type="text"
            className="form-control input d-flex"
            placeholder="Price/item"
          />
        </div>
        <div className="form-group d-flex mb-2">
          <div className="datepick label">
            <li className=" label">Date</li>
          </div>
          <div className=" input">
            <Datepicker
              className="form-control date"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
            />
          </div>
        </div>
        <div className="addButton d-flex justify-content-center">
          <button type="button" className="btn btn-primary">
            Add Item
          </button>
        </div>
      </div>
    </div>
  )
}

export default Inventory
