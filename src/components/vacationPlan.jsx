import ReactMarkdwon from 'react-markdown'

export default function VacationPlan(props) {
    return (
        <section className="vacation-plan">
            <div className="vacation-plan-container">
                <ReactMarkdwon>{props.plan}</ReactMarkdwon>
            </div>
        </section>
    )
}