import ReactMarkdwon from 'react-markdown'

export default function VacationPlan(props) {
    return (
        <section className="vacation-plan">
            <h1>Travel Consultant Claude Recommends:</h1>
            <ReactMarkdwon>{props.plan}</ReactMarkdwon>
        </section>
    )
}