import React, { useState } from "react";

const Draft = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showDraftOnly, setShowDraftOnly] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const recordsPerPage = 5;

  // Sample data
  const data = [
    { id: 1, name: "Doe", designation: "Manager", hours: "8 hr", extra: "0", date: "12/9/25", approver: "Test", project: "Banner", status: "Done" },
    { id: 2, name: "Jane", designation: "Designer", hours: "7 hr", extra: "1", date: "12/9/25", approver: "Test", project: "Poster", status: "Pending" },
    { id: 3, name: "John", designation: "Developer", hours: "8 hr", extra: "2", date: "13/9/25", approver: "Alex", project: "Website", status: "Rejected" },
    { id: 4, name: "Mark", designation: "Editor", hours: "8 hr", extra: "0", date: "14/9/25", approver: "Alex", project: "Video", status: "Done" },
    { id: 5, name: "Sarah", designation: "QA", hours: "8 hr", extra: "1", date: "15/9/25", approver: "Chris", project: "App", status: "Pending" },
    { id: 6, name: "Nina", designation: "Support", hours: "7 hr", extra: "0", date: "16/9/25", approver: "Test", project: "Service", status: "Done" },
    { id: 7, name: "Riya", designation: "Intern", hours: "5 hr", extra: "0", date: "17/9/25", approver: "-", project: "Training", status: "Draft" },
    { id: 8, name: "Amit", designation: "Designer", hours: "6 hr", extra: "0", date: "18/9/25", approver: "-", project: "Flyer", status: "Draft" },
  ];

  // Filter logic
  const filteredData = showDraftOnly ? data.filter((d) => d.status === "Draft") : data;

  const totalPages = Math.ceil(filteredData.length / recordsPerPage);
  const indexOfLast = currentPage * recordsPerPage;
  const indexOfFirst = indexOfLast - recordsPerPage;
  const currentData = filteredData.slice(indexOfFirst, indexOfLast);

  // Checkbox handlers
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const allIds = currentData.map((item) => item.id);
      setSelectedRows((prev) => [...new Set([...prev, ...allIds])]);
    } else {
      setSelectedRows((prev) => prev.filter((id) => !currentData.some((item) => item.id === id)));
    }
  };

  const handleCheckboxChange = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const isAllSelected = currentData.every((item) => selectedRows.includes(item.id));

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <main className="flex-grow-1 p-3" style={{ background: "#f5f7fb", minHeight: "100vh" }}>
      <div className="container-fluid">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
          <h3 className="mb-0">Timesheet Drafts</h3>
          <button
            className="btn btn-outline-primary btn-sm mt-2 mt-md-0" >
           Add to timesheet
          </button>
        </div>

        {/* Table Section */}
        <div className="card shadow-sm border-0 rounded-3">
          <div className="card-body">
            <div className="table-responsive shadow-sm rounded bg-white p-3">
              <table className="table table-bordered table-hover align-middle mb-0">
                <thead className="table-light text-center">
                  <tr>
                    <th>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        checked={isAllSelected}
                        onChange={handleSelectAll}
                      />
                    </th>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Working Hour</th>
                    <th>Extra Hours</th>
                    <th>Date</th>
                    <th>Approver Name</th>
                    <th>Project</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {currentData.length > 0 ? (
                    currentData.map((item, i) => (
                      <tr key={item.id}>
                        <td>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            checked={selectedRows.includes(item.id)}
                            onChange={() => handleCheckboxChange(item.id)}
                          />
                        </td>
                        <td>{indexOfFirst + i + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.designation}</td>
                        <td>{item.hours}</td>
                        <td>{item.extra}</td>
                        <td>{item.date}</td>
                        <td>{item.approver}</td>
                        <td>{item.project}</td>
                        <td>
                          <span
                            className={`badge ${
                              item.status === "Done"
                                ? "bg-success"
                                : item.status === "Pending"
                                ? "bg-warning text-dark"
                                : item.status === "Rejected"
                                ? "bg-danger"
                                : "bg-secondary"
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="10" className="text-muted py-4">
                        No records found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination & Info */}
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-3">
              <small className="text-muted mb-2 mb-md-0">
                Showing {filteredData.length > 0 ? indexOfFirst + 1 : 0}–
                {Math.min(indexOfLast, filteredData.length)} of {filteredData.length} entries
              </small>

              <nav>
                <ul className="pagination pagination-sm mb-0">
                  <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                    <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
                      Prev
                    </button>
                  </li>
                  {[...Array(totalPages)].map((_, i) => (
                    <li key={i} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
                      <button className="page-link" onClick={() => handlePageChange(i + 1)}>
                        {i + 1}
                      </button>
                    </li>
                  ))}
                  <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                    <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Selected Info */}
            {selectedRows.length > 0 && (
              <div className="mt-3 text-muted small">
                ✅ {selectedRows.length} record(s) selected.
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Draft;
