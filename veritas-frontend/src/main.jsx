import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {PrivyProvider} from '@privy-io/react-auth';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrivyProvider
      appId="cmbl59nch01ivjx0nr2u86pj1"
      config={{
        appearance: {
          theme: 'dark',
          accentColor: '#6C5CE7',
          logo: 'https://your-logo-url.com/logo.png', // You can add your logo URL here
          walletList: ['phantom', 'backpack', 'detected_ethereum_wallets'],
        },
        // Configure external wallets
        externalWallets: {
          // WalletConnect is required for many wallets
          walletConnect: {
            // Your WalletConnect project ID
            projectId: 'YOUR_WALLETCONNECT_PROJECT_ID',
          },
        },
        // We'll customize the login methods to only show wallet options
        loginMethods: ['wallet'],
        // And we'll customize the wallet list to show Phantom and Backpack
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
      }}
    >
      <App />
    </PrivyProvider>
  </React.StrictMode>,
);
