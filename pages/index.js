import dynamic from 'next/dynamic';
const EchoTraceHomePage = dynamic(() => import('../components/EchoTraceHomePage'), { ssr: false });

export default function Home() {
  return <EchoTraceHomePage />;
}
