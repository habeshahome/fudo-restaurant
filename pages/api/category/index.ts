export default function handler(req, res) {
    res.status(200).json({
        "message": "Category Fetched Successfully",
        "statusCode": 200,
        "data": [
        {
        "slug": "pizza",
        "name": "Pizza",
        "icon": "http://localhost:3000/uploads/category/Group-9045.png"
        },
        {
        "slug": "fries",
        "name": "French Fries",
        "icon": "http://localhost:3000/uploads/category/Group-9047.png"
        },
        {
        "slug": "burger",
        "name": "Burger",
        "icon": "http://localhost:3000/uploads/category/Group-9049.png"
        },
        {
        "slug": "drinks",
        "name": "Soft Drinks",
        "icon": "http://localhost:3000/uploads/category/Group-9051.png"
        }
        ]
        })
  }