import { Box, Typography, LinearProgress, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';

interface SeedProgressProps {
  level?: number;
}


const SeedProgress = styled(LinearProgress, {
  shouldForwardProp: (prop) => prop !== 'level',
})<SeedProgressProps>(({ theme, level }) => {
  
  const getBarColor = () => {
    if (level && level >= 80) return '#F4C542'; 
    if (level && level >= 50) return '#5C9E5E'; 
    return '#8B5A2B'; 
  };

  return {
    height: 16,
    borderRadius: 8,
    backgroundColor: '#E6D5B8',
    '& .MuiLinearProgress-bar': {
      borderRadius: 8,
      backgroundColor: getBarColor(),
      backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.2) 0px, rgba(255,255,255,0.2) 8px, transparent 8px, transparent 16px)',
    },
  };
});

const SkillIcon = styled(Box)(({ theme }) => ({
  fontSize: '1.8rem',
  filter: 'drop-shadow(2px 2px 0 rgba(0,0,0,0.2))',
  marginRight: theme.spacing(1),
}));


interface SeedGaugeProps {
  skill: string;
  level: number;
  icon: string;
  description: string;
}

export function SeedGauge({ skill, level, icon, description }: SeedGaugeProps) {
  return (
    <Tooltip title={description} arrow placement="top">
      <Box sx={{ mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <SkillIcon>{icon}</SkillIcon>
          <Typography variant="body1" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
            {skill}
          </Typography>
          <Typography variant="caption" sx={{ fontFamily: 'monospace' }}>
            {level}%
          </Typography>
        </Box>
        <SeedProgress variant="determinate" value={level} level={level} />
      </Box>
    </Tooltip>
  );
}