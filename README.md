# Project Title
React App for Seeds Cafe’s Menu and Sale of Artwork

# Project Description:
Seeds Cafe is an inclusive social space found within Rainbow Centre at 501 Margaret Drive Singapore 149306. It is a vocational training ground for students from the Rainbow Centre so that they can transit to open employment, and a platform to advocate for a more inclusive community.

The main aim of the app is to create a digital platform for diners to order food and explore artwork done by Rainbow Centre’s students.

# Technologies used to build frontend:
React.js 
react-qr-code
Material UI.

# Technologies used to build backend:
Express.js
MongoDB
Mongoose


# Github Repositories:
Client: https://github.com/twincoders91/seedscafe
Server: https://github.com/twincoders91/seedscafebackend

# How to install and run the project:

Server:
Create .env file, copy paste the code below:
PORT=5006
MONGODB_URI = mongodb://127.0.0.1:27017/seedcafe

Run ‘npm install’ to install backend dependencies (mongoose, express, dotenv, cors)

Run ‘npm run dev’ to start local host for back end

In Postman, run seeding for Menu, Artwork, and Artist
GET  http://127.0.0.1:5006/menu/seedmenuitems
GET  http://127.0.0.1:5006/artwork/seed 
GET  http://127.0.0.1:5006/artist/seed

Client:
Run ‘npm install’ to install frontend dependencies (React, Material UI)

Run ‘npm start’ to start local host for frontend

# How to use the Project - Seedscafe Frontend

<App.js/>
<NavBar/>
<Modal/>
<Routes>
<Home/> 					 /
<Art/>  					/art
<ArtCard/>
<ArtGallery/>  					/artgallery
<SpecificArtworkPage/> 			/artdetails
<CartPage/> 					/cart
<ShippingPage/>
<PaymentPage/>
<ConfirmationPage/>
<MenuStateContainer/>  			/foodmenu
<DineInModal/>
<MenuCategory/>
<MenuCategoryCard/>
<Menu/>
<FilterButtons/>
<Card/>
<SpecificItem/>
<OrderStateContainer/>  			/foodorder
<OrderList/>
<OrderListUpdate/>
<OrderSubmission/>
<MenuAdmin/>  				/menuadmin
<AdminMenuCard/>
      -     <CashierAdmin/>				/cashieradmin
<Footer/>








Code and Page Structure for Menu:

Menu router diagram

<MenuStateContainer/> diagram

<OrderStateContainer/> diagram

Code and Page Structure for Artwork:

Artwork router diagram


Artwork Categories Homepage
- Displays one artwork from each category -> Filters out any duplicate artworks with the same category and maps all the different categories as artcards.
- Dynamic data set, display changes according to the data from the database.
- Artcards can be clicked to reveal all artworks of that specific category.

Artwork Category Page
- Dynamic Header that changes according to the dataset choice. Displays the choice of category as the header by setting states.
- Populates artworks for the specific category chosen - Done by filtering out artworks that do not match choice of category and mapping the rest of the data for display.
- Each artwork can be clicked, linking the user to the specific artwork page.

Specific Artwork Page
- Detailed section for each artwork, displaying art title, description, artist name, gender and more. Dynamic data set display linking back to the database.
- Section for "Other Artworks" from similar artist -- Done by filtering out artists of differing names and the current artwork selection, to only show remaining artworks by mapping.
- Artist biography and gender is fetched using the GET method, as a separate collection from the database. This collection/data set displays the artists information below the artwork details -- By separating them as 2 collections, administrators only require to key in details of individual artists once.
- Add to cart button to push current selection into cart array -- Done by spreading cart array and pushing in the current data set and setting a new cart state.

Cart Page
- Total Amount -- Calculated and displayed by having the sum of 2 states, donation and total cart value.
- Donation Buttons -- 4 different static donation buttons that allow users to add a specific amount as donation to the total checkout value.
- Donation Dynamic Button -- 1 dynamic donation button that rounds up current total cart value to the nearest $50, using the difference as the donation state.
- Empty Cart -- Empty Cart descriptions will be shown using ternary operators when cart states are falsey and do not hold any value.

Shipping Page
- Particulars Section -- Required fields, compulsory before enabling the Make Payment button.
- Particulars States -- Onchange within each field will set respective states for each individual particulars. These states will be used to create the data backend for   recording purposes as req.body.
- Bill Details -- Bill items will be mapped out for the map through the cart state, displaying only important information for billing. Donation will only be shown if there is one, using a ternary operator.
 
Payment Page
- Make Payment button -- Updates the current item to sold in the database through the PATCH method, upon clicking the make payment button with the required checkboxes checked,
- Create Shipping Data -- Upon successful payment, data will be created at the backend through the PUT method, to allow administrators to keep track of the items sold and customer details.
- Resetting States -- Cart states, Pages states and Checkboxes states will be resetted upon successful payment.

# How to use the Project - Seedscafe Backend

Contains the backend for
-Menu Items : http://127.0.0.1:5006/menu
-Oder List for Menu :  http://127.0.0.1:5006/order
-Artist Data : http://127.0.0.1:5006/artist
-Artwork Data : http://127.0.0.1:5006/artwork
-Shipping Data for artworks: http://127.0.0.1:5006/shipping

Code Structure: 

db : To connect to MongoDB using mongoose
Models: To define the schemas for artist data, artwork data, menu items, orders and shipping data 
Controllers: For artist data, artwork data, menu items and shipping data endpoints
Router: To create routers for artist data, artwork data, menu items, orders and shipping data.
Seed: Contains seed data for artist data, artwork data, menu items and order items

# Next Steps
Login authentication for administrator dashboards
Integrated cart for menu and artwork
Date and time to be included when submitting order for menu / in shipping data


# Credits
Collaborators:
Andika Hadisaputra: https://github.com/andikahadi
Chua Jia Xin: https://github.com/Cjiaxin9
Vithya Shankar: https://github.com/vithya27
Wayne Ng: https://github.com/YoungMW

We would also like to thank our UX Design partners (Agnes Lau, Gregory Augustine Koh and Pang Xin Yuan) for the design of the web application. 
