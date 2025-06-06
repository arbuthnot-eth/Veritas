import './App.css'
import {usePrivy} from '@privy-io/react-auth';

function App() {
  const {ready, authenticated, user, login, logout} = usePrivy();

  return (
    <div className="container">
      <div className="card">
        <h1>Veritas</h1>
        <p>Your gateway to Web3.</p>
        {ready && authenticated ? (
          <div>
            <p>Welcome, {user.wallet?.address || 'user'}!</p>
            <button onClick={logout}>Log Out</button>
          </div>
        ) : (
          <button onClick={login}>Connect Wallet</button>
        )}
      </div>
    </div>
  )
}

export default App
