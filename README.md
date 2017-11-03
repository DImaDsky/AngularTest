**Web application with Angularjs**
Application should have 3 pages:
1. Main page
2. Cart page
3. History page

Every page should have header with menu:

Main Page | Cart Page | History Page

for navigation between pages. Active page name should be highlighted.

**Main page**

Contains list of data in format:
#Number | Name | Ingredients separated by comma | Price prepended by currency
sign | Add to cart button.

User should be able to filter data by name and sort data by price.
By clicking add to cart button user receives message about successful operation
and proper item should be saved to cart.

**Cart Page**

Contains list of added items, sum of their price and submit button.

User should be able to remove item from cart, which should affect total price. By
clicking submit button order should be saved to history with current date.

**History Page**

Contains list of orders sorted by date.