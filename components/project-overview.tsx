import NextLink from "next/link";
export const ProjectOverview = () => {
  return (
    <div className="flex flex-col items-center justify-end">
      <h1 className="text-3xl font-semibold mb-4">Skylark AI</h1>
      <p className="text-center">
        This starter project uses <Link href="https://groq.com/">Groq</Link>{" "}
        with the <Link href="https://sdk.vercel.ai/docs">AI SDK</Link>
        . Build by Priyanshu
      </p>
    </div>
  );
};

const Link = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <NextLink
      target="_blank"
      className="text-blue-500 hover:text-blue-600 transition-colors duration-75"
      href={href}
    >
      {children}
    </NextLink>
  );
};
