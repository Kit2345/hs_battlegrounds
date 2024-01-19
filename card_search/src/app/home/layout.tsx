import Searchbar from "@/app/ui/searchbar/searchbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Searchbar />
      {children}
    </>
  );
}
