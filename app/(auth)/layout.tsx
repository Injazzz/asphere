import BackgroundBeams from "@/components/ui/bg-beams";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex flex-col items-center justify-center h-screen w-full bg-gradient-to-tr from-sky-600 dark:from-sky-900 from-10% to-white dark:to-black to-85%'>
      <BackgroundBeams />
      {children}
    </div>
  );
}
