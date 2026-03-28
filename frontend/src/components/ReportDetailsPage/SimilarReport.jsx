import { useState, useEffect } from "react";
import { MapPin, MoveRight } from "lucide-react";
import { cn } from "../../lib/utils.js";
import { Link } from "react-router-dom";

export default function SimilarReport() {
  const [allReports, setAllReport] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "http://192.168.1.8:8080/reports/allReports?status=open",
        );
        if (!res.ok) {
          throw new Error("Failed");
        }
        const data = await res.json();
        setAllReport(data.allReports);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="px-3 py-10 sm:px-5 md:px-12 bg-[#F3F2F2]">
      <div className="md:p-4 bg-white rounded-xl">
        <div className="mb-6">
          <h4 className="text-lg font-medium md:text-xl">
            Similar Items Nearby
          </h4>
          <p className="text-sm text-gray-500 md:text-[16px]">
            People are also looking for this electronics
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-2 no-scrollbar">
          {allReports.map((report) => (
            <div
              key={report._id}
              className="min-w-65 sm:min-w-70 md:min-w-75 lg:min-w-[320px] shrink-0 overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={report.image}
                  alt="Report"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="space-y-2 p-4">
                <h6 className="text-lg font-semibold">{report.name}</h6>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin size={16} />
                  <span>
                    {report.location.city}, {report.location.area}
                  </span>
                </div>

                <div className="flex gap-2">
                  <span
                    className={cn(
                      "rounded-full px-3 py-1 text-xs font-medium",
                      report.reportType === "lost"
                        ? "bg-red-500 text-white"
                        : "bg-green-500 text-white",
                    )}
                  >
                    {report.reportType}
                  </span>

                  <span
                    className={cn(
                      "rounded-full px-3 py-1 text-xs font-medium",
                      report.status === "closed"
                        ? "bg-gray-600 text-white"
                        : "bg-yellow-500 text-white",
                    )}
                  >
                    {report.status === "closed" ? "Closed" : "Open"}
                  </span>
                </div>

                <hr className="text-gray-300" />

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">
                    {new Date(report.dateTime).toLocaleTimeString("en-IN", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                    , {new Date(report.dateTime).getFullYear()}
                  </span>

                  <Link to={`/lostItem/${report._id}`}>
                    <span className="flex items-center gap-1 font-medium text-[#3358D4] hover:text-blue-400">
                      Details <MoveRight size={16} />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
