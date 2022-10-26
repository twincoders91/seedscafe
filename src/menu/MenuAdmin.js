import React, { useState, useEffect } from "react";
import FilterButtons from "./FilterButtons";
import FullMenu from "./fullMenu";
import AdminMenuCard from "./AdminMenuCard";

const MenuAdmin = (props) => {
  props.setIsMenuPage(true);
  const [FullMenu, setFullMenu] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [catSelected, setCatSelected] = useState("Mains");
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [tags, setTags] = useState();
  const [description, setDescription] = useState();
  const [imgUrl, setImgUrl] = useState();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handleTagsChange = (event) => {
    setTags(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleImgUrlChange = (event) => {
    setImgUrl(event.target.value);
  };

  const handleCreate = async () => {
    await fetch("http://localhost:5006/menu/newmenuitem", {
      method: "PUT",
      body: JSON.stringify({
        name,
        price: parseInt(price),
        category,
        tags,
        description,
        img: imgUrl,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    setName("");
    setPrice("");
    setCategory("");
    setTags("");
    setDescription("");
    setImgUrl("");
  };

  const handleCatSelectedChange = (input) => {
    setCatSelected(input);
  };

  const handleUpdateEntry = (index, updatedItem) => {
    setDishes((prevEntries) => {
      const arr = [...prevEntries];
      arr[index] = updatedItem;
      return arr;
    });
  };

  const handleDeleteEntry = (index) => {
    setDishes((prevEntry) => {
      const arr = [...prevEntry];
      const filtered = arr.filter((d, i) => i !== index);
      return filtered;
    });
  };

  const fetchMenuItems = async () => {
    const res = await fetch("http://127.0.0.1:5006/menu/allmenuitems");
    const data = await res.json();
    setFullMenu(data);
  };

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchCategoryItems = async () => {
    const res = await fetch(
      "http://127.0.0.1:5006/menu/findbycategory/" + catSelected
    );
    const data = await res.json();
    setDishes(data);
  };

  useEffect(() => {
    console.log("fetching cat items");
    fetchCategoryItems();
  }, [catSelected]);

  //===============creates a new array with the different Menu Categories============

  const menuItems = [...new Set(FullMenu.map((dish) => dish.category))];
  //==========filtering dishes based on Category Clicked, to show on cards===========

  const filterDish = (curentCategory) => {
    const newDish = FullMenu.filter((newDish) => {
      return newDish.category === curentCategory;
    });
  };

  //==================================================================================
  return (
    <div className="menu--main--container">
      <div className="admin--form--container">
        <div className="admin--row--container">
          <label>Menu Name</label>
          <input type="text" onChange={handleNameChange} value={name}></input>
        </div>
        <div className="admin--row--container">
          <label>Price</label>
          <input
            type="number"
            onChange={handlePriceChange}
            value={price}
          ></input>
        </div>
        <div className="admin--row--container">
          <label>Category</label>
          <input
            type="text"
            onChange={handleCategoryChange}
            value={category}
          ></input>
        </div>
        <div className="admin--row--container">
          <label>Tags</label>
          <input type="text" onChange={handleTagsChange} value={tags}></input>
        </div>
        <div className="admin--row--container">
          <label>Description</label>
          <textarea
            type="text"
            onChange={handleDescriptionChange}
            value={description}
          ></textarea>
        </div>
        <div className="admin--row--container">
          <label>Image URL</label>
          <input
            type="text"
            onChange={handleImgUrlChange}
            value={imgUrl}
          ></input>
        </div>
        <div className="admin--row--container">
          <button onClick={handleCreate}>Submit</button>
        </div>
      </div>

      <div className="filter--container">
        <FilterButtons
          filterDish={filterDish}
          setDishes={setDishes}
          menuItems={menuItems}
          handleCatSelectedChange={handleCatSelectedChange}
          catSelected={catSelected}
        />
      </div>
      <div className="menu--items--container">
        {dishes.map((data, index) => {
          return (
            <AdminMenuCard
              data={data}
              index={index}
              fetchMenuItems={fetchMenuItems}
              handleUpdateEntry={handleUpdateEntry}
              handleDeleteEntry={handleDeleteEntry}
              FullMenu={FullMenu}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MenuAdmin;
