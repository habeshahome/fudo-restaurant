export default function handler(req, res) {
    res.status(200).json({
        "message": "Category Data Fetched Successfully",
        "statusCode": 200,
        "data": [
        {
        "id": "7",
        "slug": "tripple-whopper",
        "title": "Tripple Whopper ",
        "category": "burger",
        "image": "http://localhost:3000/uploads/food/burger/11.jpg",
        "price": 8.2,
        "currency": "$",
        "availableQuantity": 10
        },
        {
        "id": "8",
        "slug": "mushroom-n-swiss-xl",
        "title": "Mushroom N swiss xl ",
        "category": "burger",
        "image": "http://localhost:3000/uploads/food/burger/12.jpg",
        "price": 8.2,
        "currency": "$",
        "availableQuantity": 10
        },
        {
        "id": "9",
        "slug": "beef-royal",
        "title": "Beef Royal",
        "category": "burger",
        "image": "http://localhost:3000/uploads/food/burger/13.jpg",
        "price": 10.2,
        "currency": "$",
        "availableQuantity": 12
        },
        {
        "id": "10",
        "slug": "whopper",
        "title": "Whopper",
        "category": "burger",
        "image": "http://localhost:3000/uploads/food/burger/14.jpg",
        "price": 7.5,
        "currency": "$",
        "availableQuantity": 10
        },
        {
        "id": "11",
        "slug": "big-king",
        "title": "Big king",
        "category": "burger",
        "image": "http://localhost:3000/uploads/food/burger/15.jpg",
        "price": 5.2,
        "currency": "$",
        "availableQuantity": 15
        }
        ]
        })
  }