import Awards from '@/components/Awards';
import Competition from '@/components/Competition';
import HowTo from '@/components/HowTo';
import PageHeader from '@/components/PageHeader';

export default function Page() {
  return (
    <main className="flex w-full flex-col items-center">
      <PageHeader />
      <HowTo />
      <Awards />
      <Competition />
    </main>
  );
}
