import { QueryClient, QueryClientProvider } from 'react-query';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';

import type { AppProps } from 'next/app';
import Link from 'next/link';

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mt-3">
        <Link href={'/'}>Back to Home</Link>
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
