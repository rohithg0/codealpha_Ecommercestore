async function placeOrder() {

    const order = {
        customerName: "Rohith",
        products: ["Laptop", "Phone"],
        totalAmount: 70000
    };

    const response = await fetch("/place-order", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(order)
    });

    const data = await response.json();

    alert(data.message);
}