export default function handler(req, res) {
    res.status(200).json({
        "message": "Contact Fetched Successfully",
        "statusCode": 200,
        "data": [
        {
        "id": 1,
        "slug": "working-hours",
        "title": "Working Hours",
        "description": "Mon Fri : 10AM -9:30PM",
        "icon": "http://localhost:3000/uploads/contact/Calendar.png"
        },
        {
        "id": 2,
        "slug": "store-location",
        "title": "Store Location",
        "description": "Trails End Road Ft United States",
        "icon": "http://localhost:3000/uploads/contact/Location.png"
        },
        {
        "id": 2,
        "slug": "contact-number",
        "title": "contact-number",
        "description": "+997 406 123 765",
        "icon": "http://localhost:3000/uploads/contact/call.png"
        }
        ]
        })
  }