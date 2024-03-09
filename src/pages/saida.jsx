import Header from "@/components/header";
import LeaveForm from "@/components/leaveForm";
import Menu from "@/components/menu";

export default function Saida() {
  return (
    <>
      <Header />

      <main
        className={`flex flex-col items-center justify-between py-12`}
      >
        <Menu />

        <LeaveForm />

      </main>
    </>
  );
}