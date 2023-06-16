import {  useState } from 'react';
import { Statistics } from "components/Statistics/Statistics";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Section } from "components/Section/Section";

export const CreateFeedback = ( ) => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleSetValue = (type) => {
        if (type === 'good') {
            setGood(prevState => prevState + 1);
        } else if (type === 'neutral') {
            setNeutral(prevState => prevState + 1);
        } else {
            setBad(prevState => prevState + 1);
        }
    }

    const total = good + neutral + bad;
    const positivePercentage = Math.round((good / total * 100));

    return (
        <div>
            <Section>
                <FeedbackOptions
                    options={['good', 'neutral', 'bad']}
                    onLeaveFeedback={handleSetValue} />
            </Section>
            <Section>
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={total}
                    positivePercentage={positivePercentage} />
            </Section>
        </div>
    )
}