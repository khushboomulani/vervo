import React from 'react';

const Bookings = () => {
    return (
        <main className="flex-grow-1 p-3" style={{ background: '#f5f7fb' }}>
        <div className="container-fluid">
         
          <div className="row g-3">
         
  
            <div className="col-12 col-lg-12">
            <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap"><h3 class="mb-0">Bookings</h3><button class="btn btn-outline-primary btn-sm mt-2 mt-md-0" data-bs-toggle="modal" data-bs-target="#exampleModal">Self Bookings</button>
         
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Upload Tickets</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input type='file' />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
            </div>
          
            <div className="table-responsive shadow-sm rounded bg-white p-3">
                    <table className="table table-bordered align-middle text-center">
                        <thead className="table-light">
                        <tr>
                            <th>S.no</th>
                            <th>Bookings Method</th>
                            <th>Docs</th>
                            <th>Vendor Id</th>
                            <th>Booking Cost</th>
                            <th>Status</th>
                           
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>001</td>
                            <td>InHouse</td>
                            <td><small><a href='' data-bs-toggle="modal" data-bs-target="#viewtaskmodal">View attachments</a></small></td>  
                            <td>33</td>
                            <td>1200</td>
                            <td><span class="badge bg-warning text-dark">Pending</span></td> </tr>  
                            <tr>
                            <td>001</td>
                            <td>InHouse</td>
                            <td><small><a href='' data-bs-toggle="modal" data-bs-target="#viewtaskmodal">View attachments</a></small></td>  
                            <td>33</td>
                            <td>1200</td>
                            <td><span class="badge bg-warning text-dark">Pending</span></td> </tr>           

                            </tbody>
                            </table>
                            </div>   
                    </div>
                    </div>
                    </div>
                      {/* MODAL 3 */}
                      <div className="modal fade" id="viewtaskmodal">
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content p-3">
                            <div className="modal-header">
                              <h5 className="modal-title">Attachments</h5>
                              <button className="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div className="modal-body">
                              <p>Lorum</p>
                             
                            </div>
                            <div className="modal-footer">
                              <button className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <button className="btn btn-danger">Delete</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </main>
                    
    );
}

export default Bookings;
