import React, { useState } from "react";
import "./adminArtworkStyles.css";

const AdminArtwork = ({ ArtData }) => {
  const [id, setID] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [artistName, setArtistName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [physicalMaterial, setPhysicalMaterial] = useState("");
  const [physicalSize, setPhysicalSize] = useState("");
  const [price, setPrice] = useState("");
  const [sold, setSold] = useState(false);

  const updateArtData = async () => {
    const res = await fetch("http://127.0.0.1:5006/artwork/update", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({
        id: id,
        artName: title,
        description: description,
        artistName: artistName,
        category: category,
        image: image,
        physicalMaterial: physicalMaterial,
        physicalSize: physicalSize,
        price: price,
        sold: sold,
      }),
    });
  };
  const handleChanges = () => {
    updateArtData();
    console.log("clicked");
  };
  console.log(sold);
  return (
    <>
      <div className="adminartwork--header">Update Artwork</div>
      <div className="adminartworkcontainer">
        <form className="adminartwork--form">
          <div className="adminArtwork--input--container">
            <input
              onChange={(e) => {
                setID(e.target.value);
              }}
              placeholder="ID to update"
              className="adminArtwork--input"
            ></input>
          </div>
          <div className="adminArtwork--input--container">
            <input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder="Title"
              className="adminArtwork--input"
            ></input>
          </div>
          <div className="adminArtwork--input--container">
            <input
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              placeholder="Description"
              className="adminArtwork--input"
            ></input>
          </div>
          <div className="adminArtwork--input--container">
            <input
              onChange={(e) => {
                setArtistName(e.target.value);
              }}
              placeholder="Artist"
              className="adminArtwork--input"
            ></input>
          </div>
          <div className="adminArtwork--input--container">
            <input
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              placeholder="Category"
              className="adminArtwork--input"
            ></input>
          </div>
          <div className="adminArtwork--input--container">
            <input
              onChange={(e) => {
                setImage(e.target.value);
              }}
              placeholder="Image"
              className="adminArtwork--input"
            ></input>
          </div>
          <div className="adminArtwork--input--container">
            <input
              onChange={(e) => {
                setPhysicalMaterial(e.target.value);
              }}
              placeholder="Material"
              className="adminArtwork--input"
            ></input>
          </div>
          <div className="adminArtwork--input--container">
            <input
              onChange={(e) => {
                setPhysicalSize(e.target.value);
              }}
              placeholder="Size"
              className="adminArtwork--input"
            ></input>
          </div>
          <div className="adminArtwork--input--container">
            <input
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              placeholder="Price"
              type="number"
              className="adminArtwork--input"
            ></input>
          </div>
          <div className="adminArtwork--input--container">
            <select
              onChange={(e) => {
                setSold(e.target.value);
              }}
              className="adminArtwork--input--selection"
            >
              <option value={false}>Sold: False</option>
              <option value={true}>Sold: True</option>
            </select>
          </div>
        </form>
      </div>
      <div className="adminartworkcontainer--bottom">
        <button
          onClick={handleChanges}
          className="submitchanges--admin--button"
        >
          Submit Changes
        </button>
      </div>
    </>
  );
};

export default AdminArtwork;
