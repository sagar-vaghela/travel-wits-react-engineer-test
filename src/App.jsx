import Dashboard from './components/Dashboard';
import { Global } from '@emotion/react'
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Dashboard />
      <Global
        styles={{
            body: {
            margin: 0,
            padding: 0,
            width:"100%",
            height:"100%",
            background:"#E5E5E5",
            },
            
        }}
    />
    </GlobalProvider>
  );
}

export default App;
