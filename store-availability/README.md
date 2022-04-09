# Take Home Assignment - Apple

[Apple - Check Store Availability - Demo Link](https://apple-red.vercel.app/store-availability)

[Repo](https://github.com/faithchan/store-availability/tree/main/store-availability)

## 🌌 Introduction

A Web App to help call agents at Apple check availability for a product at a physical Apple Store. The App aims to showcase a mock up and an example of the aforementioned scenario. The scope of the project touches country, stores in country (particularly Singapore in version 1 of this App), product family, breakdown from the product family (particularly iPhone 13 Pro in version 1 of this App).

## 👨🏻‍💻 Project Structure

- Breakdown the products Apple has into Product Families - using the reference of the tabs on apple website.
- Focus on a product to develop the feature on. iPhone was chosen and the category was broken down into 13 Pro, 13, SE, 12, 11.
- Further narrow on a product that is popular - iPhon 13 Pro was chosen.
- When the scope has been defined, Ui was created.
- Decide on Tech stack - Nodejs, react framework Nextjs and TypeScript.
- Created Dummy Data.
- Develop Frontend.
- Changes to dummy data based on the final frontend executed.
- Integration and testing.
- Deployment on Vercel.

## Follow these steps (Top-Down, Left-Right Approach)

1. Go to demo link https://apple-red.vercel.app/store-availability
2. Select Product Family > iPhone
3. Select Store > All Stores (You may also choose your preferred store).
4. Click "Go".
5. The iPhone category list will be displayed. Click "iPhone 13 Pro".
6. The iPhone Modal to check stock will be displayed. On the top left, IGNORE "Enter Postal Code (optional). Select any Model you prefer.
7. Select any Finish you prefer.
8. Select any Capacity you prefer.
9. Upon successful selection of the product's Model, Finish and Capacity - You will see the price and stores with available stock appear on the right hand side of the Modal.
10. Click on any of the store you prefer.
11. The address and opening hours of the store you have selected will appear on the Modal. You will also see a blue button that enables you to save item to the bottom Modal "Saved Items".
12. Additional Feature (in progress) - While call agents are speaking with customers, they can save customer's requests and can share with customer this list should the customer be willing to share their personal email.
    You should end up with an interface like this -
    <img src="./public/EndProduct.png" width="350"/>

## 💻 Technologies

- Tailwindcss
- React
- NextJS
- Typescript
- HeadlessUI
- Node.js

## Contributors

- Faith @faithchan
