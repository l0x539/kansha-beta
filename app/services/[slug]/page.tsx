'use client'
import Service from '@/components/Service';

export default function Discovery({ params: {slug} }: { params: { slug: 'discovery' | 'development' | 'team' | 'design' | 'services' } }) {
  console.log(slug);
  
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

export const dynamic = 'force-static';