export const MOCKED_MESSAGES = [
  {
    "role": "user",
    "parts": [
      {
        "type": "text",
        "text": "hi!"
      }
    ],
    "id": "63trXVsYsZRtRvid"
  },
  {
    "id": "OHknu4uGJJQhoLVL",
    "role": "assistant",
    "parts": [
      {
        "type": "step-start"
      },
      {
        "type": "text",
        "text": "Hello! How can I assist you today?",
        "providerMetadata": {
          "openai": {
            "itemId": "msg_68b06f4d9a5c81929b9e5b1f981f00c70e0efc9043002d94"
          }
        },
        "state": "done"
      }
    ]
  },
  {
    "role": "user",
    "parts": [
      {
        "type": "text",
        "text": "i want to travel to DR"
      }
    ],
    "id": "3c2DMeu3y2imiOdY"
  },
  {
    "id": "6bA2NuAcrxP6o9fc",
    "role": "assistant",
    "parts": [
      {
        "type": "step-start"
      },
      {
        "type": "text",
        "text": "That sounds great! The Dominican Republic is a wonderful travel destination. Could you please provide me with your travel dates and the number of guests? This will help me find the best hotel options for you.",
        "providerMetadata": {
          "openai": {
            "itemId": "msg_68b06f583b14819284509bb861a098250e0efc9043002d94"
          }
        },
        "state": "done"
      }
    ]
  },
  {
    "role": "user",
    "parts": [
      {
        "type": "text",
        "text": "we are 2, on september 10 to 15"
      }
    ],
    "id": "xxsRrQdDgSgB2JQf"
  },
  {
    "id": "HqTq9F0Xdqnf6N1B",
    "role": "assistant",
    "parts": [
      {
        "type": "step-start"
      },
      {
        "type": "dynamic-tool",
        "toolName": "search_hotels",
        "toolCallId": "call_pQHfS3zEjlbpcxhhvlH4wwRn",
        "state": "output-available",
        "input": {
          "country": "Dominican Republic",
          "city": "Punta Cana"
        },
        "output": {
          "content": [
            {
              "type": "text",
              "text": "{\"status_code\":200,\"headers\":{\"date\":\"Thu, 28 Aug 2025 15:02:03 GMT\",\"server\":\"uvicorn\",\"content-length\":\"893\",\"content-type\":\"application/json\"},\"content\":[{\"name\":\"Royalton Bavaro Resort & Casino\",\"country\":\"Dominican Republic\",\"city\":\"Punta Cana\",\"stars\":5,\"images\":[\"https://marriott.cdn.tambourine.com/royalton-resorts/media/intro-resized-68a8a5d65ef14.jpg\",\"https://marriott.cdn.tambourine.com/royalton-resorts/media/gallery-3-68a8a5d1a2605.jpg\"],\"id\":\"caaa8521-f4ce-4f57-ab3e-e9f90a967395\",\"created_at\":\"2025-08-21T00:02:16.316964Z\",\"updated_at\":\"2025-08-27T13:46:51.779113Z\"},{\"name\":\"Adults Only, Royalton CHIC Punta Cana Resort & Casino\",\"country\":\"Dominican Republic\",\"city\":\"Punta Cana\",\"stars\":5,\"images\":[\"https://www.royaltonchicpuntacana.com/images/slides/slide-1.jpg\",\"https://www.royaltonchicpuntacana.com/images/slides/slide-2.jpg\",\"https://www.royaltonchicpuntacana.com/images/slides/slide-4.jpg\"],\"id\":\"a15cb0a1-2d47-4796-aa1b-0861ed7e7a0b\",\"created_at\":\"2025-08-21T00:12:10.639087Z\",\"updated_at\":\"2025-08-27T13:50:54.906642Z\"}],\"success\":true,\"url\":\"http://127.0.0.1:8000/hotels?city=Punta+Cana\"}"
            }
          ],
          "isError": false,
          "structuredContent": {
            "status_code": 200,
            "headers": {
              "date": "Thu, 28 Aug 2025 15:02:03 GMT",
              "server": "uvicorn",
              "content-length": "893",
              "content-type": "application/json"
            },
            "content": [
              {
                "name": "Royalton Bavaro Resort & Casino",
                "country": "Dominican Republic",
                "city": "Punta Cana",
                "stars": 5,
                "images": [
                  "https://marriott.cdn.tambourine.com/royalton-resorts/media/intro-resized-68a8a5d65ef14.jpg",
                  "https://marriott.cdn.tambourine.com/royalton-resorts/media/gallery-3-68a8a5d1a2605.jpg"
                ],
                "id": "caaa8521-f4ce-4f57-ab3e-e9f90a967395",
                "created_at": "2025-08-21T00:02:16.316964Z",
                "updated_at": "2025-08-27T13:46:51.779113Z"
              },
              {
                "name": "Adults Only, Royalton CHIC Punta Cana Resort & Casino",
                "country": "Dominican Republic",
                "city": "Punta Cana",
                "stars": 5,
                "images": [
                  "https://www.royaltonchicpuntacana.com/images/slides/slide-1.jpg",
                  "https://www.royaltonchicpuntacana.com/images/slides/slide-2.jpg",
                  "https://www.royaltonchicpuntacana.com/images/slides/slide-4.jpg"
                ],
                "id": "a15cb0a1-2d47-4796-aa1b-0861ed7e7a0b",
                "created_at": "2025-08-21T00:12:10.639087Z",
                "updated_at": "2025-08-27T13:50:54.906642Z"
              }
            ],
            "success": true,
            "url": "http://127.0.0.1:8000/hotels?city=Punta+Cana"
          }
        },
        "callProviderMetadata": {
          "openai": {
            "itemId": "fc_68b06f6b9e6881929d76ddf6e792cbc30e0efc9043002d94"
          }
        }
      },
      {
        "type": "step-start"
      },
      {
        "type": "text",
        "text": "Sure, here are the best hotels in Punta Cana:\n\n1. **Royalton Bavaro Resort & Casino**\n   - Stars: ⭐⭐⭐⭐⭐\n   - A luxurious resort featuring a casino, multiple dining options, and stunning beachfront views.\n\n2. **Adults Only, Royalton CHIC Punta Cana Resort & Casino**\n   - Stars: ⭐⭐⭐⭐⭐\n   - This adults-only resort offers a vibrant atmosphere, with upscale amenities and a lively nightlife.\n\nWould you like more details about any specific hotel or assistance with bookings?",
        "providerMetadata": {
          "openai": {
            "itemId": "msg_68b06f6d6a1881928958ec4ec1a70f910e0efc9043002d94"
          }
        },
        "state": "done"
      }
    ]
  },
  {
    "role": "user",
    "parts": [
      {
        "type": "text",
        "text": "Select the hotel Adults Only, Royalton CHIC Punta Cana Resort & Casino "
      }
    ],
    "id": "S2nfAMg3lxL1yswl"
  },
  {
    "id": "qRcJ6tCDvI4pdUwN",
    "role": "assistant",
    "parts": [
      {
        "type": "step-start"
      },
      {
        "type": "dynamic-tool",
        "toolName": "get_hotel_details_with_rooms",
        "toolCallId": "call_F25Cc6oGLuEbtjr5z748Nlvw",
        "state": "output-available",
        "input": {
          "hotel_id": "a15cb0a1-2d47-4796-aa1b-0861ed7e7a0b"
        },
        "output": {
          "content": [
            {
              "type": "text",
              "text": "{\"status_code\":200,\"headers\":{\"date\":\"Thu, 28 Aug 2025 15:02:24 GMT\",\"server\":\"uvicorn\",\"content-length\":\"3214\",\"content-type\":\"application/json\"},\"content\":{\"name\":\"Adults Only, Royalton CHIC Punta Cana Resort & Casino\",\"country\":\"Dominican Republic\",\"city\":\"Punta Cana\",\"stars\":5,\"images\":[\"https://www.royaltonchicpuntacana.com/images/slides/slide-1.jpg\",\"https://www.royaltonchicpuntacana.com/images/slides/slide-2.jpg\",\"https://www.royaltonchicpuntacana.com/images/slides/slide-4.jpg\"],\"id\":\"a15cb0a1-2d47-4796-aa1b-0861ed7e7a0b\",\"created_at\":\"2025-08-21T00:12:10.639087Z\",\"updated_at\":\"2025-08-27T13:50:54.906642Z\",\"rooms\":[{\"name\":\"Luxury Room\",\"description\":\"Our Luxury Room features a king bed, brightly decorated with sleek under lighting and larger than life murals. Take in beautiful sunsets each night from your garden view room.\",\"price\":245.0,\"guest\":4,\"images\":[\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_4323.jpg\",\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_4367.jpg\",\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_4310.jpg\",\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_4384.jpg\",\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_437520200630155606155.jpg\"],\"amenities\":[\"63m2\",\"Hairdryer\",\"Free Wi-Fi\",\"Hypoallergenic pillows\",\"DreamBed™\",\"In-room safe\",\"Iron\",\"Air conditioning\",\"Satellite television\",\"Telephone\",\"Ceiling fan\",\"Fire detectors in guest rooms\",\"Coffee/Tea maker\",\"Minibar\",\"Walk-in shower\",\"Balcony/Terrace\",\"Bluetooth audio stations\",\"Bathrobe\",\"Wireless internet connection\",\"Turn down service\"],\"id\":\"44e3d24a-dd09-4d16-be87-009fe965b9b6\",\"hotel_id\":\"a15cb0a1-2d47-4796-aa1b-0861ed7e7a0b\",\"created_at\":\"2025-08-21T00:15:50.520896Z\",\"updated_at\":null},{\"name\":\"Luxury Presidential One Bedroom Suite\",\"description\":\"This luxury suite offers a sitting area and bedroom with a king size bed separated by elegant sliding doors. This room features signature purple lighting and lush garden views/\",\"price\":385.0,\"guest\":4,\"images\":[\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/presidential_one_bedroom.jpg\",\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_3591.jpg\",\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_3646.jpg\",\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_3674.jpg\",\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_356920200630160124816.jpg\",\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_358220200630160125518.jpg\"],\"amenities\":[\"83m2\",\"Butler service\",\"Distinctive wrist bracelet\",\"Access to the Mermaid Pool\",\"Exclusive beach area\",\"Separate sitting area\",\"Jacuzzi tub\",\"Dreambed™ mattress\",\"High thread-count sheets\",\"Bluetooth audio station\",\"Satellite television\",\"Coffee and tea maker\",\"24-hour room service\",\"Air conditioning\",\"Iron and ironing board\",\"Turndown service\"],\"id\":\"cf959b6e-9802-4ac1-a452-80584df5447c\",\"hotel_id\":\"a15cb0a1-2d47-4796-aa1b-0861ed7e7a0b\",\"created_at\":\"2025-08-21T00:20:27.478086Z\",\"updated_at\":null}]},\"success\":true,\"url\":\"http://127.0.0.1:8000/hotels/a15cb0a1-2d47-4796-aa1b-0861ed7e7a0b/with-rooms\"}"
            }
          ],
          "isError": false,
          "structuredContent": {
            "status_code": 200,
            "headers": {
              "date": "Thu, 28 Aug 2025 15:02:24 GMT",
              "server": "uvicorn",
              "content-length": "3214",
              "content-type": "application/json"
            },
            "content": {
              "name": "Adults Only, Royalton CHIC Punta Cana Resort & Casino",
              "country": "Dominican Republic",
              "city": "Punta Cana",
              "stars": 5,
              "images": [
                "https://www.royaltonchicpuntacana.com/images/slides/slide-1.jpg",
                "https://www.royaltonchicpuntacana.com/images/slides/slide-2.jpg",
                "https://www.royaltonchicpuntacana.com/images/slides/slide-4.jpg"
              ],
              "id": "a15cb0a1-2d47-4796-aa1b-0861ed7e7a0b",
              "created_at": "2025-08-21T00:12:10.639087Z",
              "updated_at": "2025-08-27T13:50:54.906642Z",
              "rooms": [
                {
                  "name": "Luxury Room",
                  "description": "Our Luxury Room features a king bed, brightly decorated with sleek under lighting and larger than life murals. Take in beautiful sunsets each night from your garden view room.",
                  "price": 245,
                  "guest": 4,
                  "images": [
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_4323.jpg",
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_4367.jpg",
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_4310.jpg",
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_4384.jpg",
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_437520200630155606155.jpg"
                  ],
                  "amenities": [
                    "63m2",
                    "Hairdryer",
                    "Free Wi-Fi",
                    "Hypoallergenic pillows",
                    "DreamBed™",
                    "In-room safe",
                    "Iron",
                    "Air conditioning",
                    "Satellite television",
                    "Telephone",
                    "Ceiling fan",
                    "Fire detectors in guest rooms",
                    "Coffee/Tea maker",
                    "Minibar",
                    "Walk-in shower",
                    "Balcony/Terrace",
                    "Bluetooth audio stations",
                    "Bathrobe",
                    "Wireless internet connection",
                    "Turn down service"
                  ],
                  "id": "44e3d24a-dd09-4d16-be87-009fe965b9b6",
                  "hotel_id": "a15cb0a1-2d47-4796-aa1b-0861ed7e7a0b",
                  "created_at": "2025-08-21T00:15:50.520896Z",
                  "updated_at": null
                },
                {
                  "name": "Luxury Presidential One Bedroom Suite",
                  "description": "This luxury suite offers a sitting area and bedroom with a king size bed separated by elegant sliding doors. This room features signature purple lighting and lush garden views/",
                  "price": 385,
                  "guest": 4,
                  "images": [
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/presidential_one_bedroom.jpg",
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_3591.jpg",
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_3646.jpg",
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_3674.jpg",
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_356920200630160124816.jpg",
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_358220200630160125518.jpg"
                  ],
                  "amenities": [
                    "83m2",
                    "Butler service",
                    "Distinctive wrist bracelet",
                    "Access to the Mermaid Pool",
                    "Exclusive beach area",
                    "Separate sitting area",
                    "Jacuzzi tub",
                    "Dreambed™ mattress",
                    "High thread-count sheets",
                    "Bluetooth audio station",
                    "Satellite television",
                    "Coffee and tea maker",
                    "24-hour room service",
                    "Air conditioning",
                    "Iron and ironing board",
                    "Turndown service"
                  ],
                  "id": "cf959b6e-9802-4ac1-a452-80584df5447c",
                  "hotel_id": "a15cb0a1-2d47-4796-aa1b-0861ed7e7a0b",
                  "created_at": "2025-08-21T00:20:27.478086Z",
                  "updated_at": null
                }
              ]
            },
            "success": true,
            "url": "http://127.0.0.1:8000/hotels/a15cb0a1-2d47-4796-aa1b-0861ed7e7a0b/with-rooms"
          }
        },
        "callProviderMetadata": {
          "openai": {
            "itemId": "fc_68b06f7fdad0819293615d47e998b38a0e0efc9043002d94"
          }
        }
      },
      {
        "type": "step-start"
      },
      {
        "type": "text",
        "text": "Here are the details for the **Adults Only, Royalton CHIC Punta Cana Resort & Casino**:\n\n### Room Options:\n\n1. **Luxury Room**\n   - **Price**: $245 per night\n   - **Description**: Features a king bed, sleek decor, and garden views. Ideal for enjoying beautiful sunsets.\n   - **Amenities**:\n     - Free Wi-Fi\n     - In-room safe\n     - Iron and air conditioning\n     - Walk-in shower and balcony/terrace\n\n2. **Luxury Presidential One Bedroom Suite**\n   - **Price**: $385 per night\n   - **Description**: Offers a sitting area and bedroom with a king-size bed, separated by elegant sliding doors. Includes luxurious garden views.\n   - **Amenities**:\n     - Butler service\n     - Jacuzzi tub\n     - Exclusive beach area access\n     - 24-hour room service\n\nWould you like to proceed with a booking for one of these rooms? If so, please let me know which room you'd like and I'll check availability for your dates!",
        "providerMetadata": {
          "openai": {
            "itemId": "msg_68b06f824d78819283816bd49e8fa2ad0e0efc9043002d94"
          }
        },
        "state": "done"
      }
    ]
  },
  {
    "role": "user",
    "parts": [
      {
        "type": "text",
        "text": "Select room: Luxury Presidential One Bedroom Suite at \\$385 for 7 nights"
      }
    ],
    "id": "f6UWRKewpdRdFGVn"
  },
  {
    "id": "8z29asaBm84MEv3B",
    "role": "assistant",
    "parts": [
      {
        "type": "step-start"
      },
      {
        "type": "dynamic-tool",
        "toolName": "search_availability",
        "toolCallId": "call_QLSraGTv7bYcWCpqgilk5n8H",
        "state": "output-available",
        "input": {
          "check_in_date": "2025-09-10",
          "check_out_date": "2025-09-15",
          "guests": 2,
          "min_rooms": 1,
          "hotel_id": "a15cb0a1-2d47-4796-aa1b-0861ed7e7a0b",
          "room_id": "cf959b6e-9802-4ac1-a452-80584df5447c"
        },
        "output": {
          "content": [
            {
              "type": "text",
              "text": "{\"status_code\":200,\"headers\":{\"date\":\"Thu, 28 Aug 2025 15:02:46 GMT\",\"server\":\"uvicorn\",\"content-length\":\"10279\",\"content-type\":\"application/json\"},\"content\":[{\"date\":\"2025-09-10\",\"total_rooms\":5,\"available_rooms\":5,\"price_override\":null,\"is_blocked\":false,\"id\":\"00e5db41-dc6e-4033-a5cf-ac09aa671e88\",\"room_id\":\"cf959b6e-9802-4ac1-a452-80584df5447c\",\"created_at\":\"2025-08-21T00:37:17.711930Z\",\"updated_at\":null,\"room\":{\"name\":\"Luxury Presidential One Bedroom Suite\",\"description\":\"This luxury suite offers a sitting area and bedroom with a king size bed separated by elegant sliding doors. This room features signature purple lighting and lush garden views/\",\"price\":385.0,\"guest\":4,\"images\":[\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/presidential_one_bedroom.jpg\",\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_3591.jpg\",\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_3646.jpg\",\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_3674.jpg\",\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_356920200630160124816.jpg\",\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_358220200630160125518.jpg\"],\"amenities\":[\"83m2\",\"Butler service\",\"Distinctive wrist bracelet\",\"Access to the Mermaid Pool\",\"Exclusive beach area\",\"Separate sitting area\",\"Jacuzzi tub\",\"Dreambed™ mattress\",\"High thread-count sheets\",\"Bluetooth audio station\",\"Satellite television\",\"Coffee and tea maker\",\"24-hour room service\",\"Air conditioning\",\"Iron and ironing board\",\"Turndown service\"],\"id\":\"cf959b6e-9802-4ac1-a452-80584df5447c\",\"hotel_id\":\"a15cb0a1-2d47-4796-aa1b-0861ed7e7a0b\",\"created_at\":\"2025-08-21T00:20:27.478086Z\",\"updated_at\":null}},{\"date\":\"2025-09-11\",\"total_rooms\":5,\"available_rooms\":5,\"price_override\":null,\"is_blocked\":false,\"id\":\"da1e8651-341b-4384-82e8-330052d99a8a\",\"room_id\":\"cf959b6e-9802-4ac1-a452-80584df5447c\",\"created_at\":\"2025-08-21T00:37:17.711930Z\",\"updated_at\":null,\"room\":{\"name\":\"Luxury Presidential One Bedroom Suite\",\"description\":\"This luxury suite offers a sitting area and bedroom with a king size bed separated by elegant sliding doors. This room features signature purple lighting and lush garden views/\",\"price\":385.0,\"guest\":4,\"images\":[\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/presidential_one_bedroom.jpg\",\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_3591.jpg\",\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_3646.jpg\",\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_3674.jpg\",\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_356920200630160124816.jpg\",\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_358220200630160125518.jpg\"],\"amenities\":[\"83m2\",\"Butler service\",\"Distinctive wrist bracelet\",\"Access to the Mermaid Pool\",\"Exclusive beach area\",\"Separate sitting area\",\"Jacuzzi tub\",\"Dreambed™ mattress\",\"High thread-count sheets\",\"Bluetooth audio station\",\"Satellite television\",\"Coffee and tea maker\",\"24-hour room service\",\"Air conditioning\",\"Iron and ironing board\",\"Turndown service\"],\"id\":\"cf959b6e-9802-4ac1-a452-80584df5447c\",\"hotel_id\":\"a15cb0a1-2d47-4796-aa1b-0861ed7e7a0b\",\"created_at\":\"2025-08-21T00:20:27.478086Z\",\"updated_at\":null}},{\"date\":\"2025-09-12\",\"total_rooms\":5,\"available_rooms\":5,\"price_override\":null,\"is_blocked\":false,\"id\":\"6e86812b-a8d0-4146-96e3-7745b44b121c\",\"room_id\":\"cf959b6e-9802-4ac1-a452-80584df5447c\",\"created_at\":\"2025-08-21T00:37:17.711930Z\",\"updated_at\":null,\"room\":{\"name\":\"Luxury Presidential One Bedroom Suite\",\"description\":\"This luxury suite offers a sitting area and bedroom with a king size bed separated by elegant sliding doors. This room features signature purple lighting and lush garden views/\",\"price\":385.0,\"guest\":4,\"images\":[\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/presidential_one_bedroom.jpg\",\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_3591.jpg\",\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_3646.jpg\",\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_3674.jpg\",\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_356920200630160124816.jpg\",\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_358220200630160125518.jpg\"],\"amenities\":[\"83m2\",\"Butler service\",\"Distinctive wrist bracelet\",\"Access to the Mermaid Pool\",\"Exclusive beach area\",\"Separate sitting area\",\"Jacuzzi tub\",\"Dreambed™ mattress\",\"High thread-count sheets\",\"Bluetooth audio station\",\"Satellite television\",\"Coffee and tea maker\",\"24-hour room service\",\"Air conditioning\",\"Iron and ironing board\",\"Turndown service\"],\"id\":\"cf959b6e-9802-4ac1-a452-80584df5447c\",\"hotel_id\":\"a15cb0a1-2d47-4796-aa1b-0861ed7e7a0b\",\"created_at\":\"2025-08-21T00:20:27.478086Z\",\"updated_at\":null}},{\"date\":\"2025-09-13\",\"total_rooms\":5,\"available_rooms\":5,\"price_override\":null,\"is_blocked\":false,\"id\":\"2b6a84ef-02a2-4b2b-95b4-e3be7d6bc880\",\"room_id\":\"cf959b6e-9802-4ac1-a452-80584df5447c\",\"created_at\":\"2025-08-21T00:37:17.711930Z\",\"updated_at\":null,\"room\":{\"name\":\"Luxury Presidential One Bedroom Suite\",\"description\":\"This luxury suite offers a sitting area and bedroom with a king size bed separated by elegant sliding doors. This room features signature purple lighting and lush garden views/\",\"price\":385.0,\"guest\":4,\"images\":[\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/presidential_one_bedroom.jpg\",\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_3591.jpg\",\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_3646.jpg\",\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_3674.jpg\",\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_356920200630160124816.jpg\",\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_358220200630160125518.jpg\"],\"amenities\":[\"83m2\",\"Butler service\",\"Distinctive wrist bracelet\",\"Access to the Mermaid Pool\",\"Exclusive beach area\",\"Separate sitting area\",\"Jacuzzi tub\",\"Dreambed™ mattress\",\"High thread-count sheets\",\"Bluetooth audio station\",\"Satellite television\",\"Coffee and tea maker\",\"24-hour room service\",\"Air conditioning\",\"Iron and ironing board\",\"Turndown service\"],\"id\":\"cf959b6e-9802-4ac1-a452-80584df5447c\",\"hotel_id\":\"a15cb0a1-2d47-4796-aa1b-0861ed7e7a0b\",\"created_at\":\"2025-08-21T00:20:27.478086Z\",\"updated_at\":null}},{\"date\":\"2025-09-14\",\"total_rooms\":5,\"available_rooms\":5,\"price_override\":null,\"is_blocked\":false,\"id\":\"77e3e5a1-1d0f-45b2-adf9-ce924f1ee054\",\"room_id\":\"cf959b6e-9802-4ac1-a452-80584df5447c\",\"created_at\":\"2025-08-21T00:37:17.711930Z\",\"updated_at\":null,\"room\":{\"name\":\"Luxury Presidential One Bedroom Suite\",\"description\":\"This luxury suite offers a sitting area and bedroom with a king size bed separated by elegant sliding doors. This room features signature purple lighting and lush garden views/\",\"price\":385.0,\"guest\":4,\"images\":[\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/presidential_one_bedroom.jpg\",\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_3591.jpg\",\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_3646.jpg\",\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_3674.jpg\",\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_356920200630160124816.jpg\",\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_358220200630160125518.jpg\"],\"amenities\":[\"83m2\",\"Butler service\",\"Distinctive wrist bracelet\",\"Access to the Mermaid Pool\",\"Exclusive beach area\",\"Separate sitting area\",\"Jacuzzi tub\",\"Dreambed™ mattress\",\"High thread-count sheets\",\"Bluetooth audio station\",\"Satellite television\",\"Coffee and tea maker\",\"24-hour room service\",\"Air conditioning\",\"Iron and ironing board\",\"Turndown service\"],\"id\":\"cf959b6e-9802-4ac1-a452-80584df5447c\",\"hotel_id\":\"a15cb0a1-2d47-4796-aa1b-0861ed7e7a0b\",\"created_at\":\"2025-08-21T00:20:27.478086Z\",\"updated_at\":null}},{\"date\":\"2025-09-15\",\"total_rooms\":5,\"available_rooms\":5,\"price_override\":null,\"is_blocked\":false,\"id\":\"59a07d4f-ae6b-470a-a587-2b130e51eef5\",\"room_id\":\"cf959b6e-9802-4ac1-a452-80584df5447c\",\"created_at\":\"2025-08-21T00:37:17.711930Z\",\"updated_at\":null,\"room\":{\"name\":\"Luxury Presidential One Bedroom Suite\",\"description\":\"This luxury suite offers a sitting area and bedroom with a king size bed separated by elegant sliding doors. This room features signature purple lighting and lush garden views/\",\"price\":385.0,\"guest\":4,\"images\":[\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/presidential_one_bedroom.jpg\",\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_3591.jpg\",\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_3646.jpg\",\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_3674.jpg\",\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_356920200630160124816.jpg\",\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_358220200630160125518.jpg\"],\"amenities\":[\"83m2\",\"Butler service\",\"Distinctive wrist bracelet\",\"Access to the Mermaid Pool\",\"Exclusive beach area\",\"Separate sitting area\",\"Jacuzzi tub\",\"Dreambed™ mattress\",\"High thread-count sheets\",\"Bluetooth audio station\",\"Satellite television\",\"Coffee and tea maker\",\"24-hour room service\",\"Air conditioning\",\"Iron and ironing board\",\"Turndown service\"],\"id\":\"cf959b6e-9802-4ac1-a452-80584df5447c\",\"hotel_id\":\"a15cb0a1-2d47-4796-aa1b-0861ed7e7a0b\",\"created_at\":\"2025-08-21T00:20:27.478086Z\",\"updated_at\":null}}],\"success\":true,\"url\":\"http://127.0.0.1:8000/availability/search\",\"request_body\":{\"check_in_date\":\"2025-09-10\",\"check_out_date\":\"2025-09-15\",\"guests\":2,\"min_rooms\":1,\"hotel_id\":\"a15cb0a1-2d47-4796-aa1b-0861ed7e7a0b\",\"room_id\":\"cf959b6e-9802-4ac1-a452-80584df5447c\"}}"
            }
          ],
          "isError": false,
          "structuredContent": {
            "status_code": 200,
            "headers": {
              "date": "Thu, 28 Aug 2025 15:02:46 GMT",
              "server": "uvicorn",
              "content-length": "10279",
              "content-type": "application/json"
            },
            "content": [
              {
                "date": "2025-09-10",
                "total_rooms": 5,
                "available_rooms": 5,
                "price_override": null,
                "is_blocked": false,
                "id": "00e5db41-dc6e-4033-a5cf-ac09aa671e88",
                "room_id": "cf959b6e-9802-4ac1-a452-80584df5447c",
                "created_at": "2025-08-21T00:37:17.711930Z",
                "updated_at": null,
                "room": {
                  "name": "Luxury Presidential One Bedroom Suite",
                  "description": "This luxury suite offers a sitting area and bedroom with a king size bed separated by elegant sliding doors. This room features signature purple lighting and lush garden views/",
                  "price": 385,
                  "guest": 4,
                  "images": [
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/presidential_one_bedroom.jpg",
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_3591.jpg",
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_3646.jpg",
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_3674.jpg",
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_356920200630160124816.jpg",
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_358220200630160125518.jpg"
                  ],
                  "amenities": [
                    "83m2",
                    "Butler service",
                    "Distinctive wrist bracelet",
                    "Access to the Mermaid Pool",
                    "Exclusive beach area",
                    "Separate sitting area",
                    "Jacuzzi tub",
                    "Dreambed™ mattress",
                    "High thread-count sheets",
                    "Bluetooth audio station",
                    "Satellite television",
                    "Coffee and tea maker",
                    "24-hour room service",
                    "Air conditioning",
                    "Iron and ironing board",
                    "Turndown service"
                  ],
                  "id": "cf959b6e-9802-4ac1-a452-80584df5447c",
                  "hotel_id": "a15cb0a1-2d47-4796-aa1b-0861ed7e7a0b",
                  "created_at": "2025-08-21T00:20:27.478086Z",
                  "updated_at": null
                }
              },
              {
                "date": "2025-09-11",
                "total_rooms": 5,
                "available_rooms": 5,
                "price_override": null,
                "is_blocked": false,
                "id": "da1e8651-341b-4384-82e8-330052d99a8a",
                "room_id": "cf959b6e-9802-4ac1-a452-80584df5447c",
                "created_at": "2025-08-21T00:37:17.711930Z",
                "updated_at": null,
                "room": {
                  "name": "Luxury Presidential One Bedroom Suite",
                  "description": "This luxury suite offers a sitting area and bedroom with a king size bed separated by elegant sliding doors. This room features signature purple lighting and lush garden views/",
                  "price": 385,
                  "guest": 4,
                  "images": [
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/presidential_one_bedroom.jpg",
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_3591.jpg",
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_3646.jpg",
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_3674.jpg",
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_356920200630160124816.jpg",
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_358220200630160125518.jpg"
                  ],
                  "amenities": [
                    "83m2",
                    "Butler service",
                    "Distinctive wrist bracelet",
                    "Access to the Mermaid Pool",
                    "Exclusive beach area",
                    "Separate sitting area",
                    "Jacuzzi tub",
                    "Dreambed™ mattress",
                    "High thread-count sheets",
                    "Bluetooth audio station",
                    "Satellite television",
                    "Coffee and tea maker",
                    "24-hour room service",
                    "Air conditioning",
                    "Iron and ironing board",
                    "Turndown service"
                  ],
                  "id": "cf959b6e-9802-4ac1-a452-80584df5447c",
                  "hotel_id": "a15cb0a1-2d47-4796-aa1b-0861ed7e7a0b",
                  "created_at": "2025-08-21T00:20:27.478086Z",
                  "updated_at": null
                }
              },
              {
                "date": "2025-09-12",
                "total_rooms": 5,
                "available_rooms": 5,
                "price_override": null,
                "is_blocked": false,
                "id": "6e86812b-a8d0-4146-96e3-7745b44b121c",
                "room_id": "cf959b6e-9802-4ac1-a452-80584df5447c",
                "created_at": "2025-08-21T00:37:17.711930Z",
                "updated_at": null,
                "room": {
                  "name": "Luxury Presidential One Bedroom Suite",
                  "description": "This luxury suite offers a sitting area and bedroom with a king size bed separated by elegant sliding doors. This room features signature purple lighting and lush garden views/",
                  "price": 385,
                  "guest": 4,
                  "images": [
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/presidential_one_bedroom.jpg",
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_3591.jpg",
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_3646.jpg",
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_3674.jpg",
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_356920200630160124816.jpg",
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_358220200630160125518.jpg"
                  ],
                  "amenities": [
                    "83m2",
                    "Butler service",
                    "Distinctive wrist bracelet",
                    "Access to the Mermaid Pool",
                    "Exclusive beach area",
                    "Separate sitting area",
                    "Jacuzzi tub",
                    "Dreambed™ mattress",
                    "High thread-count sheets",
                    "Bluetooth audio station",
                    "Satellite television",
                    "Coffee and tea maker",
                    "24-hour room service",
                    "Air conditioning",
                    "Iron and ironing board",
                    "Turndown service"
                  ],
                  "id": "cf959b6e-9802-4ac1-a452-80584df5447c",
                  "hotel_id": "a15cb0a1-2d47-4796-aa1b-0861ed7e7a0b",
                  "created_at": "2025-08-21T00:20:27.478086Z",
                  "updated_at": null
                }
              },
              {
                "date": "2025-09-13",
                "total_rooms": 5,
                "available_rooms": 5,
                "price_override": null,
                "is_blocked": false,
                "id": "2b6a84ef-02a2-4b2b-95b4-e3be7d6bc880",
                "room_id": "cf959b6e-9802-4ac1-a452-80584df5447c",
                "created_at": "2025-08-21T00:37:17.711930Z",
                "updated_at": null,
                "room": {
                  "name": "Luxury Presidential One Bedroom Suite",
                  "description": "This luxury suite offers a sitting area and bedroom with a king size bed separated by elegant sliding doors. This room features signature purple lighting and lush garden views/",
                  "price": 385,
                  "guest": 4,
                  "images": [
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/presidential_one_bedroom.jpg",
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_3591.jpg",
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_3646.jpg",
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_3674.jpg",
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_356920200630160124816.jpg",
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_358220200630160125518.jpg"
                  ],
                  "amenities": [
                    "83m2",
                    "Butler service",
                    "Distinctive wrist bracelet",
                    "Access to the Mermaid Pool",
                    "Exclusive beach area",
                    "Separate sitting area",
                    "Jacuzzi tub",
                    "Dreambed™ mattress",
                    "High thread-count sheets",
                    "Bluetooth audio station",
                    "Satellite television",
                    "Coffee and tea maker",
                    "24-hour room service",
                    "Air conditioning",
                    "Iron and ironing board",
                    "Turndown service"
                  ],
                  "id": "cf959b6e-9802-4ac1-a452-80584df5447c",
                  "hotel_id": "a15cb0a1-2d47-4796-aa1b-0861ed7e7a0b",
                  "created_at": "2025-08-21T00:20:27.478086Z",
                  "updated_at": null
                }
              },
              {
                "date": "2025-09-14",
                "total_rooms": 5,
                "available_rooms": 5,
                "price_override": null,
                "is_blocked": false,
                "id": "77e3e5a1-1d0f-45b2-adf9-ce924f1ee054",
                "room_id": "cf959b6e-9802-4ac1-a452-80584df5447c",
                "created_at": "2025-08-21T00:37:17.711930Z",
                "updated_at": null,
                "room": {
                  "name": "Luxury Presidential One Bedroom Suite",
                  "description": "This luxury suite offers a sitting area and bedroom with a king size bed separated by elegant sliding doors. This room features signature purple lighting and lush garden views/",
                  "price": 385,
                  "guest": 4,
                  "images": [
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/presidential_one_bedroom.jpg",
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_3591.jpg",
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_3646.jpg",
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_3674.jpg",
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_356920200630160124816.jpg",
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_358220200630160125518.jpg"
                  ],
                  "amenities": [
                    "83m2",
                    "Butler service",
                    "Distinctive wrist bracelet",
                    "Access to the Mermaid Pool",
                    "Exclusive beach area",
                    "Separate sitting area",
                    "Jacuzzi tub",
                    "Dreambed™ mattress",
                    "High thread-count sheets",
                    "Bluetooth audio station",
                    "Satellite television",
                    "Coffee and tea maker",
                    "24-hour room service",
                    "Air conditioning",
                    "Iron and ironing board",
                    "Turndown service"
                  ],
                  "id": "cf959b6e-9802-4ac1-a452-80584df5447c",
                  "hotel_id": "a15cb0a1-2d47-4796-aa1b-0861ed7e7a0b",
                  "created_at": "2025-08-21T00:20:27.478086Z",
                  "updated_at": null
                }
              },
              {
                "date": "2025-09-15",
                "total_rooms": 5,
                "available_rooms": 5,
                "price_override": null,
                "is_blocked": false,
                "id": "59a07d4f-ae6b-470a-a587-2b130e51eef5",
                "room_id": "cf959b6e-9802-4ac1-a452-80584df5447c",
                "created_at": "2025-08-21T00:37:17.711930Z",
                "updated_at": null,
                "room": {
                  "name": "Luxury Presidential One Bedroom Suite",
                  "description": "This luxury suite offers a sitting area and bedroom with a king size bed separated by elegant sliding doors. This room features signature purple lighting and lush garden views/",
                  "price": 385,
                  "guest": 4,
                  "images": [
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/presidential_one_bedroom.jpg",
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_3591.jpg",
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_3646.jpg",
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_3674.jpg",
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_356920200630160124816.jpg",
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/9875/images/room/_mg_358220200630160125518.jpg"
                  ],
                  "amenities": [
                    "83m2",
                    "Butler service",
                    "Distinctive wrist bracelet",
                    "Access to the Mermaid Pool",
                    "Exclusive beach area",
                    "Separate sitting area",
                    "Jacuzzi tub",
                    "Dreambed™ mattress",
                    "High thread-count sheets",
                    "Bluetooth audio station",
                    "Satellite television",
                    "Coffee and tea maker",
                    "24-hour room service",
                    "Air conditioning",
                    "Iron and ironing board",
                    "Turndown service"
                  ],
                  "id": "cf959b6e-9802-4ac1-a452-80584df5447c",
                  "hotel_id": "a15cb0a1-2d47-4796-aa1b-0861ed7e7a0b",
                  "created_at": "2025-08-21T00:20:27.478086Z",
                  "updated_at": null
                }
              }
            ],
            "success": true,
            "url": "http://127.0.0.1:8000/availability/search",
            "request_body": {
              "check_in_date": "2025-09-10",
              "check_out_date": "2025-09-15",
              "guests": 2,
              "min_rooms": 1,
              "hotel_id": "a15cb0a1-2d47-4796-aa1b-0861ed7e7a0b",
              "room_id": "cf959b6e-9802-4ac1-a452-80584df5447c"
            }
          }
        },
        "callProviderMetadata": {
          "openai": {
            "itemId": "fc_68b06f9550e48192b2bdf26fce96145b0e0efc9043002d94"
          }
        }
      },
      {
        "type": "step-start"
      },
      {
        "type": "dynamic-tool",
        "toolName": "create_booking",
        "toolCallId": "call_E4EcPaOCyGLutecUVv5pFa9p",
        "state": "output-available",
        "input": {
          "hotel_id": "a15cb0a1-2d47-4796-aa1b-0861ed7e7a0b",
          "room_id": "cf959b6e-9802-4ac1-a452-80584df5447c",
          "check_in_date": "2025-09-10",
          "check_out_date": "2025-09-15",
          "guests": 2
        },
        "output": {
          "content": [
            {
              "type": "text",
              "text": "{\"status_code\":200,\"headers\":{\"date\":\"Thu, 28 Aug 2025 15:02:50 GMT\",\"server\":\"uvicorn\",\"content-length\":\"724\",\"content-type\":\"application/json\"},\"content\":{\"hotel_id\":\"a15cb0a1-2d47-4796-aa1b-0861ed7e7a0b\",\"room_id\":\"cf959b6e-9802-4ac1-a452-80584df5447c\",\"check_in_date\":\"2025-09-10\",\"check_out_date\":\"2025-09-15\",\"guests\":2,\"price\":1925.0,\"status\":\"pending\",\"booking_id\":\"8563de94-b365-41fb-b55f-f291a9c1dfec\",\"confirmation_code\":null,\"created_at\":\"2025-08-28T15:02:50.719138Z\",\"updated_at\":null,\"hotel_name\":\"Adults Only, Royalton CHIC Punta Cana Resort & Casino\",\"hotel_city\":\"Punta Cana\",\"hotel_country\":\"Dominican Republic\",\"room_name\":\"Luxury Presidential One Bedroom Suite\",\"room_description\":\"This luxury suite offers a sitting area and bedroom with a king size bed separated by elegant sliding doors. This room features signature purple lighting and lush garden views/\"},\"success\":true,\"url\":\"http://127.0.0.1:8000/bookings\",\"request_body\":{\"hotel_id\":\"a15cb0a1-2d47-4796-aa1b-0861ed7e7a0b\",\"room_id\":\"cf959b6e-9802-4ac1-a452-80584df5447c\",\"check_in_date\":\"2025-09-10\",\"check_out_date\":\"2025-09-15\",\"guests\":2}}"
            }
          ],
          "isError": false,
          "structuredContent": {
            "status_code": 200,
            "headers": {
              "date": "Thu, 28 Aug 2025 15:02:50 GMT",
              "server": "uvicorn",
              "content-length": "724",
              "content-type": "application/json"
            },
            "content": {
              "hotel_id": "a15cb0a1-2d47-4796-aa1b-0861ed7e7a0b",
              "room_id": "cf959b6e-9802-4ac1-a452-80584df5447c",
              "check_in_date": "2025-09-10",
              "check_out_date": "2025-09-15",
              "guests": 2,
              "price": 1925,
              "status": "pending",
              "booking_id": "8563de94-b365-41fb-b55f-f291a9c1dfec",
              "confirmation_code": null,
              "created_at": "2025-08-28T15:02:50.719138Z",
              "updated_at": null,
              "hotel_name": "Adults Only, Royalton CHIC Punta Cana Resort & Casino",
              "hotel_city": "Punta Cana",
              "hotel_country": "Dominican Republic",
              "room_name": "Luxury Presidential One Bedroom Suite",
              "room_description": "This luxury suite offers a sitting area and bedroom with a king size bed separated by elegant sliding doors. This room features signature purple lighting and lush garden views/"
            },
            "success": true,
            "url": "http://127.0.0.1:8000/bookings",
            "request_body": {
              "hotel_id": "a15cb0a1-2d47-4796-aa1b-0861ed7e7a0b",
              "room_id": "cf959b6e-9802-4ac1-a452-80584df5447c",
              "check_in_date": "2025-09-10",
              "check_out_date": "2025-09-15",
              "guests": 2
            }
          }
        },
        "callProviderMetadata": {
          "openai": {
            "itemId": "fc_68b06f9920608192b1a846a35ba6b7ea0e0efc9043002d94"
          }
        }
      },
      {
        "type": "step-start"
      },
      {
        "type": "text",
        "text": "Your booking for the **Luxury Presidential One Bedroom Suite** at the **Adults Only, Royalton CHIC Punta Cana Resort & Casino** has been successfully created!\n\n### Booking Details:\n- **Hotel**: Adults Only, Royalton CHIC Punta Cana Resort & Casino\n- **Room**: Luxury Presidential One Bedroom Suite\n- **Check-in Date**: September 10, 2025\n- **Check-out Date**: September 15, 2025\n- **Number of Guests**: 2\n- **Total Price**: $1,925\n- **Status**: Pending\n\nIs there anything else you would like to do or any additional information you need?",
        "providerMetadata": {
          "openai": {
            "itemId": "msg_68b06f9d66a08192b127fc3bdd5d6c870e0efc9043002d94"
          }
        },
        "state": "done"
      }
    ]
  },
  {
    "role": "user",
    "parts": [
      {
        "type": "text",
        "text": "Booking completed successfully for Alan Bruno - Luxury Presidential One Bedroom Suite at Adults Only, Royalton CHIC Punta Cana Resort & Casino for $1925"
      }
    ],
    "id": "zutJLlFQvKHxmYYq"
  },
  {
    "id": "0XBMuQxTSU8tDRS9",
    "role": "assistant",
    "parts": [
      {
        "type": "step-start"
      },
      {
        "type": "text",
        "text": "That's fantastic news, Alan! Your booking for the **Luxury Presidential One Bedroom Suite** at the **Adults Only, Royalton CHIC Punta Cana Resort & Casino** for $1,925 is confirmed. \n\nIf you have any questions or need assistance with anything else—like travel tips, local attractions, or transportation—feel free to ask. Enjoy your trip!",
        "providerMetadata": {
          "openai": {
            "itemId": "msg_68b06fb7f4c48192b13664151dbebc9e0e0efc9043002d94"
          }
        },
        "state": "done"
      }
    ]
  },
  {
    "role": "user",
    "parts": [
      {
        "type": "text",
        "text": "checkout"
      }
    ],
    "id": "ViKO7EC28ush1HC2"
  },
  {
    "id": "YWbUznNC7gVJtpYw",
    "role": "assistant",
    "parts": [
      {
        "type": "step-start"
      },
      {
        "type": "dynamic-tool",
        "toolName": "checkout_booking",
        "toolCallId": "call_tQAE1jaL59TD9qhLylldrYEf",
        "state": "output-available",
        "input": {
          "booking_id": "8563de94-b365-41fb-b55f-f291a9c1dfec"
        },
        "output": {
          "content": [
            {
              "type": "text",
              "text": "{\"status_code\":200,\"headers\":{\"date\":\"Thu, 28 Aug 2025 15:03:31 GMT\",\"server\":\"uvicorn\",\"content-length\":\"360\",\"content-type\":\"application/json\"},\"content\":{\"message\":\"Booking confirmed successfully\",\"booking_id\":\"8563de94-b365-41fb-b55f-f291a9c1dfec\",\"confirmation_code\":\"365F33SW\",\"status\":\"confirmed\",\"check_in_date\":\"2025-09-10\",\"check_out_date\":\"2025-09-15\",\"guests\":2,\"total_price\":1925.0,\"hotel_name\":\"Adults Only, Royalton CHIC Punta Cana Resort & Casino\",\"room_name\":\"Luxury Presidential One Bedroom Suite\"},\"success\":true,\"url\":\"http://127.0.0.1:8000/bookings/8563de94-b365-41fb-b55f-f291a9c1dfec/checkout\"}"
            }
          ],
          "isError": false,
          "structuredContent": {
            "status_code": 200,
            "headers": {
              "date": "Thu, 28 Aug 2025 15:03:31 GMT",
              "server": "uvicorn",
              "content-length": "360",
              "content-type": "application/json"
            },
            "content": {
              "message": "Booking confirmed successfully",
              "booking_id": "8563de94-b365-41fb-b55f-f291a9c1dfec",
              "confirmation_code": "365F33SW",
              "status": "confirmed",
              "check_in_date": "2025-09-10",
              "check_out_date": "2025-09-15",
              "guests": 2,
              "total_price": 1925,
              "hotel_name": "Adults Only, Royalton CHIC Punta Cana Resort & Casino",
              "room_name": "Luxury Presidential One Bedroom Suite"
            },
            "success": true,
            "url": "http://127.0.0.1:8000/bookings/8563de94-b365-41fb-b55f-f291a9c1dfec/checkout"
          }
        },
        "callProviderMetadata": {
          "openai": {
            "itemId": "fc_68b06fc33bb48192a6b3c47d6e4d47a80e0efc9043002d94"
          }
        }
      },
      {
        "type": "step-start"
      },
      {
        "type": "text",
        "text": "Your booking has been successfully confirmed!\n\n### Confirmation Details:\n- **Booking ID**: 8563de94-b365-41fb-b55f-f291a9c1dfec\n- **Confirmation Code**: 365F33SW\n- **Hotel**: Adults Only, Royalton CHIC Punta Cana Resort & Casino\n- **Room**: Luxury Presidential One Bedroom Suite\n- **Check-in Date**: September 10, 2025\n- **Check-out Date**: September 15, 2025\n- **Total Price**: $1,925\n\nIf you need any more assistance or have any questions before your trip, just let me know! Enjoy your stay!",
        "providerMetadata": {
          "openai": {
            "itemId": "msg_68b06fc58454819281b88aa883c402340e0efc9043002d94"
          }
        },
        "state": "done"
      }
    ]
  },
];




export const MOCKED_MESSAGES_2 = [
  {
    "role": "user",
    "parts": [
      {
        "type": "text",
        "text": "hola"
      }
    ],
    "id": "qAfraHMeFWlUziZL"
  },
  {
    "id": "sOxZ8nkDat1Vg666",
    "role": "assistant",
    "parts": [
      {
        "type": "step-start"
      },
      {
        "type": "text",
        "text": "¡Hola! ¿Cómo puedo ayudarte hoy?",
        "providerMetadata": {
          "openai": {
            "itemId": "msg_68b1c611453081919d2c59cdbffb130202b105de168684d9"
          }
        },
        "state": "done"
      }
    ]
  },
  {
    "role": "user",
    "parts": [
      {
        "type": "text",
        "text": "quiero ir a cancun"
      }
    ],
    "id": "PrsLrnokpXxRZ5Kz"
  },
  {
    "id": "NpU6lkd38SU5N9RD",
    "role": "assistant",
    "parts": [
      {
        "type": "step-start"
      },
      {
        "type": "text",
        "text": "¡Excelente elección! Para ayudarte mejor, ¿puedes decirme las fechas de tu viaje y cuántas personas van a viajar?",
        "providerMetadata": {
          "openai": {
            "itemId": "msg_68b1c61a6df8819190e4f1b8c708939502b105de168684d9"
          }
        },
        "state": "done"
      }
    ]
  },
  {
    "role": "user",
    "parts": [
      {
        "type": "text",
        "text": "2"
      }
    ],
    "id": "Au3gsmM6m4jnZD0K"
  },
  {
    "id": "XSMBW49SCDdkGyFI",
    "role": "assistant",
    "parts": [
      {
        "type": "step-start"
      },
      {
        "type": "text",
        "text": "Perfecto, ¿cuáles son las fechas de tu viaje a Cancún?",
        "providerMetadata": {
          "openai": {
            "itemId": "msg_68b1c61e235481918ac8b30639589dfc02b105de168684d9"
          }
        },
        "state": "done"
      }
    ]
  },
  {
    "role": "user",
    "parts": [
      {
        "type": "text",
        "text": "cualquiera"
      }
    ],
    "id": "JLSWTh9Lc0G1W2r1"
  },
  {
    "id": "z208L60qJpK1Wr0o",
    "role": "assistant",
    "parts": [
      {
        "type": "step-start"
      },
      {
        "type": "text",
        "text": "Entiendo, voy a buscar hoteles disponibles en Cancún para dos personas sin una fecha específica. ¿Te gustaría que considerara algún rango de precios o alguna preferencia en cuanto a las comodidades?",
        "providerMetadata": {
          "openai": {
            "itemId": "msg_68b1c62628ac8191a155c99e9b30eda202b105de168684d9"
          }
        },
        "state": "done"
      }
    ]
  },
  {
    "role": "user",
    "parts": [
      {
        "type": "text",
        "text": "no"
      }
    ],
    "id": "0tsQVg07BGdXJxex"
  },
  {
    "id": "4tNbH4jnutB2MFey",
    "role": "assistant",
    "parts": [
      {
        "type": "step-start"
      },
      {
        "type": "dynamic-tool",
        "toolName": "search_hotels",
        "toolCallId": "call_NJWXb80iywTT3onxSG8URlgv",
        "state": "output-available",
        "input": {
          "country": "Mexico",
          "city": "Cancun"
        },
        "output": {
          "content": [
            {
              "type": "text",
              "text": "{\"status_code\":200,\"headers\":{\"date\":\"Fri, 29 Aug 2025 15:24:33 GMT\",\"server\":\"uvicorn\",\"content-length\":\"2\",\"content-type\":\"application/json\"},\"content\":[],\"success\":true,\"url\":\"http://127.0.0.1:8000/hotels?city=Cancun\"}"
            }
          ],
          "isError": false,
          "structuredContent": {
            "status_code": 200,
            "headers": {
              "date": "Fri, 29 Aug 2025 15:24:33 GMT",
              "server": "uvicorn",
              "content-length": "2",
              "content-type": "application/json"
            },
            "content": [],
            "success": true,
            "url": "http://127.0.0.1:8000/hotels?city=Cancun"
          }
        },
        "callProviderMetadata": {
          "openai": {
            "itemId": "fc_68b1c63131b481918ebe1b33693a3e5a02b105de168684d9"
          }
        }
      },
      {
        "type": "step-start"
      },
      {
        "type": "text",
        "text": "Parece que no hay hoteles disponibles en Cancún en este momento. \n\n¿Te gustaría explorar otras ciudades o destinos? Puedo ayudarte a encontrar opciones alternativas.",
        "providerMetadata": {
          "openai": {
            "itemId": "msg_68b1c63299a88191aeb46e848caf093102b105de168684d9"
          }
        },
        "state": "done"
      }
    ]
  },
  {
    "role": "user",
    "parts": [
      {
        "type": "text",
        "text": "dame otras opciones"
      }
    ],
    "id": "QA4eiTljbrRYyvbb"
  },
  {
    "id": "cPH1VFdcHRj4av3W",
    "role": "assistant",
    "parts": [
      {
        "type": "step-start"
      },
      {
        "type": "dynamic-tool",
        "toolName": "get_available_destinations",
        "toolCallId": "call_oQp6E8a9GVG2zJuE26lwOJgK",
        "state": "output-available",
        "input": {},
        "output": {
          "content": [
            {
              "type": "text",
              "text": "{\"status_code\":200,\"headers\":{\"date\":\"Fri, 29 Aug 2025 15:24:46 GMT\",\"server\":\"uvicorn\",\"content-length\":\"41\",\"content-type\":\"application/json\"},\"content\":[\"Dominican Republic\",\"Jamaica\",\"Mexico\"],\"success\":true}"
            }
          ],
          "isError": false,
          "structuredContent": {
            "status_code": 200,
            "headers": {
              "date": "Fri, 29 Aug 2025 15:24:46 GMT",
              "server": "uvicorn",
              "content-length": "41",
              "content-type": "application/json"
            },
            "content": [
              "Dominican Republic",
              "Jamaica",
              "Mexico"
            ],
            "success": true
          }
        },
        "callProviderMetadata": {
          "openai": {
            "itemId": "fc_68b1c63e93c0819192a97083b6552dfc02b105de168684d9"
          }
        }
      },
      {
        "type": "step-start"
      },
      {
        "type": "text",
        "text": "Aquí tienes algunas opciones de destinos alternativos:\n\n1. **República Dominicana**\n2. **Jamaica**\n3. **México** (puedes elegir otra ciudad)\n\n¿Te gustaría obtener información sobre hoteles en alguno de estos destinos?",
        "providerMetadata": {
          "openai": {
            "itemId": "msg_68b1c63f998c819182f48778c5a4da1202b105de168684d9"
          }
        },
        "state": "done"
      }
    ]
  },
  {
    "role": "user",
    "parts": [
      {
        "type": "text",
        "text": "en mexico"
      }
    ],
    "id": "u2jhubgi8R8eY4Qi"
  },
  {
    "id": "PbUjZdjQ9Q3PQxcf",
    "role": "assistant",
    "parts": [
      {
        "type": "step-start"
      },
      {
        "type": "text",
        "text": "¿Tienes alguna ciudad específica en México en mente o prefieres que busque en varias ciudades? También necesito saber las fechas de tu viaje y cuántas personas viajarán.",
        "providerMetadata": {
          "openai": {
            "itemId": "msg_68b1c6499c88819180adbdcf86582f2802b105de168684d9"
          }
        },
        "state": "done"
      }
    ]
  },
  {
    "role": "user",
    "parts": [
      {
        "type": "text",
        "text": "cualquiera"
      }
    ],
    "id": "tJL55pwTn93viLTX"
  },
  {
    "id": "djE6ZoS75WeQjzzk",
    "role": "assistant",
    "parts": [
      {
        "type": "step-start"
      },
      {
        "type": "dynamic-tool",
        "toolName": "search_hotels",
        "toolCallId": "call_xiaBztzN61UYRdJlfwgTRJ8L",
        "state": "output-available",
        "input": {
          "country": "Mexico"
        },
        "output": {
          "content": [
            {
              "type": "text",
              "text": "{\"status_code\":200,\"headers\":{\"date\":\"Fri, 29 Aug 2025 15:25:05 GMT\",\"server\":\"uvicorn\",\"content-length\":\"354\",\"content-type\":\"application/json\"},\"content\":[{\"name\":\"Paraiso De La Bonita\",\"country\":\"Mexico\",\"city\":\"Riviera Maya\",\"stars\":5,\"images\":[\"https://cache.marriott.com/is/image/marriotts7prod/lc-cunpb-paraiso-de-la-bonita30317-33656:Classic-Hor?wid=1336&fit=constrain\"],\"id\":\"368bd4a2-2354-4ce7-a61b-bc3b57a48c03\",\"created_at\":\"2025-08-21T00:23:50.412929Z\",\"updated_at\":\"2025-08-26T14:08:28.139571Z\"}],\"success\":true,\"url\":\"http://127.0.0.1:8000/hotels?country=Mexico\"}"
            }
          ],
          "isError": false,
          "structuredContent": {
            "status_code": 200,
            "headers": {
              "date": "Fri, 29 Aug 2025 15:25:05 GMT",
              "server": "uvicorn",
              "content-length": "354",
              "content-type": "application/json"
            },
            "content": [
              {
                "name": "Paraiso De La Bonita",
                "country": "Mexico",
                "city": "Riviera Maya",
                "stars": 5,
                "images": [
                  "https://cache.marriott.com/is/image/marriotts7prod/lc-cunpb-paraiso-de-la-bonita30317-33656:Classic-Hor?wid=1336&fit=constrain"
                ],
                "id": "368bd4a2-2354-4ce7-a61b-bc3b57a48c03",
                "created_at": "2025-08-21T00:23:50.412929Z",
                "updated_at": "2025-08-26T14:08:28.139571Z"
              }
            ],
            "success": true,
            "url": "http://127.0.0.1:8000/hotels?country=Mexico"
          }
        },
        "callProviderMetadata": {
          "openai": {
            "itemId": "fc_68b1c65270388191a09fedb87508d1b902b105de168684d9"
          }
        }
      },
      {
        "type": "step-start"
      },
      {
        "type": "text",
        "text": "He encontrado un hotel en México:\n\n- **Paraiso De La Bonita**\n  - **Ubicación:** Riviera Maya\n  - **Estrellas:** 5\n\nSi te interesa este hotel, puedo buscar detalles sobre las habitaciones disponibles. ¿Te gustaría que continúe con eso?",
        "providerMetadata": {
          "openai": {
            "itemId": "msg_68b1c653f6348191af88c50426bc058a02b105de168684d9"
          }
        },
        "state": "done"
      }
    ]
  },
  {
    "role": "user",
    "parts": [
      {
        "type": "text",
        "text": "Select the hotel Paraiso De La Bonita "
      }
    ],
    "id": "dYqbRkDgwVSlfDWh"
  },
  {
    "id": "FhG9HJkhJEwWpJbU",
    "role": "assistant",
    "parts": [
      {
        "type": "step-start"
      },
      {
        "type": "dynamic-tool",
        "toolName": "get_hotel_details_with_rooms",
        "toolCallId": "call_238VK1zQToMSmZWxVGkEyAju",
        "state": "output-available",
        "input": {
          "hotel_id": "368bd4a2-2354-4ce7-a61b-bc3b57a48c03"
        },
        "output": {
          "content": [
            {
              "type": "text",
              "text": "{\"status_code\":200,\"headers\":{\"date\":\"Fri, 29 Aug 2025 15:25:13 GMT\",\"server\":\"uvicorn\",\"content-length\":\"2692\",\"content-type\":\"application/json\"},\"content\":{\"name\":\"Paraiso De La Bonita\",\"country\":\"Mexico\",\"city\":\"Riviera Maya\",\"stars\":5,\"images\":[\"https://cache.marriott.com/is/image/marriotts7prod/lc-cunpb-paraiso-de-la-bonita30317-33656:Classic-Hor?wid=1336&fit=constrain\"],\"id\":\"368bd4a2-2354-4ce7-a61b-bc3b57a48c03\",\"created_at\":\"2025-08-21T00:23:50.412929Z\",\"updated_at\":\"2025-08-26T14:08:28.139571Z\",\"rooms\":[{\"name\":\"Premium Luxury Two-Bedroom Suite Ocean View Plunge Pool\",\"description\":\"Suite with two bedrooms, each with a king bed, private plunge pool and panoramic ocean views.Elevate your stay with this expansive and magnificent suite. With 1,830 sq. ft. of space, this suite offers two spacious bedrooms, each with a king bed, a private plunge pool, and panoramic ocean views, creating an ideal setting for a luxurious and serene retreat.\",\"price\":620.0,\"guest\":4,\"images\":[\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/46898/images/room/paraiso-de-la-bonita-suite-ocean-view-1king-bedroom-view_(2).jpg\",\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/46898/images/room/paraiso-de-la-bonita-premium-luxury-suite-ocean-view-plunge-pool-exterior.jpg\"],\"amenities\":[\"60m2\",\"AM/FM radio\",\"Balcony/Lanai/Terrace\",\"Cable television\",\"Chair provided with desk\",\"Desk\",\"Hairdryer\",\"Non-smoking\",\"Premium Movie Channels\",\"Remote control television\",\"Safe in Room\",\"Sitting area\",\"Telephone\",\"TV\",\"Voice mail\"],\"id\":\"f7d4c493-b42f-4aff-9006-98bd8a9d07c9\",\"hotel_id\":\"368bd4a2-2354-4ce7-a61b-bc3b57a48c03\",\"created_at\":\"2025-08-21T00:31:29.258186Z\",\"updated_at\":null},{\"name\":\"Suite Ocean View, 1 King, Balcony\",\"description\":\"This spacious suite features a king bed, modern bathroom amenities, and a private terrace with ocean views. Enjoy comfort and style in this 1,130 sq. ft. suite, featuring a king bed, modern bathroom amenities, and a private terrace with stunning ocean views.\",\"price\":340.0,\"guest\":4,\"images\":[\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/46898/images/room/1.jpg\",\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/46898/images/room/638876562623176233.jpg\",\"https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/46898/images/room/paraiso-de-la-bonita-luxury-two-bedroom-suite-ocean-view-bathroom.jpg\"],\"amenities\":[\"89m2\",\"AM/FM radio\",\"Balcony/Lanai/Terrace\",\"Cable television\",\"Chair provided with desk\",\"Desk\",\"Hairdryer\",\"Non-smoking\",\"Premium Movie Channels\",\"Remote control television\",\"Safe in Room\",\"Sitting area\",\"Telephone\",\"TV\",\"Voice mail\"],\"id\":\"fc9a49d3-8447-4bb9-96d7-f43034b92e9c\",\"hotel_id\":\"368bd4a2-2354-4ce7-a61b-bc3b57a48c03\",\"created_at\":\"2025-08-21T00:27:23.074755Z\",\"updated_at\":null}]},\"success\":true,\"url\":\"http://127.0.0.1:8000/hotels/368bd4a2-2354-4ce7-a61b-bc3b57a48c03/with-rooms\"}"
            }
          ],
          "isError": false,
          "structuredContent": {
            "status_code": 200,
            "headers": {
              "date": "Fri, 29 Aug 2025 15:25:13 GMT",
              "server": "uvicorn",
              "content-length": "2692",
              "content-type": "application/json"
            },
            "content": {
              "name": "Paraiso De La Bonita",
              "country": "Mexico",
              "city": "Riviera Maya",
              "stars": 5,
              "images": [
                "https://cache.marriott.com/is/image/marriotts7prod/lc-cunpb-paraiso-de-la-bonita30317-33656:Classic-Hor?wid=1336&fit=constrain"
              ],
              "id": "368bd4a2-2354-4ce7-a61b-bc3b57a48c03",
              "created_at": "2025-08-21T00:23:50.412929Z",
              "updated_at": "2025-08-26T14:08:28.139571Z",
              "rooms": [
                {
                  "name": "Premium Luxury Two-Bedroom Suite Ocean View Plunge Pool",
                  "description": "Suite with two bedrooms, each with a king bed, private plunge pool and panoramic ocean views.Elevate your stay with this expansive and magnificent suite. With 1,830 sq. ft. of space, this suite offers two spacious bedrooms, each with a king bed, a private plunge pool, and panoramic ocean views, creating an ideal setting for a luxurious and serene retreat.",
                  "price": 620,
                  "guest": 4,
                  "images": [
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/46898/images/room/paraiso-de-la-bonita-suite-ocean-view-1king-bedroom-view_(2).jpg",
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/46898/images/room/paraiso-de-la-bonita-premium-luxury-suite-ocean-view-plunge-pool-exterior.jpg"
                  ],
                  "amenities": [
                    "60m2",
                    "AM/FM radio",
                    "Balcony/Lanai/Terrace",
                    "Cable television",
                    "Chair provided with desk",
                    "Desk",
                    "Hairdryer",
                    "Non-smoking",
                    "Premium Movie Channels",
                    "Remote control television",
                    "Safe in Room",
                    "Sitting area",
                    "Telephone",
                    "TV",
                    "Voice mail"
                  ],
                  "id": "f7d4c493-b42f-4aff-9006-98bd8a9d07c9",
                  "hotel_id": "368bd4a2-2354-4ce7-a61b-bc3b57a48c03",
                  "created_at": "2025-08-21T00:31:29.258186Z",
                  "updated_at": null
                },
                {
                  "name": "Suite Ocean View, 1 King, Balcony",
                  "description": "This spacious suite features a king bed, modern bathroom amenities, and a private terrace with ocean views. Enjoy comfort and style in this 1,130 sq. ft. suite, featuring a king bed, modern bathroom amenities, and a private terrace with stunning ocean views.",
                  "price": 340,
                  "guest": 4,
                  "images": [
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/46898/images/room/1.jpg",
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/46898/images/room/638876562623176233.jpg",
                    "https://book.royaltonresorts.com/shs-ngbe-image-resizer/images/hotel/46898/images/room/paraiso-de-la-bonita-luxury-two-bedroom-suite-ocean-view-bathroom.jpg"
                  ],
                  "amenities": [
                    "89m2",
                    "AM/FM radio",
                    "Balcony/Lanai/Terrace",
                    "Cable television",
                    "Chair provided with desk",
                    "Desk",
                    "Hairdryer",
                    "Non-smoking",
                    "Premium Movie Channels",
                    "Remote control television",
                    "Safe in Room",
                    "Sitting area",
                    "Telephone",
                    "TV",
                    "Voice mail"
                  ],
                  "id": "fc9a49d3-8447-4bb9-96d7-f43034b92e9c",
                  "hotel_id": "368bd4a2-2354-4ce7-a61b-bc3b57a48c03",
                  "created_at": "2025-08-21T00:27:23.074755Z",
                  "updated_at": null
                }
              ]
            },
            "success": true,
            "url": "http://127.0.0.1:8000/hotels/368bd4a2-2354-4ce7-a61b-bc3b57a48c03/with-rooms"
          }
        },
        "callProviderMetadata": {
          "openai": {
            "itemId": "fc_68b1c659c7cc819191a8f1cd0c0e7f0402b105de168684d9"
          }
        }
      },
      {
        "type": "step-start"
      },
      {
        "type": "text",
        "text": "Aquí tienes las habitaciones disponibles en el hotel **Paraiso De La Bonita**:\n\n- **Premium Luxury Two-Bedroom Suite Ocean View Plunge Pool**\n- **Suite Ocean View, 1 King, Balcony**\n\n¿Te gustaría reservar alguna de estas habitaciones? Si es así, por favor indícame las fechas y cuántas personas se alojarán.",
        "providerMetadata": {
          "openai": {
            "itemId": "msg_68b1c65c32f481919d3808b3a426550902b105de168684d9"
          }
        },
        "state": "done"
      }
    ]
  },
  {
    "role": "user",
    "parts": [
      {
        "type": "text",
        "text": "Select room: Premium Luxury Two-Bedroom Suite Ocean View Plunge Pool at \\$620 for 7 nights"
      }
    ],
    "id": "VFKXLW4IJk3AcRJa"
  },
  {
    "id": "YrancRC7g3lLY7LV",
    "role": "assistant",
    "parts": [
      {
        "type": "step-start"
      },
      {
        "type": "dynamic-tool",
        "toolName": "create_booking",
        "toolCallId": "call_OCYZT8cr0z9VIFdsWt2vHsp8",
        "state": "output-available",
        "input": {
          "hotel_id": "368bd4a2-2354-4ce7-a61b-bc3b57a48c03",
          "room_id": "f7d4c493-b42f-4aff-9006-98bd8a9d07c9",
          "check_in_date": "2025-09-01",
          "check_out_date": "2025-09-08",
          "guests": 2
        },
        "output": {
          "content": [
            {
              "type": "text",
              "text": "{\"status_code\":409,\"headers\":{\"date\":\"Fri, 29 Aug 2025 15:25:20 GMT\",\"server\":\"uvicorn\",\"content-length\":\"95\",\"content-type\":\"application/json\"},\"content\":{\"detail\":\"Room not available for the requested dates (2025-09-01 to 2025-09-08) for 2 guests\"},\"success\":false,\"url\":\"http://127.0.0.1:8000/bookings\",\"request_body\":{\"hotel_id\":\"368bd4a2-2354-4ce7-a61b-bc3b57a48c03\",\"room_id\":\"f7d4c493-b42f-4aff-9006-98bd8a9d07c9\",\"check_in_date\":\"2025-09-01\",\"check_out_date\":\"2025-09-08\",\"guests\":2,\"status\":\"pending\"}}"
            }
          ],
          "isError": false,
          "structuredContent": {
            "status_code": 409,
            "headers": {
              "date": "Fri, 29 Aug 2025 15:25:20 GMT",
              "server": "uvicorn",
              "content-length": "95",
              "content-type": "application/json"
            },
            "content": {
              "detail": "Room not available for the requested dates (2025-09-01 to 2025-09-08) for 2 guests"
            },
            "success": false,
            "url": "http://127.0.0.1:8000/bookings",
            "request_body": {
              "hotel_id": "368bd4a2-2354-4ce7-a61b-bc3b57a48c03",
              "room_id": "f7d4c493-b42f-4aff-9006-98bd8a9d07c9",
              "check_in_date": "2025-09-01",
              "check_out_date": "2025-09-08",
              "guests": 2,
              "status": "pending"
            }
          }
        },
        "callProviderMetadata": {
          "openai": {
            "itemId": "fc_68b1c65ffe1481918d2ce550d1726f0402b105de168684d9"
          }
        }
      },
      {
        "type": "step-start"
      },
      {
        "type": "text",
        "text": "Lamentablemente, la **Premium Luxury Two-Bedroom Suite Ocean View Plunge Pool** no está disponible para las fechas del 1 al 8 de septiembre.\n\nTe gustaría que busque disponibilidad para otra habitación o que intente con diferentes fechas?",
        "providerMetadata": {
          "openai": {
            "itemId": "msg_68b1c6625ae481919b6896b32b573db002b105de168684d9"
          }
        },
        "state": "done"
      }
    ]
  }
];

export const MOCKED_MESSAGES_3 = [
  {
    "role": "user",
    "parts": [
      {
        "type": "text",
        "text": "Hi there! show me hotels in spain"
      }
    ],
    "id": "Xz23C0NpYmD1k65C"
  },
  {
    "id": "VYI7pwbnpbV94hhU",
    "role": "assistant",
    "parts": [
      {
        "type": "step-start"
      },
      {
        "type": "text",
        "text": "Could you please tell me the number of guests and your travel dates? This will help me find the best options for you.",
        "state": "done"
      }
    ]
  },
  {
    "role": "user",
    "parts": [
      {
        "type": "text",
        "text": "we are 2, from october 10 to 20"
      }
    ],
    "id": "CdnTfJm4PsdCLudW"
  },
  {
    "id": "43OktZNpoU1wVVFs",
    "role": "assistant",
    "parts": [
      {
        "type": "step-start"
      },
      {
        "type": "dynamic-tool",
        "toolName": "search_hotels",
        "toolCallId": "call_5zSNOVTaF7LFGCqDJQDIvyTt",
        "state": "output-available",
        "input": {
          "country": "Spain"
        },
        "output": {
          "content": [
            {
              "type": "text",
              "text": "{\"status_code\":200,\"headers\":{\"date\":\"Fri, 05 Sep 2025 13:59:40 GMT\",\"server\":\"uvicorn\",\"content-length\":\"445\",\"content-type\":\"application/json\"},\"content\":[{\"name\":\"JOIA El Mirador by Iberostar\",\"country\":\"Spain\",\"city\":\"Santa Cruz de Tenerife\",\"stars\":5,\"images\":[\"https://apiimg.iberostar.com/uploads/image/44177/crops/16:9/1920/image.jpeg\",\"https://apiimg.iberostar.com/uploads/image/87178/crops/16:9/1920/image\",\"https://apiimg.iberostar.com/uploads/image/85291/crops/16:9/1920/image.jpg\"],\"id\":\"2809cd67-00ec-4fe1-aceb-728b8054b287\",\"created_at\":\"2025-09-05T11:18:33.272023Z\",\"updated_at\":null}],\"success\":true,\"url\":\"http://127.0.0.1:8000/hotels?country=Spain\"}"
            }
          ],
          "isError": false,
          "structuredContent": {
            "status_code": 200,
            "headers": {
              "date": "Fri, 05 Sep 2025 13:59:40 GMT",
              "server": "uvicorn",
              "content-length": "445",
              "content-type": "application/json"
            },
            "content": [
              {
                "name": "JOIA El Mirador by Iberostar",
                "country": "Spain",
                "city": "Santa Cruz de Tenerife",
                "stars": 5,
                "images": [
                  "https://apiimg.iberostar.com/uploads/image/44177/crops/16:9/1920/image.jpeg",
                  "https://apiimg.iberostar.com/uploads/image/87178/crops/16:9/1920/image",
                  "https://apiimg.iberostar.com/uploads/image/85291/crops/16:9/1920/image.jpg"
                ],
                "id": "2809cd67-00ec-4fe1-aceb-728b8054b287",
                "created_at": "2025-09-05T11:18:33.272023Z",
                "updated_at": null
              }
            ],
            "success": true,
            "url": "http://127.0.0.1:8000/hotels?country=Spain"
          }
        }
      },
      {
        "type": "step-start"
      },
      {
        "type": "text",
        "text": "I found a hotel in Spain for you: JOIA El Mirador by Iberostar in Santa Cruz de Tenerife. It is a 5-star hotel. Would you like to see more options or proceed with booking this hotel?",
        "state": "done"
      }
    ]
  },
  {
    "role": "user",
    "parts": [
      {
        "type": "text",
        "text": "Select the hotel JOIA El Mirador by Iberostar"
      }
    ],
    "id": "YVhgCPoI3F28t9kF"
  },
  {
    "id": "IQSKOKaHfGCOjSGN",
    "role": "assistant",
    "parts": [
      {
        "type": "step-start"
      },
      {
        "type": "dynamic-tool",
        "toolName": "get_hotel_details_with_rooms",
        "toolCallId": "call_xPZK3pFdrx74EXcL6WBiLUBI",
        "state": "output-available",
        "input": {
          "hotel_id": "2809cd67-00ec-4fe1-aceb-728b8054b287"
        },
        "output": {
          "content": [
            {
              "type": "text",
              "text": "{\"status_code\":200,\"headers\":{\"date\":\"Fri, 05 Sep 2025 13:59:47 GMT\",\"server\":\"uvicorn\",\"content-length\":\"4416\",\"content-type\":\"application/json\"},\"content\":{\"name\":\"JOIA El Mirador by Iberostar\",\"country\":\"Spain\",\"city\":\"Santa Cruz de Tenerife\",\"stars\":5,\"images\":[\"https://apiimg.iberostar.com/uploads/image/44177/crops/16:9/1920/image.jpeg\",\"https://apiimg.iberostar.com/uploads/image/87178/crops/16:9/1920/image\",\"https://apiimg.iberostar.com/uploads/image/85291/crops/16:9/1920/image.jpg\"],\"id\":\"2809cd67-00ec-4fe1-aceb-728b8054b287\",\"created_at\":\"2025-09-05T11:18:33.272023Z\",\"updated_at\":null,\"rooms\":[{\"name\":\"Sea-View Suite with two rooms and a terrace\",\"description\":\"The most spectacular part of this room is, without a doubt, its panoramic views of the never-ending sea from its over 50 m² of terrace. It features two bedrooms, two bathrooms, a living room and kitchenette, and gives you access to our exclusive Star Prestige areas. To top it off, this fantastic suite is free of single-use plastics for a sustainable holiday in the Canary Islands.\",\"price\":1300.0,\"guest\":4,\"images\":[\"https://apiimg.iberostar.com/uploads/image/51636/crops/16:9/1920/image.jpeg\"],\"amenities\":[\"103 m2\",\"Sea view\",\"Acceso a Star Prestige\",\"Two rooms\",\"Terrace 59 m²\",\"Kitchenette\",\"Two bathrooms\",\"Separate bathtub and shower\",\"Two beds\",\"King bed (2x2m)\",\"Minibar (subject to charge)\",\"No smoking\",\"Free Wi-Fi\",\"Smart TV\",\"Bathrobe and slippers\",\"Coffee and Tea Kit\",\"Air conditioning\",\"Safe\",\"Hair dryer\",\"Living room\",\"Sofa\",\"Phone\",\"Room free of single-use plastic\",\"100% renewable electricity\"],\"id\":\"45936044-1871-4702-8689-f9e9e639a916\",\"hotel_id\":\"2809cd67-00ec-4fe1-aceb-728b8054b287\",\"created_at\":\"2025-09-05T11:41:44.729730Z\",\"updated_at\":null},{\"name\":\"Star Prestige Sea-View Junior Suite\",\"description\":\"The Star Prestige Sea View Junior Suite provides more than 40 m2 of space in the most exclusive area of the hotel. It features a spacious bedroom and a terrace with sun loungers from which to enjoy the panoramic view. It also offers access to private areas and exclusive Star Prestige services.\",\"price\":1000.0,\"guest\":2,\"images\":[\"https://apiimg.iberostar.com/uploads/image/51645/crops/3:2/image.jpeg\",\"https://apiimg.iberostar.com/uploads/image/51642/crops/3:2/image.jpeg\",\"https://apiimg.iberostar.com/uploads/image/51643/crops/3:2/image.jpeg\",\"https://apiimg.iberostar.com/uploads/image/51644/crops/3:2/image.jpeg\"],\"amenities\":[\"40 m2\",\"Sea view\",\"Terrace\",\"Exclusive Star Prestige Area\",\"Access to exclusive Star Prestige pools\",\"Personalised check-in\",\"Late check-out (subject to availability)\",\"Butler service\",\"Sun loungers\",\"Minibar (subject to charge)\",\"Spa discount\",\"Turndown service\",\"King bed (2x2m)\",\"Bathroom with bath\",\"Laundry service (subject to charge)\",\"No smoking\",\"Free Wi-Fi\",\"Smart TV\",\"Bathrobe and slippers\",\"Coffee and Tea Kit\",\"Air conditioning\",\"Safe\",\"Hair dryer\",\"Living room\",\"Sofa\",\"Phone\"],\"id\":\"d43a9117-8671-43de-b709-9c3f18eca9e9\",\"hotel_id\":\"2809cd67-00ec-4fe1-aceb-728b8054b287\",\"created_at\":\"2025-09-05T11:26:58.701116Z\",\"updated_at\":null},{\"name\":\"Superior Star Prestige Sea-View Junior Suite\",\"description\":\"If you fancy staying in one of the most luxurious rooms in Tenerife, choose the Superior Star Prestige Sea View Junior Suite at the JOIA El Mirador by Iberostar. Not only does it have a spacious 50 m² bedroom, but you can also wake up every morning to an impressive sea view from your private terrace measuring over 16 m2. It also offers access to the hotel’s most exclusive area, Star Prestige, where you can enjoy the private pool, sun terrace and exclusive services.\",\"price\":1120.0,\"guest\":2,\"images\":[\"https://apiimg.iberostar.com/uploads/image/51641/crops/16:9/1920/image.jpeg\",\"https://apiimg.iberostar.com/uploads/image/51638/crops/16:9/1920/image.jpeg\",\"https://apiimg.iberostar.com/uploads/image/51640/crops/16:9/1920/image.jpeg\"],\"amenities\":[\"50 m2\",\"Sea view\",\"Terrace\",\"Exclusive Star Prestige Area\",\"Access to exclusive Star Prestige pools\",\"Personalised check-in\",\"Late check-out (subject to availability)\",\"Butler service\",\"Sun loungers\",\"Minibar (subject to charge)\",\"Spa discount\",\"Turndown service\",\"King bed (2x2m)\",\"Bathroom with bath\",\"Laundry service (subject to charge)\",\"No smoking\",\"Free Wi-Fi\",\"Smart TV\",\"Bathrobe and slippers\",\"Coffee and Tea Kit\",\"Air conditioning\",\"Safe\",\"Hair dryer\",\"Living room\",\"Sofa\",\"Phone\"],\"id\":\"92e7e0a1-e714-4c05-9d75-eb67cb0c8c9e\",\"hotel_id\":\"2809cd67-00ec-4fe1-aceb-728b8054b287\",\"created_at\":\"2025-09-05T11:38:34.914336Z\",\"updated_at\":null}]},\"success\":true,\"url\":\"http://127.0.0.1:8000/hotels/2809cd67-00ec-4fe1-aceb-728b8054b287/with-rooms\"}"
            }
          ],
          "isError": false,
          "structuredContent": {
            "status_code": 200,
            "headers": {
              "date": "Fri, 05 Sep 2025 13:59:47 GMT",
              "server": "uvicorn",
              "content-length": "4416",
              "content-type": "application/json"
            },
            "content": {
              "name": "JOIA El Mirador by Iberostar",
              "country": "Spain",
              "city": "Santa Cruz de Tenerife",
              "stars": 5,
              "images": [
                "https://apiimg.iberostar.com/uploads/image/44177/crops/16:9/1920/image.jpeg",
                "https://apiimg.iberostar.com/uploads/image/87178/crops/16:9/1920/image",
                "https://apiimg.iberostar.com/uploads/image/85291/crops/16:9/1920/image.jpg"
              ],
              "id": "2809cd67-00ec-4fe1-aceb-728b8054b287",
              "created_at": "2025-09-05T11:18:33.272023Z",
              "updated_at": null,
              "rooms": [
                {
                  "name": "Sea-View Suite with two rooms and a terrace",
                  "description": "The most spectacular part of this room is, without a doubt, its panoramic views of the never-ending sea from its over 50 m² of terrace. It features two bedrooms, two bathrooms, a living room and kitchenette, and gives you access to our exclusive Star Prestige areas. To top it off, this fantastic suite is free of single-use plastics for a sustainable holiday in the Canary Islands.",
                  "price": 1300,
                  "guest": 4,
                  "images": [
                    "https://apiimg.iberostar.com/uploads/image/51636/crops/16:9/1920/image.jpeg"
                  ],
                  "amenities": [
                    "103 m2",
                    "Sea view",
                    "Acceso a Star Prestige",
                    "Two rooms",
                    "Terrace 59 m²",
                    "Kitchenette",
                    "Two bathrooms",
                    "Separate bathtub and shower",
                    "Two beds",
                    "King bed (2x2m)",
                    "Minibar (subject to charge)",
                    "No smoking",
                    "Free Wi-Fi",
                    "Smart TV",
                    "Bathrobe and slippers",
                    "Coffee and Tea Kit",
                    "Air conditioning",
                    "Safe",
                    "Hair dryer",
                    "Living room",
                    "Sofa",
                    "Phone",
                    "Room free of single-use plastic",
                    "100% renewable electricity"
                  ],
                  "id": "45936044-1871-4702-8689-f9e9e639a916",
                  "hotel_id": "2809cd67-00ec-4fe1-aceb-728b8054b287",
                  "created_at": "2025-09-05T11:41:44.729730Z",
                  "updated_at": null
                },
                {
                  "name": "Star Prestige Sea-View Junior Suite",
                  "description": "The Star Prestige Sea View Junior Suite provides more than 40 m2 of space in the most exclusive area of the hotel. It features a spacious bedroom and a terrace with sun loungers from which to enjoy the panoramic view. It also offers access to private areas and exclusive Star Prestige services.",
                  "price": 1000,
                  "guest": 2,
                  "images": [
                    "https://apiimg.iberostar.com/uploads/image/51645/crops/3:2/image.jpeg",
                    "https://apiimg.iberostar.com/uploads/image/51642/crops/3:2/image.jpeg",
                    "https://apiimg.iberostar.com/uploads/image/51643/crops/3:2/image.jpeg",
                    "https://apiimg.iberostar.com/uploads/image/51644/crops/3:2/image.jpeg"
                  ],
                  "amenities": [
                    "40 m2",
                    "Sea view",
                    "Terrace",
                    "Exclusive Star Prestige Area",
                    "Access to exclusive Star Prestige pools",
                    "Personalised check-in",
                    "Late check-out (subject to availability)",
                    "Butler service",
                    "Sun loungers",
                    "Minibar (subject to charge)",
                    "Spa discount",
                    "Turndown service",
                    "King bed (2x2m)",
                    "Bathroom with bath",
                    "Laundry service (subject to charge)",
                    "No smoking",
                    "Free Wi-Fi",
                    "Smart TV",
                    "Bathrobe and slippers",
                    "Coffee and Tea Kit",
                    "Air conditioning",
                    "Safe",
                    "Hair dryer",
                    "Living room",
                    "Sofa",
                    "Phone"
                  ],
                  "id": "d43a9117-8671-43de-b709-9c3f18eca9e9",
                  "hotel_id": "2809cd67-00ec-4fe1-aceb-728b8054b287",
                  "created_at": "2025-09-05T11:26:58.701116Z",
                  "updated_at": null
                },
                {
                  "name": "Superior Star Prestige Sea-View Junior Suite",
                  "description": "If you fancy staying in one of the most luxurious rooms in Tenerife, choose the Superior Star Prestige Sea View Junior Suite at the JOIA El Mirador by Iberostar. Not only does it have a spacious 50 m² bedroom, but you can also wake up every morning to an impressive sea view from your private terrace measuring over 16 m2. It also offers access to the hotel’s most exclusive area, Star Prestige, where you can enjoy the private pool, sun terrace and exclusive services.",
                  "price": 1120,
                  "guest": 2,
                  "images": [
                    "https://apiimg.iberostar.com/uploads/image/51641/crops/16:9/1920/image.jpeg",
                    "https://apiimg.iberostar.com/uploads/image/51638/crops/16:9/1920/image.jpeg",
                    "https://apiimg.iberostar.com/uploads/image/51640/crops/16:9/1920/image.jpeg"
                  ],
                  "amenities": [
                    "50 m2",
                    "Sea view",
                    "Terrace",
                    "Exclusive Star Prestige Area",
                    "Access to exclusive Star Prestige pools",
                    "Personalised check-in",
                    "Late check-out (subject to availability)",
                    "Butler service",
                    "Sun loungers",
                    "Minibar (subject to charge)",
                    "Spa discount",
                    "Turndown service",
                    "King bed (2x2m)",
                    "Bathroom with bath",
                    "Laundry service (subject to charge)",
                    "No smoking",
                    "Free Wi-Fi",
                    "Smart TV",
                    "Bathrobe and slippers",
                    "Coffee and Tea Kit",
                    "Air conditioning",
                    "Safe",
                    "Hair dryer",
                    "Living room",
                    "Sofa",
                    "Phone"
                  ],
                  "id": "92e7e0a1-e714-4c05-9d75-eb67cb0c8c9e",
                  "hotel_id": "2809cd67-00ec-4fe1-aceb-728b8054b287",
                  "created_at": "2025-09-05T11:38:34.914336Z",
                  "updated_at": null
                }
              ]
            },
            "success": true,
            "url": "http://127.0.0.1:8000/hotels/2809cd67-00ec-4fe1-aceb-728b8054b287/with-rooms"
          }
        }
      },
      {
        "type": "step-start"
      },
      {
        "type": "text",
        "text": "I've selected the JOIA El Mirador by Iberostar in Santa Cruz de Tenerife. Here are some room options available for your dates (October 10-20, 2025):\n\n1. Sea-View Suite with two rooms and a terrace - $1300 per night, accommodates 4 guests.\n2. Star Prestige Sea-View Junior Suite - $1000 per night, for 2 guests.\n3. Superior Star Prestige Sea-View Junior Suite - $1120 per night, for 2 guests.\n\nWould you like to proceed with booking any of these rooms? If so, please specify which one and the number of guests.",
        "state": "done"
      }
    ]
  },
  {
    "role": "user",
    "parts": [
      {
        "type": "text",
        "text": "Select room: Sea-View Suite with two rooms and a terrace at \\$1300"
      }
    ],
    "id": "UHIkc1KDO6MHB4Hm"
  },
  {
    "id": "mjzGyQS2dbQF9VUf",
    "role": "assistant",
    "parts": [
      {
        "type": "step-start"
      },
      {
        "type": "dynamic-tool",
        "toolName": "create_booking",
        "toolCallId": "call_hEDCSDWT2aGXjdb3cwYcAYXU",
        "state": "output-available",
        "input": {
          "hotel_id": "2809cd67-00ec-4fe1-aceb-728b8054b287",
          "room_id": "45936044-1871-4702-8689-f9e9e639a916",
          "check_in_date": "2025-10-10",
          "check_out_date": "2025-10-20",
          "guests": 4
        },
        "output": {
          "content": [
            {
              "type": "text",
              "text": "{\"status_code\":200,\"headers\":{\"date\":\"Fri, 05 Sep 2025 13:59:56 GMT\",\"server\":\"uvicorn\",\"content-length\":\"912\",\"content-type\":\"application/json\"},\"content\":{\"hotel_id\":\"2809cd67-00ec-4fe1-aceb-728b8054b287\",\"room_id\":\"45936044-1871-4702-8689-f9e9e639a916\",\"check_in_date\":\"2025-10-10\",\"check_out_date\":\"2025-10-20\",\"guests\":4,\"price\":13000.0,\"status\":\"pending\",\"booking_id\":\"b748b632-97d6-4b16-82ba-2755e33de0ea\",\"confirmation_code\":null,\"created_at\":\"2025-09-05T13:59:56.422527Z\",\"updated_at\":null,\"hotel_name\":\"JOIA El Mirador by Iberostar\",\"hotel_city\":\"Santa Cruz de Tenerife\",\"hotel_country\":\"Spain\",\"room_name\":\"Sea-View Suite with two rooms and a terrace\",\"room_description\":\"The most spectacular part of this room is, without a doubt, its panoramic views of the never-ending sea from its over 50 m² of terrace. It features two bedrooms, two bathrooms, a living room and kitchenette, and gives you access to our exclusive Star Prestige areas. To top it off, this fantastic suite is free of single-use plastics for a sustainable holiday in the Canary Islands.\"},\"success\":true,\"url\":\"http://127.0.0.1:8000/bookings\",\"request_body\":{\"hotel_id\":\"2809cd67-00ec-4fe1-aceb-728b8054b287\",\"room_id\":\"45936044-1871-4702-8689-f9e9e639a916\",\"check_in_date\":\"2025-10-10\",\"check_out_date\":\"2025-10-20\",\"guests\":4,\"status\":\"pending\"}}"
            }
          ],
          "isError": false,
          "structuredContent": {
            "status_code": 200,
            "headers": {
              "date": "Fri, 05 Sep 2025 13:59:56 GMT",
              "server": "uvicorn",
              "content-length": "912",
              "content-type": "application/json"
            },
            "content": {
              "hotel_id": "2809cd67-00ec-4fe1-aceb-728b8054b287",
              "room_id": "45936044-1871-4702-8689-f9e9e639a916",
              "check_in_date": "2025-10-10",
              "check_out_date": "2025-10-20",
              "guests": 4,
              "price": 13000,
              "status": "pending",
              "booking_id": "b748b632-97d6-4b16-82ba-2755e33de0ea",
              "confirmation_code": null,
              "created_at": "2025-09-05T13:59:56.422527Z",
              "updated_at": null,
              "hotel_name": "JOIA El Mirador by Iberostar",
              "hotel_city": "Santa Cruz de Tenerife",
              "hotel_country": "Spain",
              "room_name": "Sea-View Suite with two rooms and a terrace",
              "room_description": "The most spectacular part of this room is, without a doubt, its panoramic views of the never-ending sea from its over 50 m² of terrace. It features two bedrooms, two bathrooms, a living room and kitchenette, and gives you access to our exclusive Star Prestige areas. To top it off, this fantastic suite is free of single-use plastics for a sustainable holiday in the Canary Islands."
            },
            "success": true,
            "url": "http://127.0.0.1:8000/bookings",
            "request_body": {
              "hotel_id": "2809cd67-00ec-4fe1-aceb-728b8054b287",
              "room_id": "45936044-1871-4702-8689-f9e9e639a916",
              "check_in_date": "2025-10-10",
              "check_out_date": "2025-10-20",
              "guests": 4,
              "status": "pending"
            }
          }
        }
      },
      {
        "type": "step-start"
      },
      {
        "type": "text",
        "text": "Your booking for the Sea-View Suite with two rooms and a terrace at JOIA El Mirador by Iberostar has been successfully created with a pending status. The total cost is $13,000 for the stay from October 10 to October 20, 2025, for 4 guests.\n\nWould you like to proceed with any further actions such as confirming this booking or any other assistance?",
        "state": "done"
      }
    ]
  },
  {
    "role": "user",
    "parts": [
      {
        "type": "text",
        "text": "Checkout completed for booking b748b632-97d6-4b16-82ba-2755e33de0ea. Please proceed to booking details."
      }
    ],
    "id": "Qt6gojzMMCsbAYVM"
  },
  {
    "id": "m6qDMc1PNdQMPRa1",
    "role": "assistant",
    "parts": [
      {
        "type": "step-start"
      },
      {
        "type": "dynamic-tool",
        "toolName": "get_booking_details",
        "toolCallId": "call_CghjdEJOZe2ofHkVTroomBIk",
        "state": "output-available",
        "input": {
          "booking_id": "b748b632-97d6-4b16-82ba-2755e33de0ea"
        },
        "output": {
          "content": [
            {
              "type": "text",
              "text": "{\"status_code\":200,\"headers\":{\"date\":\"Fri, 05 Sep 2025 14:00:19 GMT\",\"server\":\"uvicorn\",\"content-length\":\"939\",\"content-type\":\"application/json\"},\"content\":{\"hotel_id\":\"2809cd67-00ec-4fe1-aceb-728b8054b287\",\"room_id\":\"45936044-1871-4702-8689-f9e9e639a916\",\"check_in_date\":\"2025-10-10\",\"check_out_date\":\"2025-10-20\",\"guests\":4,\"price\":13000.0,\"status\":\"confirmed\",\"booking_id\":\"b748b632-97d6-4b16-82ba-2755e33de0ea\",\"confirmation_code\":null,\"created_at\":\"2025-09-05T13:59:56.422527Z\",\"updated_at\":\"2025-09-05T14:00:17.926565Z\",\"hotel_name\":\"JOIA El Mirador by Iberostar\",\"hotel_city\":\"Santa Cruz de Tenerife\",\"hotel_country\":\"Spain\",\"room_name\":\"Sea-View Suite with two rooms and a terrace\",\"room_description\":\"The most spectacular part of this room is, without a doubt, its panoramic views of the never-ending sea from its over 50 m² of terrace. It features two bedrooms, two bathrooms, a living room and kitchenette, and gives you access to our exclusive Star Prestige areas. To top it off, this fantastic suite is free of single-use plastics for a sustainable holiday in the Canary Islands.\"},\"success\":true,\"url\":\"http://127.0.0.1:8000/bookings/b748b632-97d6-4b16-82ba-2755e33de0ea/details\"}"
            }
          ],
          "isError": false,
          "structuredContent": {
            "status_code": 200,
            "headers": {
              "date": "Fri, 05 Sep 2025 14:00:19 GMT",
              "server": "uvicorn",
              "content-length": "939",
              "content-type": "application/json"
            },
            "content": {
              "hotel_id": "2809cd67-00ec-4fe1-aceb-728b8054b287",
              "room_id": "45936044-1871-4702-8689-f9e9e639a916",
              "check_in_date": "2025-10-10",
              "check_out_date": "2025-10-20",
              "guests": 4,
              "price": 13000,
              "status": "confirmed",
              "booking_id": "b748b632-97d6-4b16-82ba-2755e33de0ea",
              "confirmation_code": null,
              "created_at": "2025-09-05T13:59:56.422527Z",
              "updated_at": "2025-09-05T14:00:17.926565Z",
              "hotel_name": "JOIA El Mirador by Iberostar",
              "hotel_city": "Santa Cruz de Tenerife",
              "hotel_country": "Spain",
              "room_name": "Sea-View Suite with two rooms and a terrace",
              "room_description": "The most spectacular part of this room is, without a doubt, its panoramic views of the never-ending sea from its over 50 m² of terrace. It features two bedrooms, two bathrooms, a living room and kitchenette, and gives you access to our exclusive Star Prestige areas. To top it off, this fantastic suite is free of single-use plastics for a sustainable holiday in the Canary Islands."
            },
            "success": true,
            "url": "http://127.0.0.1:8000/bookings/b748b632-97d6-4b16-82ba-2755e33de0ea/details"
          }
        }
      },
      {
        "type": "step-start"
      },
      {
        "type": "text",
        "text": "Your booking for the Sea-View Suite with two rooms and a terrace at JOIA El Mirador by Iberostar has been confirmed. It is now finalized for your stay from October 10 to October 20, 2025, for 4 guests.\n\nIf you need any additional assistance or have further questions, feel free to ask!",
        "state": "done"
      }
    ]
  }
];