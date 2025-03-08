
import { useState } from 'react'

export default function Body() {

    const [destination, setDestination] = useState('')
    const [lengthOfStay, setLengthOfStay] = useState('')
    const [attactions, setAttactions] = useState('')

    function handleAction(formData) {
        const destination = formData.get('destination')
        destination && setDestination(destination)

        const lengthOfStay = formData.get('length-of-stay')
        lengthOfStay && setLengthOfStay(lengthOfStay)

        const attactions = formData.get('attraction')
        attactions && setAttactions(attactions)
    }

    return (
        <main>
            <form action={handleAction} className="input-container">
                <input type="text" name="destination" placeholder={destination ? destination : "Where are you headed?"} />
                <input type="text" name="length-of-stay" placeholder={lengthOfStay ? lengthOfStay : "How long are you staying?"} />
                <input type="text" name="attraction" placeholder={attactions ? attactions : "Anything you want to see/do?"} />
                <button type="submit">Enter</button>
            </form>
            {destination && <h1>{destination}</h1>}
            {lengthOfStay && <h1>{lengthOfStay}</h1>}
            {attactions && <h1>{attactions}</h1>}
        </main>
    )
}