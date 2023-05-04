import Tab from "./Tab";

interface SectionProps {
  title?: string | null;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => (
  <>
    <div className="flex items-center bg-gradient-to-r from-primary/10 w-fit">
      <Tab width={14} height={60} />
      <h1 className="text-2xl m-0 pl-5 text-primary">{title}</h1>
    </div>
    {children}
  </>
);

export default Section;
