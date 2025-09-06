import ScreenLoader from "./components/ScreenLoader";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScreenLoader />
      {children}
    </>
  );
}
