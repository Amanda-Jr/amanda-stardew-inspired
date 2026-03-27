
import { ThemeProvider, CssBaseline, Container, Box, Typography } from '@mui/material';
import Grid2 from '@mui/material/Grid'; 
import { useState } from 'react';
import { theme } from './theme';
import { BackpackNav } from './components/BackpackNav';
import { DiaryEntry } from './components/DiaryEntry';
import { HarvestCard } from './components/HarvestCard';
import { SeedGauge } from './components/SeedGauge';
import { MailboxFooter } from './components/MailboxFooter';


interface Project {
  title: string;
  description: string;
  tech: string[];
  quality?: 'bronze' | 'silver' | 'gold'; 
  heartsLevel?: number;
  image?: string;
  repoUrl: string;
}


interface Skill {
  name: string;
  level: number;
  icon: string;
  description: string;
}


const skills: Skill[] = [
  { name: 'React', level: 85, icon: '⚛️', description: 'Componentes que crescem como mudas bem cuidadas' },
  { name: 'Node.js', level: 78, icon: '🟢', description: 'Backend robusto como tronco de carvalho' },
  { name: 'Python', level: 65, icon: '🐍', description: 'Scripts ágeis como serpentes do campo' },
  { name: 'UI/UX', level: 82, icon: '🎨', description: 'Interfaces que contam histórias' },
];


const projects: Project[] = [
  {
    title: 'E-COMMERCE LUNAR',
    description: 'Plataforma de vendas com temática espacial, carrinho mágico e checkout fluido.',
    tech: ['React', 'Node', 'MongoDB'],
    quality: 'gold', 
    heartsLevel: 4,
    repoUrl: 'https://github.com/seu-usuario/ecommerce-lunar',
  },
  {
    title: 'DASHBOARD ORBITAL',
    description: 'Painel de monitoramento com gráficos em tempo real e alertas personalizáveis.',
    tech: ['Vue', 'D3', 'Express'],
    quality: 'silver', 
    heartsLevel: 3,
    repoUrl: 'https://github.com/seu-usuario/dashboard-orbital',
  },
  {
    title: 'API DOS ESPÍRITOS',
    description: 'REST API para gestão de tarefas com autenticação e documentação interativa.',
    tech: ['Python', 'FastAPI', 'PostgreSQL'],
    quality: 'bronze', 
    heartsLevel: 2,
    repoUrl: 'https://github.com/seu-usuario/api-espiritos',
  },
];

function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <BackpackNav 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      
      <Container maxWidth="lg" sx={{ py: 4 }}>
        
        {activeSection === 'about' && (
          <Box sx={{ mb: 6 }}>
            <DiaryEntry 
              date="Primavera, Ano 3" 
              title="Sobre a Fazendeira" 
              season="spring"
            >
              Olá! Sou Amanda, desenvolvedora full stack que encontrou na programação 
              a mesma paz que uma manhã ensolarada na fazenda. Cada projeto que cultivo 
              é regado com atenção aos detalhes, carinho pela experiência do usuário e 
              uma pitada de magia. Acredito que código também pode ser aconchegante.
            </DiaryEntry>
          </Box>
        )}
        
        
        {activeSection === 'skills' && (
          <Box sx={{ mb: 6 }}>
            <Typography 
              variant="h2" 
              sx={{ 
                mb: 4, 
                textAlign: 'center',
                fontFamily: '"Press Start 2P", monospace',
                fontSize: { xs: '1.2rem', sm: '1.5rem' },
              }}
            >
              🎒 MOCHILA DE FERRAMENTAS
            </Typography>
            <Grid2 container spacing={3}>
              {skills.map((skill) => (
                <Grid2 size={{ xs: 12, sm: 6 }} key={skill.name}>
                  <SeedGauge 
                    skill={skill.name}
                    level={skill.level}
                    icon={skill.icon}
                    description={skill.description}
                  />
                </Grid2>
              ))}
            </Grid2>
          </Box>
        )}
        
        
        {activeSection === 'projects' && (
          <Box sx={{ mb: 6 }}>
            <Typography 
              variant="h2" 
              sx={{ 
                mb: 4, 
                textAlign: 'center',
                fontFamily: '"Press Start 2P", monospace',
                fontSize: { xs: '1.2rem', sm: '1.5rem' },
              }}
            >
              🌾 COLHEITAS RECENTES
            </Typography>
            <Grid2 container spacing={3}>
              {projects.map((project) => (
                <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={project.title}>
                  <HarvestCard 
                    project={project} 
                    onView={(url) => window.open(url, '_blank')} 
                  />
                </Grid2>
              ))}
            </Grid2>
          </Box>
        )}
        
        
        {activeSection === 'contact' && (
          <Box sx={{ mb: 6 }}>
            <Typography 
              variant="h2" 
              sx={{ 
                mb: 4, 
                textAlign: 'center',
                fontFamily: '"Press Start 2P", monospace',
                fontSize: { xs: '1.2rem', sm: '1.5rem' },
              }}
            >
              📬 CAIXA POSTAL
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                textAlign: 'center',
                fontFamily: 'monospace',
                color: 'text.secondary',
              }}
            >
              ✨ Use o formulário no rodapé para enviar uma mensagem! ✨
            </Typography>
          </Box>
        )}
      </Container>
      
      <MailboxFooter />
    </ThemeProvider>
  );
}

export default App;