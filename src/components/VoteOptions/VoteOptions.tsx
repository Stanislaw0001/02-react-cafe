import css from './VoteOptions.module.css';
import type { VoteType } from '../../types/votes';

interface VoteOptionsProps {
    onVote: (voteType: VoteType) => void;
    onReset: () => void;
    canReset: boolean;

}

export const VoteOptions: React.FC<VoteOptionsProps> = ({
    onVote,
    onReset,
    canReset,
}) => {
    return (
        <div className={css.container}>
  <button className={css.button} onClick={() => onVote('good')}>Good</button>
  <button className={css.button} onClick={() => onVote('neutral')}>Neutral</button>
  <button className={css.button} onClick={() => onVote('bad')}>Bad</button>
  
  {canReset && (
<button className={`${css.button} ${css.reset}`} onClick={onReset} disabled={!canReset}>
    Reset
  </button>  )}
</div>

    )
}