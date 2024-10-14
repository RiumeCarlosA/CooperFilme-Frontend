import React, { useState } from 'react';
import { Box, Button, Typography, Input, TextField } from '@mui/material';
import { enqueueSnackbar } from 'notistack';
import Card from '../../components/Card';
import CustomDialog from '../../components/CustomDialog';
import { ScriptEndpoint } from '../../services/endpoints/script';

function UploadScript({ setScripts, handleClose }: { setScripts: React.Dispatch<React.SetStateAction<{ id: string; title: string; url: string; }[]>>, handleClose: () => void }) {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const scriptEndpoint = new ScriptEndpoint();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      enqueueSnackbar('Selecione o roteiro para enviar.', { variant: 'warning' });
      return;
    }

    try {
      const response = await scriptEndpoint.uploadScript(file, title, email);
      enqueueSnackbar('Roteiro enviado com sucesso!', { variant: 'success' });
      setScripts((prev) => [...prev, { id: response.data.id, title: file.name, url: response.data.url }]);
      handleClose();
    } catch (error) {
      enqueueSnackbar('Erro ao enviar o roteiro, tente novamente.', { variant: 'error' });
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
        paddingTop: '8px',
      }}
    >
    <TextField
        label="Email"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ marginBottom: '20px' }}
    />
      <TextField
        label="Script Title"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ marginBottom: '20px' }}
      />
      <Input
        type="file"
        onChange={handleFileChange}
        sx={{ marginBottom: '20px' }}
        inputProps={{ accept: '.pdf,.doc,.docx' }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleUpload}
      >
        Upload Script
      </Button>
    </Box>
  );
}

function SubmitScript() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scripts, setScripts] = useState<Array<{ id: string, title: string, url: string }>>([]);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Card sx={{ width: '100%' }}>
      <Typography sx={{ fontSize: '20px', alignSelf: 'flex-start', padding: '8px', gap: '16px', fontWeight: 600 }}>Scripts</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '8px' }}>
        <Box sx={{ width: '70%' }}>
          {scripts.map((script) => (
            <Box
              key={script.id}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                backgroundColor: '#fff',
              }}
            >
              <a href={script.url} target="_blank" rel="noopener noreferrer">
                <Typography variant="body1" sx={{ color: '#0a66c2', fontWeight: 'bold' }}>
                  {script.title}
                </Typography>
              </a>
            </Box>
          ))}
        </Box>
          <Button
            variant="contained"
            onClick={handleOpenModal}
            color="primary"
          >
            Adicione um novo roteiro
          </Button>

        <CustomDialog isOpen={isModalOpen} onClose={handleCloseModal} title="Upload Script">
          <UploadScript setScripts={setScripts} handleClose={handleCloseModal} />
        </CustomDialog>
      </Box>
    </Card>
  );
}

export default SubmitScript;
