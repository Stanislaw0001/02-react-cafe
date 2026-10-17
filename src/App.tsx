import { useState } from 'react';
import css from './components/App/App.module.css';
import CafeInfo from './components/CafeInfo/CafeInfo';
import Notification from './components/Notification/Notification';
import { VoteOptions } from './components/VoteOptions/VoteOptions';
import VoteStats from './components/VoteStats/VoteStats';
import type { VoteResults, VoteType } from './types/votes';

export default function App() {
    const [votes, setVotes] = useState<VoteResults>({
        good: 0,
        neutral: 0,
        bad: 0
    });

    const handleVote = (voteType: VoteType): void => {
        setVotes((prevVotes) => ({
            ...prevVotes,
            [voteType]: prevVotes[voteType] + 1,
        }));
    };

    const resetVotes = (): void => {
        setVotes({
            good: 0,
            neutral: 0,
            bad: 0,
        });
    };

    const totalVotes = votes.good + votes.neutral + votes.bad;
    const positiveRate = totalVotes === 0 ? 0 : Math.round((votes.good / totalVotes) * 100);
    const canReset = totalVotes > 0;

    return (
        <div className={css.app}>
            <CafeInfo />
            <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={canReset} />
            {totalVotes > 0 ? (
                <VoteStats votes={votes} totalVotes={totalVotes} positiveRate={positiveRate} />
            ) : (
                <Notification />
            )}
        </div>
    );
}