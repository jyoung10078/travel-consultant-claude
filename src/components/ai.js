import Anthropic from "@anthropic-ai/sdk";

const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY;

const anthropic = new Anthropic({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true,
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
    to a web page. I will pass you a list of items about my proposed plan and you return a plan
    for my trip.`

export async function getPlan(inputItems) {
    const planItemsString = inputItems.join(", ")
    const msg = await anthropic.messages.create({
        model: "claude-3-haiku-20240307",
        system: SYSTEM_PROMPT,
        max_tokens: 1024,
        messages: [{ role: "user", content: planItemsString }]
    });

    return msg.content[0].text
}
