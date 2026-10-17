import styles from './VoteStats.module.css';

export interface VoteResults {
    good: number;
    neutral: number;
    bad: number;
}

export type VoteType = 'good' | 'neutral' | 'bad';

export interface VoteStatsProps {
    votes: VoteResults;
    totalVotes: number;
    positiveRate: number;
}

export default function VoteStats({ votes, totalVotes, positiveRate }: VoteStatsProps) {
    return (
        <div className={styles.container}>
            <p className={styles.stat}>Good: <strong>{votes.good}</strong></p>
            <p className={styles.stat}>Neutral: <strong>{votes.neutral}</strong></p>
            <p className={styles.stat}>Bad: <strong>{votes.bad}</strong></p>
            <p className={styles.stat}>Total: <strong>{totalVotes}</strong></p>
            <p className={styles.stat}>Positive: <strong>{positiveRate}%</strong></p>
        </div>
    );
}