import { useState } from 'react';
import { Box, Button, TextField, Typography, CircularProgress } from '@mui/material';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

export type RegisterClientRequest = {
  name: string;
  email: string;
  phone: string;
};

const RegisterClient = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    setLoading(true);

    const registerRequest: RegisterClientRequest = {
      name,
      email,
      phone,
    };

    try {
      await api.client.registerClient(registerRequest);
      enqueueSnackbar('Registration successful!', { variant: 'success' });
      navigate('/submit-script'); // Redireciona após o sucesso
    } catch (error: any) {
      const message = error.response?.data?.message || 'An error occurred during registration. Please try again.';
      enqueueSnackbar(message, { variant: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '500px',
        margin: '0 auto',
        paddingTop: '50px',
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: '20px' }}>Se cadastre para enviar um roteiro</Typography>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        sx={{ marginBottom: '20px' }}
        required
      />
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        sx={{ marginBottom: '20px' }}
        required
      />
      <TextField
        label="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        fullWidth
        sx={{ marginBottom: '20px' }}
        helperText="Formato: (xx) xxxxx-xxxx"
        required
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleRegister}
        disabled={loading || !name || !email || !phone}
        sx={{ width: '100%' }}
        startIcon={loading ? <CircularProgress size={20} /> : null}
      >
        {loading ? 'Registering...' : 'Register'}
      </Button>
    </Box>
  );
};

export default RegisterClient;
