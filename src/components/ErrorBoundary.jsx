import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useRouteError, Link as RouterLink } from 'react-router-dom';

function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);

  // 确定错误类型和消息
  let errorMessage = '发生了未知错误';
  let errorStatus = '';
  
  if (error.status === 404) {
    errorStatus = '404';
    errorMessage = '页面未找到';
  } else if (error.message) {
    errorMessage = error.message;
    errorStatus = error.status || '';
  }

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: 'center',
          py: 4,
        }}
      >
        <Typography variant="h1" color="error" gutterBottom>
          {errorStatus}
        </Typography>
        <Typography variant="h4" gutterBottom>
          出错了！
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          {errorMessage}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={RouterLink}
          to="/"
          sx={{ mt: 2 }}
        >
          返回首页
        </Button>
      </Box>
    </Container>
  );
}

export default ErrorBoundary;