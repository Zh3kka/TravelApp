import { NextApiRequest, NextApiResponse } from "next";
import { IPlace } from "../../../app/types/place";

export const places: IPlace[] = [
    {
        slug: 'Miami',
        location: { country: 'USA', city: 'Miami' },
        imagePath: 'http://localhost:3000/images/places/miami.jpg',
        description: 'Miami, the main resort not only in Florida, but also in the United States as a whole, offers tourists endless sunny beaches, a mild climate and a lot of entertainment for every taste. The main tourist areas in Miami are the world-famous Miami Beach and South Beach.',
        rating: 5,
        duration: '5 days',
        distance: 10,
        googleMapLink: 'some text',
        mapImage: 'way to map',
    },
    {
        slug: 'Los Angeles',
        location: { country: 'USA', city: 'Los Angeles' },
        imagePath: 'http://localhost:3000/images/places/LA.jpg',
        description: 'somebody one told me that world is gonna role me',
        rating: 9,
        duration: '5 days',
        distance: 10,
        googleMapLink: 'this word was not absolute',
        mapImage: 'way to map',
    },
    {
        slug: 'Tokyo',
        location: { country: 'Japan', city: 'Tokyo' },
        imagePath: 'http://localhost:3000/images/places/tokyo.jpg',
        description: 'she was looking for the hating',
        rating: 5,
        duration: '5 days',
        distance: 10,
        googleMapLink: 'they have another food and we kill them',
        mapImage: 'way to map',
    },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    return res.status(200).json(places)
}

