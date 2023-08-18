'use client'
import Service from '@/components/Service';
import { useRouter } from 'next/navigation';

export default function Discovery({ params: {slug} }: { params: { slug: 'discovery' | 'development' | 'team' | 'design' | 'services' } }) {
  
  return (
    <Service />
  );
};

export function generateStaticParams() {
  return [
    { slug: 'discovery' },
    { slug: 'development' },
    { slug: 'team' },
    { slug: 'design' },
    { slug: 'services' },
  ]
}