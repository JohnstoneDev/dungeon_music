// const DisplayEvent = ({ event} ) => {
// 	const { type, id, venue, datetime_utc, } = event 
// 	return (
// 		<>

// 		</>
// 	)
// }


export const EventList = ({ event }) => {
	console.log(event);

	return (
		<>
			hello there {event.type}
		</>
	)
}



//  const exampleEvent = {
// 	"type": "minor_league_baseball",
// 	"id": 5843738,
// 	"datetime_utc": "2023-06-06T07:30:00",
// 	"venue": {
// 			"state": "VA",
// 			"name_v2": "Virginia Credit Union Stadium",
// 			"postal_code": "22401",
// 			"name": "Virginia Credit Union Stadium",
// 			"links": [],
// 			"timezone": "America/New_York",
// 			"url": "https://seatgeek.com/venues/virginia-credit-union-stadium/tickets",
// 			"score": 0.37,
// 			"location": {
// 					"lat": 38.2202,
// 					"lon": -77.4959
// 			},
// 			"address": "42 Jackie Robinson Way",
// 			"country": "US",
// 			"has_upcoming_events": true,
// 			"num_upcoming_events": 38,
// 			"city": "Fredericksburg",
// 			"slug": "virginia-credit-union-stadium",
// 			"extended_address": "Fredericksburg, VA 22401",
// 			"id": 520468,
// 			"popularity": 0,
// 			"access_method": null,
// 			"metro_code": 511,
// 			"capacity": 0,
// 			"display_location": "Fredericksburg, VA"
// 	},
// 	"datetime_tbd": false,
// 	"performers": [
// 			{
// 					"type": "minor_league_baseball",
// 					"name": "Fredericksburg Nationals",
// 					"image": "https://seatgeek.com/images/performers-landscape/fredericksburg-nationals-6c89db/773586/huge.jpg",
// 					"id": 773586,
// 					"images": {
// 							"huge": "https://seatgeek.com/images/performers-landscape/fredericksburg-nationals-6c89db/773586/huge.jpg"
// 					},
// 					"divisions": null,
// 					"has_upcoming_events": true,
// 					"primary": true,
// 					"stats": {
// 							"event_count": 54
// 					},
// 					"taxonomies": [
// 							{
// 									"id": 1000000,
// 									"name": "sports",
// 									"parent_id": null,
// 									"document_source": {
// 											"source_type": "ELASTIC",
// 											"generation_type": "FULL"
// 									},
// 									"rank": 0
// 							},
// 							{
// 									"id": 1010000,
// 									"name": "baseball",
// 									"parent_id": 1000000,
// 									"document_source": {
// 											"source_type": "ELASTIC",
// 											"generation_type": "FULL"
// 									},
// 									"rank": 0
// 							},
// 							{
// 									"id": 1010300,
// 									"name": "minor_league_baseball",
// 									"parent_id": 1010000,
// 									"document_source": {
// 											"source_type": "ELASTIC",
// 											"generation_type": "FULL"
// 									},
// 									"rank": 0
// 							}
// 					],
// 					"image_attribution": "SeatGeek - 2022 (2000 X 2000)",
// 					"url": "https://seatgeek.com/fredericksburg-nationals-tickets",
// 					"score": 0.24,
// 					"slug": "fredericksburg-nationals",
// 					"home_venue_id": 520468,
// 					"short_name": "Fredericksburg Nationals",
// 					"num_upcoming_events": 54,
// 					"colors": null,
// 					"image_license": "SeatGeek - 2022 (2000 X 2000)",
// 					"popularity": 0,
// 					"home_team": true,
// 					"location": {
// 							"lat": 38.2202,
// 							"lon": -77.4959
// 					},
// 					"image_rights_message": ""
// 			},
// 			{
// 					"type": "minor_league_baseball",
// 					"name": "Charleston RiverDogs",
// 					"image": "https://seatgeek.com/images/performers-landscape/charleston-riverdogs-4947d9/9283/huge.jpg",
// 					"id": 9283,
// 					"images": {
// 							"huge": "https://seatgeek.com/images/performers-landscape/charleston-riverdogs-4947d9/9283/huge.jpg"
// 					},
// 					"divisions": null,
// 					"has_upcoming_events": true,
// 					"stats": {
// 							"event_count": 77
// 					},
// 					"taxonomies": [
// 							{
// 									"id": 1000000,
// 									"name": "sports",
// 									"parent_id": null,
// 									"document_source": {
// 											"source_type": "ELASTIC",
// 											"generation_type": "FULL"
// 									},
// 									"rank": 0
// 							},
// 							{
// 									"id": 1010000,
// 									"name": "baseball",
// 									"parent_id": 1000000,
// 									"document_source": {
// 											"source_type": "ELASTIC",
// 											"generation_type": "FULL"
// 									},
// 									"rank": 0
// 							},
// 							{
// 									"id": 1010300,
// 									"name": "minor_league_baseball",
// 									"parent_id": 1010000,
// 									"document_source": {
// 											"source_type": "ELASTIC",
// 											"generation_type": "FULL"
// 									},
// 									"rank": 0
// 							}
// 					],
// 					"image_attribution": null,
// 					"url": "https://seatgeek.com/charleston-riverdogs-tickets",
// 					"score": 0.24,
// 					"slug": "charleston-riverdogs",
// 					"home_venue_id": 5222,
// 					"short_name": "RiverDogs",
// 					"num_upcoming_events": 77,
// 					"colors": null,
// 					"image_license": null,
// 					"popularity": 0,
// 					"away_team": true,
// 					"location": {
// 							"lat": 32.7907,
// 							"lon": -79.9611
// 					},
// 					"image_rights_message": ""
// 			}
// 	],
// 	"is_open": false,
// 	"links": [],
// 	"datetime_local": "2023-06-06T03:30:00",
// 	"time_tbd": true,
// 	"short_title": "Charleston RiverDogs at Fredericksburg Nationals",
// 	"visible_until_utc": "2023-06-07T04:00:00",
// 	"stats": {
// 			"listing_count": null,
// 			"average_price": null,
// 			"lowest_price_good_deals": null,
// 			"lowest_price": null,
// 			"highest_price": null,
// 			"visible_listing_count": null,
// 			"dq_bucket_counts": null,
// 			"median_price": null,
// 			"lowest_sg_base_price": null,
// 			"lowest_sg_base_price_good_deals": null
// 	},
// 	"taxonomies": [
// 			{
// 					"id": 1000000,
// 					"name": "sports",
// 					"parent_id": null,
// 					"rank": 0
// 			},
// 			{
// 					"id": 1010000,
// 					"name": "baseball",
// 					"parent_id": 1000000,
// 					"rank": 0
// 			},
// 			{
// 					"id": 1010300,
// 					"name": "minor_league_baseball",
// 					"parent_id": 1010000,
// 					"rank": 0
// 			}
// 	],
// 	"url": "https://seatgeek.com/charleston-riverdogs-at-fredericksburg-nationals-tickets/minor-league-baseball/2023-06-06-3-30-am/5843738",
// 	"score": 0.336,
// 	"announce_date": "2022-10-13T00:00:00",
// 	"created_at": "2022-10-13T18:24:55",
// 	"date_tbd": false,
// 	"title": "Charleston RiverDogs at Fredericksburg Nationals",
// 	"popularity": 0.679,
// 	"description": "",
// 	"status": "normal",
// 	"access_method": null,
// 	"event_promotion": null,
// 	"announcements": {},
// 	"conditional": false,
// 	"enddatetime_utc": null,
// 	"visible_at": "2023-04-18T00:49:34Z",
// 	"is_visible_override": "UNSET",
// 	"tdc_pvo_id": 0,
// 	"tdc_pv_id": 0,
// 	"themes": [],
// 	"domain_information": []
// }