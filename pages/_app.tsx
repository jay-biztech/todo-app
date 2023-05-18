import { QueryClient, QueryClientProvider } from 'react-query';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';

import type { AppProps } from 'next/app';
import Link from 'next/link';
import Button from '../components/atoms/Button';
import { ButtonType, Size } from '../components/atoms/Button/types';

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mt-3">
        <Link href={'/'}>
          <Button
            title="Taskade"
            size={Size.Large}
            buttonType={ButtonType.Primary}
          />
        </Link>
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
