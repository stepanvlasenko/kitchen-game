import { useEffect, useState } from 'react'
import { playerAPI, userAPI } from '../../ts/api'
import './Rating.css'

export default function Rating() {
    const [rating, setRating] = useState<[number, string, number][] | []>([])

    useEffect(() => {
        Promise
            .all([playerAPI.getAll(), userAPI.getAll()])
            .then(([allPlayers, allUsers]) => {
                const result = allPlayers
                    .sort((a, b) => b.score - a.score)
                    .map((v, i) => {
                        const nickname = allUsers.find(u => u.id === v.userId)!.nickname
                        return [i, nickname, v.score]
                    })
                setRating(result as [number, string, number][])
            })
    }, [])


    return (
        <div className='rating'>
            <h1>Рейтинг игроков</h1>
            {rating.map(([i, nickname, score]) => (
                    <div key={i} className={`rating__text ${i === 0 ? 'rating__best' : ''}`}>
                        {`${i + 1}. ${nickname}: ${score} очков`}
                    </div>
                )
            )}
        </div>
    )
}