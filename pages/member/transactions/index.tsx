import Sidebar from "@/components/organisme/Sidebar";
import TransactionContent from "@/components/organisme/TransactionContent";

export default function Transaction() {
  return (
    <section className="transactions overflow-auto">
      <Sidebar activeMenu="transactions" />
      <TransactionContent />
    </section>
  );
}
