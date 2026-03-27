
import { Box, Typography, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';


interface HeartIconProps {
  filled: boolean;
}

const HeartIcon = styled('span', {
  shouldForwardProp: (prop) => prop !== 'filled', 
})<HeartIconProps>(({ theme, filled }) => ({
  fontSize: '20px',
  color: filled ? '#FF4D6D' : '#E0B0B5',
  textShadow: filled ? '0 0 2px #FFB3C6' : 'none',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

const HeartContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '4px',
  alignItems: 'center',
}));

interface FriendshipHeartsProps {
  level: number;
  maxHearts?: number;
  skillName: string;
}

export function FriendshipHearts({ level, maxHearts = 5, skillName }: FriendshipHeartsProps) {
  return (
    <Tooltip title={`${skillName}: ${level} de ${maxHearts} corações`} arrow>
      <HeartContainer>
        {[...Array(maxHearts)].map((_, i) => (
          <HeartIcon key={i} filled={i < level}>
            {i < level ? '❤️' : '🖤'}
          </HeartIcon>
        ))}
        <Typography variant="caption" sx={{ ml: 1, color: 'text.secondary' }}>
          Nv. {level}
        </Typography>
      </HeartContainer>
    </Tooltip>
  );
}