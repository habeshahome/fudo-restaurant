export default function handler(req, res) {
    res.status(200).json({
        "message": "Category Data Fetched Successfully",
        "statusCode": 200,
        "data": [
        {
        "id": "1",
        "slug": "margherita",
        "title": "Margherita",
        "category": "pizza",
        "image": "http://localhost:3000/uploads/food/pizza/11.jpg",
        "price": 3.2,
        "currency": "$",
        "availableQuantity": 10
        },
        {
        "id": "2",
        "slug": "cheeky-chicken",
        "title": "Cheeky Chicken",
        "category": "pizza",
        "image": "http://localhost:3000/uploads/food/pizza/12.jpg",
        "price": 2.5,
        "currency": "$",
        "availableQuantity": 14
        },
        {
        "id": "3",
        "slug": "hot-stuff",
        "title": "Hot stuff",
        "category": "pizza",
        "image": "http://localhost:3000/uploads/food/pizza/13.jpg",
        "price": 6.5,
        "currency": "$",
        "availableQuantity": 5
        },
        {
        "id": "4",
        "slug": "classic-pepproni",
        "title": "Classic Pepproni",
        "category": "pizza",
        "image": "http://localhost:3000/uploads/food/pizza/14.jpg",
        "price": 7,
        "currency": "$",
        "availableQuantity": 2
        },
        {
        "id": "5",
        "slug": "cheeky-chicken",
        "title": "Cheeky Chicken",
        "category": "pizza",
        "image": "http://localhost:3000/uploads/food/pizza/15.jpg",
        "price": 4.2,
        "currency": "$",
        "availableQuantity": 9
        },
        {
        "id": "6",
        "slug": "spicy-cheeky-chicken",
        "title": "Spicy Cheeky Chicken",
        "category": "pizza",
        "image": "http://localhost:3000/uploads/food/pizza/16.jpg",
        "price": 5.2,
        "currency": "$",
        "availableQuantity": 10
        }
        ]
        })
  }