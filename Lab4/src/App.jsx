import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage.jsx";
import LoginPage from "./components/LoginPage.jsx";
import SignUp from "./components/SignUp.jsx";
import ResetPassword from "./components/ResetPassword.jsx";
import Homepage from "./components/Homepage.jsx";
import AcctDetails from "./components/AcctDetails.jsx";
import CurrentListings from "./components/CurrentListings.jsx";
import EmailLogin from "./components/EmailLogin.jsx";
import Home from "./components/Home.jsx";
import Article from "./components/Article.jsx";
import DesiredProperty from "./components/DesiredProperty.jsx";
import Account from "./components/AcctDetails.jsx";
// import ListingInfo from "./components/ListingInfo.jsx";
import Favourites from "./components/Favourites.jsx";
import ListingDetails from "./components/ListingDetails.jsx";
import Compare from "./components/Compare.jsx";
import Test from "./components/Test.jsx";
import SavedProperties from "./components/SavedProperties.jsx";
import CompareFav from "./components/CompareFav.jsx";

export let locations = [
  { value: "Ang Mo Kio", label: "Ang Mo Kio" },
  { value: "Bedok", label: "Bedok" },
  { value: "Bishan", label: "Bishan" },
  { value: "Bukit Batok", label: "Bukit Batok" },
  { value: "Bukit Merah", label: "Bukit Merah" },
  { value: "Bukit Panjang", label: "Bukit Panjang" },
  { value: "Choa Chu Kang", label: "Choa Chu Kang" },
  { value: "Clementi", label: "Clementi" },
  { value: "Geylang", label: "Geylang" },
  { value: "Hougang", label: "Hougang" },
  { value: "Jurong East", label: "Jurong East" },
  { value: "Jurong West", label: "Jurong West" },
  { value: "Kallang/Whampoa", label: "Kallang/Whampoa" },
  { value: "Pasir Ris", label: "Pasir Ris" },
  { value: "Punggol", label: "Punggol" },
  { value: "Queenstown", label: "Queenstown" },
  { value: "Sembawang", label: "Sembawang" },
  { value: "Sengkang", label: "Sengkang" },
  { value: "Serangoon", label: "Serangoon" },
  { value: "Tampines", label: "Tampines" },
  { value: "Tengah", label: "Tengah" },
  { value: "Toa Payoh", label: "Toa Payoh" },
  { value: "Woodlands", label: "Woodlands" },
  { value: "Yishun", label: "Yishun" },
];

function App() {
  const [locationInput, setLocationInput] = useState("Tampines");
  const [amenityInput1, setAmenityInput1] = useState("school");
  const [amenityInput2, setAmenityInput2] = useState("supermarket");
  const [amenityInput3, setAmenityInput3] = useState("park");
  const [distanceRadius, setDistanceRadius] = useState(2);
  const [roomCountInput, setRoomCountInput] = useState(3);
  const [grossFloorArea, setGrossFloorArea] = useState(1500);
  const [housePrice, setHousePrice] = useState(1000000);

  const [selection, setSelection] = useState([]);
  const [rerenderCompareFav, setRerenderCompareFav] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/email-login" element={<EmailLogin />} />
      <Route path="/home" element={<Home />} />
      <Route path="/account-details" element={<AcctDetails />} />
      <Route path="/test" element={<Test />} />
      <Route
        path="/compare-fav"
        element={
          <CompareFav
            selection={selection}
            setSelection={setSelection}
            rerenderCompareFav={rerenderCompareFav}
            setRerenderCompareFav={setRerenderCompareFav}
          />
        }
      />
      <Route
        path="/current-listings"
        element={
          <CurrentListings
            locationInput={locationInput}
            setLocationInput={setLocationInput}
            amenityInput1={amenityInput1}
            setAmenityInput1={setAmenityInput1}
            amenityInput2={amenityInput2}
            setAmenityInput2={setAmenityInput2}
            amenityInput3={amenityInput3}
            setAmenityInput3={setAmenityInput3}
            distanceRadius={distanceRadius}
            setDistanceRadius={setDistanceRadius}
            roomCountInput={roomCountInput}
            setRoomCountInput={setRoomCountInput}
            grossFloorArea={grossFloorArea}
            setGrossFloorArea={setGrossFloorArea}
            housePrice={housePrice}
            setHousePrice={setHousePrice}
          />
        }
      />
      <Route path="/home" element={<Home />} />
      <Route path="/article" element={<Article />} />
      <Route path="/account-details" element={<Account />} />
      <Route path="/desired-property" element={<DesiredProperty />} />
      {/* <Route path="/listing-info" element={<ListingInfo />} /> */}
      <Route
        path="/favourites"
        element={
          <Favourites
            selection={selection}
            setSelection={setSelection}
            rerenderCompareFav={rerenderCompareFav}
            setRerenderCompareFav={setRerenderCompareFav}
          />
        }
      />
      {/* <Route path="/listing-info/:id" element={<ListingInfo />} /> */}
      <Route
        path="/listing-details/:id"
        element={
          <ListingDetails
            locationInput={locationInput}
            setLocationInput={setLocationInput}
            amenityInput1={amenityInput1}
            setAmenityInput1={setAmenityInput1}
            amenityInput2={amenityInput2}
            setAmenityInput2={setAmenityInput2}
            amenityInput3={amenityInput3}
            setAmenityInput3={setAmenityInput3}
            distanceRadius={distanceRadius}
            setDistanceRadius={setDistanceRadius}
            roomCountInput={roomCountInput}
            setRoomCountInput={setRoomCountInput}
            grossFloorArea={grossFloorArea}
            setGrossFloorArea={setGrossFloorArea}
            housePrice={housePrice}
            setHousePrice={setHousePrice}
          />
        }
      />
      <Route
        path="/compare/:id"
        element={
          <Compare
            locationInput={locationInput}
            setLocationInput={setLocationInput}
            amenityInput1={amenityInput1}
            setAmenityInput1={setAmenityInput1}
            amenityInput2={amenityInput2}
            setAmenityInput2={setAmenityInput2}
            amenityInput3={amenityInput3}
            setAmenityInput3={setAmenityInput3}
            distanceRadius={distanceRadius}
            setDistanceRadius={setDistanceRadius}
            roomCountInput={roomCountInput}
            setRoomCountInput={setRoomCountInput}
            grossFloorArea={grossFloorArea}
            setGrossFloorArea={setGrossFloorArea}
            housePrice={housePrice}
            setHousePrice={setHousePrice}
          />
        }
      />
    </Routes>
  );
}

export default App;