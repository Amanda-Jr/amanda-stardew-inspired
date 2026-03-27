
import { 
  Box, 
  Container, 
  Typography, 
  IconButton, 
  TextField, 
  Button, 
  Paper 
} from '@mui/material';
import Grid2 from '@mui/material/Grid'; 
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from 'react';

const FooterPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: '#E6D5B8',
  borderTop: `4px solid ${theme.palette.primary.dark}`,
  borderRadius: '24px 24px 0 0',
  padding: theme.spacing(4, 0),
  marginTop: theme.spacing(8),
}));

export function MailboxFooter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    console.log('Carta enviada!', { email, message });
    
    setEmail('');
    setMessage('');
  };

  return (
    <FooterPaper elevation={0}>
      <Container maxWidth="lg">
        
        <Grid2 container spacing={4}>
          
          <Grid2 size={{ xs: 12, md: 5 }}>
            <Typography variant="h6" sx={{ fontFamily: '"Press Start 2P", monospace', mb: 2 }}>
              📬 CARTEIRO
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Envie uma carta para a Fazenda do Código. Responderei assim que o calcifer aquecer a chaleira!
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
              <IconButton 
                href="https://github.com/Amanda-Jr" 
                target="_blank" 
                sx={{ 
                  backgroundColor: '#F2E8CF', 
                  border: '2px solid #8B5A2B',
                  '&:hover': {
                    backgroundColor: '#F4C542',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.2s ease',
                }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton 
                href="https://www.linkedin.com/in/amanda-pereira16/" 
                target="_blank" 
                sx={{ 
                  backgroundColor: '#F2E8CF', 
                  border: '2px solid #8B5A2B',
                  '&:hover': {
                    backgroundColor: '#F4C542',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.2s ease',
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton 
                href="mailto:amandadasilvapereira162004@gmail.com" 
                sx={{ 
                  backgroundColor: '#F2E8CF', 
                  border: '2px solid #8B5A2B',
                  '&:hover': {
                    backgroundColor: '#F4C542',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.2s ease',
                }}
              >
                <EmailIcon />
              </IconButton>
            </Box>
          </Grid2>
          
          
          <Grid2 size={{ xs: 12, md: 7 }}>
            <Typography variant="body2" sx={{ mb: 1, fontFamily: 'monospace' }}>
              🕊️ Deixe sua mensagem:
            </Typography>
            <TextField
              fullWidth
              size="small"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ 
                mb: 2, 
                backgroundColor: '#FFF9EF', 
                borderRadius: 2,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#8B5A2B',
                  },
                  '&:hover fieldset': {
                    borderColor: '#5C9E5E',
                  },
                },
              }}
            />
            <TextField
              fullWidth
              multiline
              rows={3}
              placeholder="Sua mensagem..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              sx={{ 
                mb: 2, 
                backgroundColor: '#FFF9EF', 
                borderRadius: 2,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#8B5A2B',
                  },
                  '&:hover fieldset': {
                    borderColor: '#5C9E5E',
                  },
                },
              }}
            />
            <Button
              variant="contained"
              onClick={handleSend}
              startIcon={<span>✉️</span>}
              sx={{ 
                fontFamily: '"Press Start 2P", monospace', 
                fontSize: '0.7rem',
                backgroundColor: '#5C9E5E',
                '&:hover': {
                  backgroundColor: '#3F6E41',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              ENVIAR CARTA
            </Button>
          </Grid2>
        </Grid2>
        
        <Typography 
          variant="caption" 
          sx={{ 
            display: 'block', 
            textAlign: 'center', 
            mt: 4, 
            color: 'text.secondary',
            fontFamily: 'monospace',
          }}
        >
          🌾 © 2026 - Fazenda do Código - Todos os pixels reservados 🌟
          <div> Icons made by <a href="https://www.flaticon.com/authors/dimas-anom" title="Dimas Anom"> Dimas Anom </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
        </Typography>
      </Container>
    </FooterPaper>
  );
}