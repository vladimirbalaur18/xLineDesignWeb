import ScreenLoader from "./ScreenLoader";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScreenLoader />
      {children}
    </>
  );
}
