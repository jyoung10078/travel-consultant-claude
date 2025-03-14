import { useState } from 'react'
import { getPlan } from './ai'
import VacationPlan from './vacationPlan'
export default function Body() {

    const [inputItems, setInputItems] = useState([])

    function handleAction(formData) {
        const inputItems = formData.get('inputItems')
        inputItems && setInputItems(prevInputItems => [...prevInputItems, inputItems])
    }

    function handleClear() {
        setInputItems([])
        setPlan('')
    }

    const [plan, setPlan] = useState('')

    async function handleGetPlan() {
        const plan = await getPlan(inputItems)
        setPlan(plan)
    }

    return (
        <main>
            <form action={handleAction} className="input-container">
                <div className="input-container-form-group">
                    <input type="text" name="inputItems" placeholder="e.g. Paris, 5 days, museums, etc." />
                </div>
                <button type="submit">+ Add Plan Item</button>
            </form>
                <div className="output-container">
                    {inputItems.length > 0 ? <h1>Your Trip:</h1> : null} 
                    <ul>
                        {inputItems.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                    </ul>
                </div>
            {inputItems.length > 2 ? <div className="fetch-plan-container">
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