import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Menu() {
  const router = useRouter();

  // Função para verificar se a URL corresponde ao href
  const isLinkActive = (href) => {
    return router.pathname === href;
  };

  return (
    <div className="pp-menu flex justify-between mb-12">
      <Link className={isLinkActive('/') ? 'active py-3' : 'py-3'} href='/'>Entrada</Link>
      <Link className={isLinkActive('/saida') ? 'active py-3' : 'py-3'} href='/saida'>Saída</Link>
    </div>
  );
}
