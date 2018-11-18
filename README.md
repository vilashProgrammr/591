# Ecommerce Assignment.
The project is basic ecommerce app which showcases a basic workflow from Product list to Checkout.

# Assignment Details
	The following are the tasks which can be set as part of this base assignments.

	##Task 1
	Title Product Catalog
	
	Read all product information from a sample JSON file and display in Product list page and Product details page.
	On clicking on Product list pages product item should redirect to product detail page showing respective products details.

	Angular Concepts required: Angular Models, Services, Components, Html Templating, Router

	##Task2
	Title: Cart Functionality
	
	Enable Cart workflow from dynamic product list page where clicking "Add to cart" of specific product item should add the respective product in the cart.
	On clicking on "Remove" button in cart page should remove the respective product item.
	The shopping summary should be calculated and shown based on the current product cart items.
	On updating the Quantity of the cart line items should update the pricing of shopping summary and price total.
	If theres no products in the cart then the cart should show a default message.

	Angular Concepts required: Angular Models, Services, Components, Html Templating, Router

	##Task3
	Title: Checkout workflow

	Once clicking on "Checkout" From cart page, the shopping summary should be shown in checkout page.
	If theres no product in the cart page then no user should be able to see the checkout page.
	All the products from carts should be shown in checkout page too.
	A form of Shipping/Billing address should be shown and form validation should be enabled to make sure that all the mandatory fields are entered by the users.
	Clicking on "Place Order" button should redirect to Order Confirmation page showing below information:
		-Product line items
		-Shopping summary
		-Shipping/Billing address information.

	Angular Concepts required: Services, Components, Html Templating, Router, Authguard

	##Task4
	Title: Search Autocomplete

	On typing on search input box should populate the search autocomplete options.
	On clicking on "Search" button should list all the products matching the search term.
	The search term should match the title or description or category of product information.

	Angular Concepts required: Services, Components, Html Templating, Observables


