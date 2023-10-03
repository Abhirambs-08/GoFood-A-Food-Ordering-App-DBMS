# GoFood-A-Food-Ordering-App-DBMS
GoFood – A Food Ordering App introduces a dynamic and innovative solution in the form of a food ordering web application developed using the MERN (MongoDB, Express.js, React, Node.js) stack. With the primary objective of enhancing user convenience and transforming the traditional dining experience, the app focuses on streamlining the ordering process and eliminating the need to stand in queues at restaurants.

Users of the app are presented with an intuitive and visually appealing interface. The React-based front-end offers a responsive and engaging design that facilitates easy navigation of menu items, and customization choices. Through this interface, customers can effortlessly browse a diverse range of dining establishments, explore detailed menus with enticing imagery, and personalize their orders according to their preferences and dietary requirements.

The core innovation of the app lies in its ability to empower customers to place their orders remotely, thus eliminating the need to physically queue at the restaurant. This not only reduces wait times but also provides users with the flexibility to customize the food based on their preference. 

From a technical perspective, the back-end powered by Express.js and Node.js facilitates seamless communication between the user interface and the underlying database. MongoDB serves as the repository for storing user profiles, menu details, and order histories. This architecture ensures efficient data management, quick retrieval of information, and accurate order processing.

## Problem Statement
To develop an innovative and user-friendly food ordering web application that not only simplifies the process of placing orders but also introduces a feature that eradicates the waiting-in-line dilemma, ensuring that customers can easily order food can enjoy their meals without the frustration of queuing up. 

The introduction of "GoFood – A Food Ordering App" signifies a novel approach to addressing the problem of queue-based food ordering systems. The project not only aims to eliminate the inconvenience of queuing but also reimagines the entire dining experience. Through a combination of technological innovation, user-centric design, and efficient data management, this app aspires to revolutionize the way individuals interact with dining establishments, promising a seamless, efficient, and enjoyable food ordering process.

## Objectives
The primary goals of this project involve creating a creative and user-centric web application for food ordering. This platform aims not only to streamline the order placement process but also to introduce a unique feature that eliminates the challenge of waiting in lines. This ensures that customers can effortlessly order their food and relish their meals without the inconvenience of queuing up. The objectives of the proposed solution, "GoFood – A Food Ordering App," are as follows:
- Efficient Food Ordering Process: Develop a streamlined and intuitive food ordering process that allows customers to easily browse menus, select items, customize preferences, and place orders seamlessly through the app.
- Elimination of Queuing: Implement a ground breaking feature that eradicates the need for physical queuing at hotels and restaurants. The app should ensure that customers can place their orders remotely, eliminating the frustration of waiting in lines.
- User-Friendly Interface: Design a user interface that is intuitive, visually appealing, and easy to navigate. Ensure that users of varying technological literacy levels can interact with the app effortlessly.
- Real-time Order Management: Implement a backend system that efficiently manages incoming orders, updating order statuses and sending notifications to customers when their orders are confirmed, being prepared, and ready for pickup/delivery.
- Mobile Responsiveness: Ensure that the web app is responsive and accessible across various devices, enabling customers to place orders conveniently from smartphones, tablets, and desktops.
- Data Security and Privacy: Implement robust security measures to safeguard customer data, ensuring compliance with data protection regulations.

## Entity Relationship Diagram
![image](https://github.com/Abhirambs-08/GoFood-A-Food-Ordering-App-DBMS/assets/119886477/5d630b10-14f3-4e6a-a8f8-9300089331e0)

## Schema Diagram
![image](https://github.com/Abhirambs-08/GoFood-A-Food-Ordering-App-DBMS/assets/119886477/7090eefa-fd90-48d2-bb11-a33aaff4045a)

## Relational Tables
While the "GoFood – A Food Ordering App" project primarily utilizes a NoSQL database (MongoDB) for data storage, there are instances where relational structures are employed to establish connections between different data components. Relational tables offer a way to manage relationships between entities, enhancing data organization and integrity.The collections made for the project are displayed in Figure 6.1. "GoFood – A Food Ordering App" project judiciously balances NoSQL document storage with relational structures. While MongoDB excels at handling unstructured data, relational tables are employed where relationships and structured querying are key.

Even though the project predominantly employs MongoDB as a document-oriented database, certain project requirements necessitate a more structured approach for handling specific relationships. Relational tables are employed to effectively manage associations between users, their dining preferences and order history. While the project primarily centres around a document-oriented database, these relational structures contribute to enhanced data management and streamlined retrieval processes. 
![image](https://github.com/Abhirambs-08/GoFood-A-Food-Ordering-App-DBMS/assets/119886477/0a9f806d-0c30-49ad-90f6-ec4e479054a5)

## Architectur
In a MERN stack project, when a user interacts with the application, the flow typically follows this pattern:
- The user interacts with the View (React components) through the user interface.
- The View triggers a request that is sent to the Controller (Express.js) via an API route.
- The Controller processes the request, interacts with the Model (MongoDB), and retrieves or updates data as needed.
- The Controller sends the relevant data back to the View.
- The View (React components) renders the data and updates the user interface

![image](https://github.com/Abhirambs-08/GoFood-A-Food-Ordering-App-DBMS/assets/119886477/ad25fbd9-9a9d-49c7-94cd-e6e87cd8794f)

## Results
- Upon accessing the webpage, users are immediately directed to the homepage of the "GoFood – A Food Ordering App." Here, they encounter the fundamental layout of the app, featuring key components such as the Navigation Bar, Carousel, Cards, and Footer. Notably, the Navbar prominently offers the options for both Sign Up and Login, facilitating user interaction and access to the app's functionalities. The homepage is shown in the below images.
![image](https://github.com/Abhirambs-08/GoFood-A-Food-Ordering-App-DBMS/assets/119886477/a91b53bc-6743-422f-a5f8-f3571cb55e96)

- For new users, the initial step involves navigating to the SignUp page to create an account. This process entails entering essential details like Username, Email address, Password, and Location for successful registration. Once registered, users can subsequently access the web app by logging in. The Login process entails entering the registered Email and Password. All the Data entered by the user are stored in the database. Visual representations of the Signup and Login Pages are provided below for reference.
![image](https://github.com/Abhirambs-08/GoFood-A-Food-Ordering-App-DBMS/assets/119886477/33496d8f-30fb-4e40-be23-13e031f5b8b7)
![image](https://github.com/Abhirambs-08/GoFood-A-Food-Ordering-App-DBMS/assets/119886477/a3ac6418-901d-45d2-87b3-c83e5d1302e4)

- Upon selecting food items using the "Add to Cart" button, the chosen items seamlessly populate the "MyCart" section. The badge affixed to the "MyCart" icon dynamically reflects the quantity of items present in the cart; ensuring users are informed at a glance. Within the "MyCart" interface, users are empowered to remove specific food items, fostering a tailored experience. A comprehensive overview is provided, featuring the cumulative order amount and a convenient "Checkout" option. Upon clicking "Checkout," the selected items are promptly updated in the database, facilitating order management. Notably, the ordered items are also accessible via the dedicated "MyOrders" page, allowing users to conveniently track and review their past orders. This streamlined process ensures efficient order placement, modification, and review for a user-friendly experience.
![image](https://github.com/Abhirambs-08/GoFood-A-Food-Ordering-App-DBMS/assets/119886477/252261d7-c08c-4cbb-b383-87c0aaa7baa6)
![image](https://github.com/Abhirambs-08/GoFood-A-Food-Ordering-App-DBMS/assets/119886477/c82cc245-4865-47a1-9b60-63291693a4ee)
![image](https://github.com/Abhirambs-08/GoFood-A-Food-Ordering-App-DBMS/assets/119886477/d2efe80e-f978-4b3f-9ea0-a1ad71ff7da7)


