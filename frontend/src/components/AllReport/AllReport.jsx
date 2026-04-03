import { useState } from "react";
import Navbar from "../Navbar";
import AllReportCards from "./AllReportCards";
import FilterSection from "../FilterSection";

export default function AllReport() {
  const [filters, setFilters] = useState({
    category: "",
    date: "",
    distance: 10,
  });

  return (
    <>
      <Navbar />
      <FilterSection filters={filters} setFilters={setFilters} />
      <AllReportCards filters={filters} />
    </>
  );
}
