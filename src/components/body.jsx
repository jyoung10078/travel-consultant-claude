import { useState } from 'react'
import { getPlan } from './ai'
import VacationPlan from './vacationPlan'
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
        setPlan('')
    }

    const [plan, setPlan] = useState('')

    async function handleGetPlan() {
        const plan = await getPlan(destination, lengthOfStay, attactions)
        setPlan(plan)
    }

    return (
        <main>
            <form action={handleAction} className="input-container">
                <div className="input-container-form-group">
                    <label htmlFor="destination">Destination</label>    
                    <input type="text" name="destination" placeholder={destination ? destination : "Where are you heading?"} />
                </div>
                <div className="input-container-form-group">
                    <label htmlFor="length-of-stay">Length of Stay</label>
                    <input type="text" name="length-of-stay" placeholder={lengthOfStay ? lengthOfStay : "How long are you staying?"} />
                </div>
                <div className="input-container-form-group">
                    <label htmlFor="attraction">Attractions</label>
                    <input type="text" name="attraction" placeholder={attactions ? attactions : "Anything you want to see/do?"} />
                </div>
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
            {destination && lengthOfStay && attactions ? <div className="fetch-plan-container">
                <div className="fetch-plan-container-plan-container">
                    <div className="fetch-plan-container-text">
                        <h1>Ready for a plan?</h1>
                        <p>Click the button below to get a detailed itinerary for your trip.</p>
                    </div>
                    <button type="button" onClick={handleGetPlan}>Get Plan</button>
                </div>
            </div> : null}
            {plan ? <VacationPlan plan={plan} /> : null}
        </main>
    )
}