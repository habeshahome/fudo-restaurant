export default function handler(req, res) {
    res.status(200).json({
        "message": "Category Data Fetched Successfully",
        "statusCode": 200,
        "data": [
        {
        "id": "12",
        "slug": "fries-small",
        "title": "Fries Small",
        "category": "fries",
        "image": "http://localhost:3000/uploads/food/fries/15.jpg",
        "price": 1,
        "currency": "$",
        "availableQuantity": 150
        },
        {
        "id": "13",
        "slug": "fries-medium",
        "title": "Fries Medium",
        "category": "fries",
        "image": "http://localhost:3000/uploads/food/fries/16.jpg",
        "price": 2,
        "currency": "$",
        "availableQuantity": 150
        },
        {
        "id": "14",
        "slug": "fries-large",
        "title": "Fries Large",
        "category": "fries",
        "image": "http://localhost:3000/uploads/food/fries/16.jpg",
        "price": 3,
        "currency": "$",
        "availableQuantity": 150
        }
        ]
        })
  }