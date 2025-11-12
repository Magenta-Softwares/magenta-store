export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='min-h-screen flex items-center justify-center'>
      <div className="container px-5">{children}</div>
    </main>
  );
}
