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

    function handleClear() {
        setDestination('')
        setLengthOfStay('')
        setAttactions('')
    }

    return (
        <main>
            <form action={handleAction} className="input-container">
                <input type="text" name="destination" placeholder={destination ? destination : "Where are you heading?"} />
                <input type="text" name="length-of-stay" placeholder={lengthOfStay ? lengthOfStay : "How long are you staying?"} />
                <input type="text" name="attraction" placeholder={attactions ? attactions : "Anything you want to see/do?"} />
                <button type="submit">Enter</button>
                <button type="button" onClick={handleClear}>Clear</button>
            </form>
            {destination || lengthOfStay || attactions ? (
                <div className="output-container">
                    <h1>Your Trip:</h1> 
                    <ul>
                        {destination && <li>{destination}</li>}
                        {lengthOfStay && <li>{lengthOfStay}</li>}
                        {attactions && <li>{attactions}</li>}
                    </ul>
                </div>
            ) : null}
            {destination || lengthOfStay || attactions ? <div className="fetch-plan-container">
                <button type="button">Fetch Plan</button>
            </div> : null}
        </main>
    )
}