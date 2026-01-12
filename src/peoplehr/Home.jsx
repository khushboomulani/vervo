// src/components/Home.jsx
import React, { useState, useEffect } from 'react';
import { FaUserTie, FaCalendarCheck, FaUmbrellaBeach } from 'react-icons/fa'; // icons


export default function Home() {
  const [time, setTime] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const monthName = time.toLocaleString(undefined, { month: 'long' });
  const year = time.getFullYear();
  const today = time.getDate();

  const buildCalendar = () => {
    const d = new Date(year, time.getMonth(), 1);
    const firstDay = d.getDay();
    const daysInMonth = new Date(year, time.getMonth() + 1, 0).getDate();
    const rows = [];
    let cells = [];

    for (let i = 0; i < firstDay; i++) cells.push(null);
    for (let day = 1; day <= daysInMonth; day++) {
      cells.push(day);
      if (cells.length === 7) {
        rows.push(cells);
        cells = [];
      }
    }
    while (cells.length > 0 && cells.length < 7) cells.push(null);
    if (cells.length) rows.push(cells);
    return rows;
  };

  const calendar = buildCalendar();

  // Menu items below main header
  const topMenus = [
    { name: 'HR', icon: <FaUserTie size={32} />, color: '#007bff' },
    { name: 'Attendance', icon: <FaCalendarCheck size={32} />, color: '#28a745' },
    { name: 'Leave Menu', icon: <FaUmbrellaBeach size={32} />, color: '#ffc107' },
  ];

  return (
    <main className="flex-grow-1 p-3" style={{ background: '#f5f7fb' }}>
      <div className="container-fluid">
        {/* 🔹 TOP MENU ICONS SECTION */}
        <div className="row g-3 mb-4 text-center">
          {topMenus.map((menu) => (
            <div key={menu.name} className="col-12 col-md-4">
              <div
                className="card p-3 shadow-sm border-0 hover-effect"
                style={{ cursor: 'pointer' }}
                onClick={() => alert(`${menu.name} clicked`)}
              >
                <div className="d-flex flex-column align-items-center">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center mb-2"
                    style={{
                      width: '70px',
                      height: '70px',
                      background: `${menu.color}15`,
                      color: menu.color,
                    }}
                  >
                    {menu.icon}
                  </div>
                  <h6 className="mb-0">{menu.name}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🔹 MAIN DASHBOARD CONTENT */}
        <div className="row g-3">
          <div className="col-12 col-lg-8">
         

            <div className="card p-3">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h6>Calendar — {monthName} {year}</h6>
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => setSelectedDate(null)}
                >
                  Today
                </button>
              </div>

              <table className="w-100 text-center" style={{ borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    {days.map((d) => (
                      <th key={d} className="text-muted small p-1">{d}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {calendar.map((row, i) => (
                    <tr key={i}>
                      {row.map((d, j) => (
                        <td
                          key={j}
                          className={`border p-2 ${d === today ? 'bg-light' : ''}`}
                          onClick={() => d && setSelectedDate(d)}
                        >
                          {d || ''}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>

              {selectedDate && (
                <div className="mt-2">
                  Selected: <strong>{selectedDate} {monthName} {year}</strong>
                </div>
              )}
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="card p-3 mb-3">
              <div className="d-flex justify-content-between align-items-center">
                <h6>Live Clock</h6>
                <small className="text-muted">{time.toLocaleDateString()}</small>
              </div>
              <div className="text-center my-3">
                <div style={{ fontSize: 28, fontWeight: 600 }}>{time.toLocaleTimeString()}</div>
                <div className="text-muted">
                  {time.toLocaleString(undefined, { weekday: 'long' })}
                </div>
              </div>
            </div>

            <div className="card p-3 mb-3">
              <h6>Total Working Hours</h6>
              <ul className="list-unstyled mt-2"><li className="d-flex justify-content-between mb-1"><span>0 hr 0 min</span></li></ul>
              </div>

            <div className="card p-3">
              <h6>Timesheet Summary</h6>
              <ul className="list-unstyled mt-2"><li className="d-flex justify-content-between mb-1"><span>Pending</span><span className="badge bg-secondary">2</span></li><li className="d-flex justify-content-between mb-1"><span>Approved</span><span className="badge bg-secondary">2</span></li><li className="d-flex justify-content-between mb-1"><span>Rejected</span><span className="badge bg-secondary">2</span></li></ul>
            </div>
          </div>
        </div>
      </div>

      {/* Small hover effect for cards */}
      <style>{`
        .hover-effect:hover {
          transform: translateY(-3px);
          transition: 0.2s ease;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
      `}</style>
    </main>
  );
}
