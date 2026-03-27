
import { Card, CardContent, CardMedia, Typography, Button, Box, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FriendshipHearts } from './FriendshipHearts';


interface Project {
  title: string;
  description: string;
  tech: string[];
  quality?: 'bronze' | 'silver' | 'gold';
  heartsLevel?: number;
  image?: string;
  repoUrl: string;
}

interface HarvestCardProps {
  project: Project;
  onView: (url: string) => void;
}


interface PixelBadgeProps {
  quality?: 'bronze' | 'silver' | 'gold';
}


const PixelBadge = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'quality',
})<PixelBadgeProps>(({ theme, quality }) => {
  
  const getQualityColors = () => {
    switch (quality) {
      case 'gold':
        return {
          bg: '#F4C542',
          color: '#5C3E1A',
        };
      case 'silver':
        return {
          bg: '#C0C0C0',
          color: '#2C2C2C',
        };
      case 'bronze':
        return {
          bg: '#CD7F32',
          color: '#2C2C2C',
        };
      default:
        return {
          bg: '#CD7F32',
          color: '#2C2C2C',
        };
    }
  };

  const colors = getQualityColors();

  return {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: colors.bg,
    color: colors.color,
    padding: '4px 8px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: 'bold',
    fontFamily: '"Press Start 2P", monospace',
    opacity: 0.8,
    zIndex: 1,
  };
});

const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.paper,
  border: `3px solid ${theme.palette.primary.dark}`,
  borderRadius: '20px',
  overflow: 'hidden',
  transition: 'all 0.2s ease',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-8px)',
    '& .harvest-badge': {
      opacity: 1,
    },
  },
}));

const CardContentStyled = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
}));


const qualityIcon = {
  bronze: '🥉',
  silver: '🥈',
  gold: '🌟',
};

export function HarvestCard({ project, onView }: HarvestCardProps) {
  const { title, description, tech, quality, heartsLevel, image, repoUrl } = project;

  return (
    <StyledCard>
      {quality && (
        <PixelBadge quality={quality} className="harvest-badge">
          {qualityIcon[quality]} {quality.toUpperCase()}
        </PixelBadge>
      )}
      
      {image && (
        <CardMedia
          component="img"
          height="160"
          image={image}
          alt={title}
          sx={{
            imageRendering: 'pixelated',
            borderBottom: (theme) => `2px solid ${theme.palette.primary.dark}`,
          }}
        />
      )}
      
      <CardContentStyled>
        <Typography 
          variant="h6" 
          component="h3" 
          sx={{ 
            fontFamily: '"Press Start 2P", monospace', 
            fontSize: '0.9rem', 
            mb: 1,
            lineHeight: 1.4,
          }}
        >
          {title}
        </Typography>
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
          {tech.map((t) => (
            <Chip
              key={t}
              label={t}
              size="small"
              sx={{
                backgroundColor: '#F0E6D0',
                fontFamily: 'monospace',
                fontSize: '0.7rem',
                borderRadius: '8px',
                '& .MuiChip-label': {
                  px: 1,
                },
              }}
            />
          ))}
        </Box>
        
        {heartsLevel !== undefined && (
          <Box sx={{ mt: 'auto', mb: 1 }}>
            <FriendshipHearts level={heartsLevel} skillName={title} />
          </Box>
        )}
        
        <Button
          variant="contained"
          fullWidth
          sx={{ 
            mt: 2, 
            fontFamily: '"Press Start 2P", monospace', 
            fontSize: '0.7rem',
            py: 1,
          }}
          onClick={() => onView(repoUrl)}
        >
          🌾 VER COLHEITA →
        </Button>
      </CardContentStyled>
    </StyledCard>
  );
}