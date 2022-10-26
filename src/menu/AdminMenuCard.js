import React, { useState } from "react";

const AdminMenuCard = (props) => {
  const { data, index, handleUpdateEntry, handleDeleteEntry } = props;
  const [menuAdminUpdate, setMenuAdminUpdate] = useState(false);
  const [_id, set_Id] = useState();
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

  const fetchById = async (uri) => {
    const res = await fetch(uri, {
      // Adding method type
      method: "GET",

      // Adding body or contents to send
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    // console.log(res);
    const fetchData = await res.json();
    set_Id(fetchData._id);
    setName(fetchData.name);
    setPrice(fetchData.price);
    setCategory(fetchData.category);
    setTags(fetchData.tags);
    setDescription(fetchData.description);
    setImgUrl(fetchData.img);
    console.log(`fetching by id: ${JSON.stringify(fetchData)}`);
  };

  const handleUpdateClick = () => {
    setMenuAdminUpdate(true);
    console.log(data._id);
    fetchById("http://localhost:5006/menu/findbyid/" + data._id);
  };

  const handleSubmitClick = async () => {
    const updateEntry = {
      name,
      price,
      description,
      category,
      tags,
      img: imgUrl,
    };
    const uri = "http://localhost:5006/menu/updatemenuitem/" + data._id;
    const res = await fetch(uri, {
      // Adding method type
      method: "PATCH",
      // Adding body or contents to send
      body: JSON.stringify(updateEntry),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const updatedData = await res.json();

    console.log(props.FullMenu);
    handleUpdateEntry(index, {
      _id,
      name,
      price,
      description,
      category,
      tags,
      img: imgUrl,
    });
    setMenuAdminUpdate(false);
  };

  // const handleUpdate = () => {
  //   fetch("http://127.0.0.1:5006/menu/updatemenuitem", {
  //     method: "PATCH",
  //     body: {
  //       id: dish._id
  //       name:
  //       price:
  //       img:
  //       description:
  //       category:
  //       tags:
  //     }})}

  const handleDeleteClick = async () => {
    console.log(data._id);
    const id = data._id;
    await fetch("http://127.0.0.1:5006/menu/deletemenuitem", {
      method: "DELETE",
      body: JSON.stringify({ _id: id }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    handleDeleteEntry(index);
  };

  if (menuAdminUpdate === false) {
    return (
      <div className="cards--container">
        <div className="row">
          <div className="card--admin--container" key={data.id}>
            <div className="card--admin--image">
              <img src={data.img} alt={data.name} />
            </div>
            <div className="card--admin--body">
              <div className="card--admin--name">
                <label>Name: </label>
                <br />
                <label>{data.name}</label>
              </div>
              <div className="card--admin--name">
                <label>Category: </label>
                <br />
                <label>{data.category}</label>
              </div>
              <div className="card--admin--price">
                <label>Price: </label>
                <br />
                <label>{data.price}</label>
              </div>

              <div className="card--admin--tags">
                <label>Tags: </label>
                <br />
                <label>{data.tags}</label>
              </div>
              <div className="card--admin--description">
                <label>Description: </label>
                <br />
                <label>{data.description}</label>
              </div>

              <div className="card--admin--arrow">
                <button onClick={handleUpdateClick}>Update</button>
                <button onClick={handleDeleteClick}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (menuAdminUpdate === true) {
    return (
      <div className="cards--container">
        <div className="row">
          <div className="card--admin--container" key={data.id}>
            <div className="card--admin--body-edit">
              <div className="card--admin--name">
                <label>Name: </label>
                <br />
                <input type="text" onChange={handleNameChange} value={name} />
              </div>
              <div className="card--admin--name">
                <label>Category: </label>
                <br />
                <input
                  type="text"
                  onChange={handleCategoryChange}
                  value={category}
                />
              </div>
              <div className="card--admin--price">
                <label>Price: </label>
                <br />
                <input type="text" onChange={handlePriceChange} value={price} />
              </div>

              <div className="card--admin--tags">
                <label>Tags: </label>
                <br />
                <input type="text" onChange={handleTagsChange} value={tags} />
              </div>
              <div className="card--admin--description">
                <label>Description: </label>
                <br />
                <textarea
                  type="text"
                  onChange={handleDescriptionChange}
                  value={description}
                />
              </div>
              <div className="card--admin--description">
                <label>Img URL: </label>
                <br />
                <input
                  type="text"
                  onChange={handleImgUrlChange}
                  value={imgUrl}
                />
              </div>

              <div className="card--admin--arrow">
                <button onClick={handleSubmitClick}>Submit</button>
                <button onClick={handleDeleteClick}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default AdminMenuCard;
