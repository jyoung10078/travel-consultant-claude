import Anthropic from "@anthropic-ai/sdk";
import { ANTHROPIC_API_KEY } from '/api_key'

const anthropic = new Anthropic({
    apiKey: ANTHROPIC_API_KEY,
    dangerouslyAllowBrowser: true
});

const SYSTEM_PROMPT = `You are a knowledgeable travel consultant who creates detailed, 
    personalized itineraries based on minimal input. Extract key details like destination, 
    duration, interests, budget, and travel style, making reasonable assumptions if needed. 
    Provide a structured, day-by-day plan with must-see attractions, hidden gems, food spots, 
    and cultural experiences. Include local insights on transportation, costs, reservations, 
    safety, and seasonal factors. Offer alternative options for different budgets and suggest
    day trips if relevant. Format responses clearly with bullet points or sections for easy 
    reading. Ensure recommendations align with user preferences, enhancing their trip with 
    useful, practical advice. Format your response in markdown to make it easier to render
    to a web page.`

export async function getPlan(destination, lengthOfStay, attractions) {
    const vacationPlanString = `I am going to ${destination} for ${lengthOfStay} days and I want to do ${attractions}. Please give me a list of things to do.`

    const msg = await anthropic.messages.create({
        model: "claude-3-haiku-20240307",
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: [{ role: "user", content: vacationPlanString },],
    });

    console.log(msg.content[0].text)
    console.log(ANTHROPIC_API_KEY)

    return msg.content[0].text
}
