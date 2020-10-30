var orders = {
	FC14256: "Fresh Crab",
	CP75628: "Chinese Meigan Pickles",
	GP23847: "Guajava Pearl"
}

var items = {
	FreshCrab: "$5.00",
	ChinesePickles: "$4.00",
	GuajavaPearl: "$2.00"
}

function orderHistorySearch (orders, orderNumber) {
	if (orderNumber in orders == true) {
		let orderItems = orders[orderNumber]
		return orderItems
	}
	else {
		window.alert("Order Number cannot be found")
		return
	}
}

function displayProductPrice (items, itemsAttr, itemsAttrValue)(
	attr = document.querySelector(itemsAttr)
	attrValue = document.querySelector(itemsAttrValue)
	attrValue.value = items[attr.value]
}