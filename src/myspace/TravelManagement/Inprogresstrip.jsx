import React from 'react';

const Inprogress = () => {
    return (
        <main className="flex-grow-1 p-3" style={{ background: '#f5f7fb' }}>
        <div className="container-fluid">
        <div className="row g-3">
            <div className="col-12 col-lg-12">
            <h4>Trip Progress</h4>
              <div className="card p-3">
              <ul class="timeline">
    <li class="timeline-item">
      <span class="timeline-time">12 Dec 2025, 09:00 AM</span>
      <h6 class="timeline-title">Depart from Office</h6>
      <p class="timeline-desc">Start of official trip to Project Alpha.</p>
    </li>

    <li class="timeline-item">
      <span class="timeline-time">12 Dec 2025, 12:00 PM</span>
      <h6 class="timeline-title">Reach Hotel</h6>
      <p class="timeline-desc">Check-in and rest before meeting.</p>
      <div class="timeline-actions">
        <button class="btn btn-sm btn-primary">Upload Document</button>
        <button class="btn btn-sm btn-warning">Reschedule</button>
        <button class="btn btn-sm btn-danger">Cancel</button>
      </div>
    </li>

    <li class="timeline-item">
      <span class="timeline-time">12 Dec 2025, 03:00 PM</span>
      <h6 class="timeline-title">Project Meeting</h6>
      <p class="timeline-desc">Discussion on project deliverables.</p>
      <div class="timeline-actions">
        <button class="btn btn-sm btn-primary">Upload Minutes</button>
      </div>
    </li>
    
  </ul>
              </div>
              </div>
              </div>
                    </div>
                 
                    </main>
                    
    );
}

export default Inprogress;
