import HomePage from '@/components/gui/HomePage';

export default function Home() {
  return (
    <HomePage />
  )
};

export function generateStaticParams() {
  return [
    { slug: 'services' },
    { slug: 'partners' },
    { slug: 'culture' },
    { slug: 'contact' },
  ]
}

export const dynamic = 'force-static';
export const revalidate = false;