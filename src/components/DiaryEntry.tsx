
import { Paper, Typography, Box, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';


type Season = 'spring' | 'summer' | 'fall' | 'winter';

const DiaryPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: '#FFF9EF',
  backgroundImage: `
    repeating-linear-gradient(
      transparent,
      transparent 28px,
      rgba(139, 90, 43, 0.05) 28px,
      rgba(139, 90, 43, 0.05) 29px
    )
  `,
  padding: theme.spacing(4),
  borderRadius: '12px',
  borderLeft: `8px solid ${theme.palette.primary.main}`,
  boxShadow: '6px 8px 0 rgba(0,0,0,0.1)',
  position: 'relative',
  '&::before': {
    content: '"📔"',
    position: 'absolute',
    top: -12,
    left: -12,
    fontSize: '2rem',
    transform: 'rotate(-15deg)',
  },
}));

const DateStamp = styled(Typography)(({ theme }) => ({
  fontFamily: '"Press Start 2P", monospace',
  fontSize: '0.7rem',
  color: theme.palette.primary.dark,
  marginBottom: theme.spacing(2),
  textTransform: 'uppercase',
}));


interface DiaryEntryProps {
  date: string;
  title: string;
  children: React.ReactNode;
  season?: Season; 
}

export function DiaryEntry({ date, title, children, season = 'spring' }: DiaryEntryProps) {
  const seasonEmoji: Record<Season, string> = {  
    spring: '🌸',
    summer: '☀️',
    fall: '🍂',
    winter: '❄️',
  };

  return (
    <DiaryPaper elevation={0}>
      <DateStamp>
        {seasonEmoji[season]} {date}
      </DateStamp>
      <Typography variant="h6" sx={{ fontFamily: '"Press Start 2P", monospace', fontSize: '0.9rem', mb: 2 }}>
        {title}
      </Typography>
      <Divider sx={{ mb: 2, backgroundColor: '#E6D5B8' }} />
      <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
        {children}
      </Typography>
    </DiaryPaper>
  );
}