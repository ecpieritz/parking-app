import { useState } from 'react';
import Header from "@/components/header";
import Menu from "@/components/menu";
import EntranceForm from "@/components/entranceForm";

export default function Home() {
  const [isMainVisible, setIsMainVisible] = useState(true);

  const toggleMainVisibility = () => {
    setIsMainVisible(!isMainVisible);
  };

  return (
    <>
      <Header onToggleMain={toggleMainVisibility} />

      {isMainVisible && (
        <main className={`flex flex-col items-center justify-between py-12`}>
          <Menu />
          <EntranceForm />
        </main>
      )}
    </>
  );
}