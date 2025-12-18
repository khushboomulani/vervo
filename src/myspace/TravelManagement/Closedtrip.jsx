import React from 'react';

const Closetrip = () => {
    return (
        <main className="flex-grow-1 p-3" style={{ background: '#f5f7fb' }}>
        <div className="container-fluid">
         
          <div className="row g-3">
         
  
            <div className="col-12 col-lg-12">
            <h4>Closed Trip</h4>
            <div className="card shadow-sm border-0 rounded-3">
                <div className='card-body'>
    <div className="card-body p-0">
      <div className="table-responsive">
        <table className="table table-bordered mb-0">
          <thead className="table-light">
            <tr>
              <th>Checklist Item</th>
              <th>Uploaded Document</th>
              <th>Status</th>
              <th>Validation Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Flight Ticket</td>
              <td><input type="file" class="form-control form-control-sm" /></td>
              <td><span class="badge bg-warning text-dark">Pending</span></td>
              <td>Please upload the boarding pass</td>
              <td>
                <button class="btn btn-sm btn-primary">Preview</button>
              </td>
            </tr>
            <tr>
              <td>Hotel Bill</td>
              <td><input type="file" class="form-control form-control-sm" /></td>
              <td><span class="badge bg-success">Uploaded</span></td>
              <td>Validated</td>
              <td>
                <button class="btn btn-sm btn-primary">Preview</button>
              </td>
            </tr>
            <tr>
              <td>Taxi Receipts</td>
              <td><input type="file" class="form-control form-control-sm" /></td>
              <td><span class="badge bg-danger">Missing</span></td>
              <td>Receipt not uploaded</td>
              <td>
                <button class="btn btn-sm btn-primary">Preview</button>
              </td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
    </div>
  </div>

 
  <div className="d-flex justify-content-end mt-3 gap-2">
    <button className="btn btn-secondary">Preview All</button>
    <button className="btn btn-success">Submit for Closure</button>
  </div>
      </div>
      </div>
      </div>
      </main>
    );
}

export default Closetrip;
