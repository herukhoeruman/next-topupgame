import OverviewContent from "@/components/organisme/OverviewContent";
import Sidebar from "@/components/organisme/Sidebar";

export default function index() {
  return (
    <section className="overview overflow-auto">
      <Sidebar activeMenu="overview" />
      <OverviewContent />s
    </section>
  );
}
