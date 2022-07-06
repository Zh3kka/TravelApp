import { NextApiRequest, NextApiResponse } from "next";
import { IPlace } from "../../app/types/place";
import miamiImg from '../../assets/images/miami.jpg'

const places: IPlace[] = [
    {
        slug: 'miami',
        location: 'USA',
        imagePath: miamiImg.src,
        description: 'lorem',
        rating: 5,
        duration: '5 days',
        distance: 10,
        googleMapLink: 'some text',
        mapImage: 'way to map',
    },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    return res.status(200).json(places)
}