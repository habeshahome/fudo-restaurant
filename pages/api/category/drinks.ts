export default function handler(req, res) {
    res.status(200).json({
        "message": "Category Data Fetched Successfully",
        "statusCode": 200,
        "data": [
        {
        "id": "15",
        "slug": "cococola",
        "title": "Cococola",
        "category": "drinks",
        "image": "http://localhost:3000/uploads/food/drinks/11.jpg",
        "price": 2,
        "currency": "$",
        "availableQuantity": 150
        },
        {
        "id": "16",
        "slug": "pepsi-large",
        "title": "Pepsi Large",
        "category": "drinks",
        "image": "http://localhost:3000/uploads/food/drinks/12.jpg",
        "price": 4,
        "currency": "$",
        "availableQuantity": 150
        }
        ]
        })
  }