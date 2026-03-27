
import { AppBar, Toolbar, Button, Badge, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';


interface NavButtonProps {
  active?: boolean;
}


interface BackpackNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}


const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#F2E8CF',
  borderBottom: `4px solid ${theme.palette.primary.dark}`,
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  position: 'sticky',
}));


const NavButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'active',
})<NavButtonProps>(({ theme, active }) => ({
  fontFamily: '"Press Start 2P", monospace',
  fontSize: '0.7rem',
  color: theme.palette.text.primary,
  backgroundColor: active ? theme.palette.secondary.light : 'transparent',
  border: `2px solid ${theme.palette.primary.dark}`,
  borderRadius: '20px',
  margin: '0 4px',
  padding: '6px 16px',
  transition: 'all 0.1s ease',
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    transform: 'translateY(-2px)',
  },
}));


const navItems = [
  { id: 'about', label: 'PERFIL', icon: '🧑‍🌾' },
  { id: 'skills', label: ' HABILIDADES', icon: '🎒' },
  { id: 'projects', label: 'COLHEITAS', icon: '🌾' },
  { id: 'contact', label: 'CONTATO', icon: '✉️' },
] as const;

export function BackpackNav({ activeSection, onSectionChange }: BackpackNavProps) {
  const [heartbeat, setHeartbeat] = useState(false);

  return (
    <StyledAppBar position="sticky">
      <Toolbar sx={{ justifyContent: 'center', gap: 2, flexWrap: 'wrap', py: 1 }}>
        {navItems.map((item) => (
          <NavButton
            key={item.id}
            active={activeSection === item.id}
            onClick={() => onSectionChange(item.id)}
            startIcon={<span>{item.icon}</span>}
          >
            {item.label}
          </NavButton>
        ))}
        
        <Badge
          badgeContent="🐛"
          color="error"
          sx={{ ml: 2 }}
          invisible={!heartbeat}
        >
          <IconButton 
            onClick={() => setHeartbeat(!heartbeat)}
            sx={{ 
              backgroundColor: '#E6D5B8',
              border: '2px solid #8B5A2B',
              '&:hover': {
                backgroundColor: '#F4C542',
              },
            }}
          >
            <span role="img" aria-label="juminho">🎮</span>
          </IconButton>
        </Badge>
      </Toolbar>
    </StyledAppBar>
  );
}