import React from 'react';

const Viewtask = () => {
    return (
      
        <main className="flex-grow-1 p-3" style={{ background: '#f5f7fb' }}>
        <div className="container-fluid">
         
          <div className="row g-3">
         
  
            <div className="col-12 col-lg-12">
            <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap"><h3 class="mb-0">My Task</h3></div>
            <div className="table-responsive shadow-sm rounded bg-white p-3">
                    <table className="table table-bordered align-middle text-center">
                        <thead className="table-light">
                        <tr>
                            <th>S.no</th>
                            <th>Title</th>
                            <th>CreatedBy</th>
                            <th className='text-nowrap'>Assignee Name</th>
                            <th>status</th>
                            <th>priority</th>
                            <th>Start Date</th>
                            <th>Due Date</th>
                            <th className='text-nowrap'>Estimated Hr.</th>
                            <th className='text-nowrap'>Logged Hr.</th>
                            <th>Attachments</th>
                            <th className='text-nowrap'>Created At</th>
                         
                          
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>001</td>
                            <td>Test</td>
                            <td>test</td>
                            <td>test</td>
                            <td>pendimg</td>
                            <td>Low</td>
                            <td>12/2/3</td>
                            <td>12/2/3</td>
                            <td>12 hr</td>
                            <td>12 hr</td>
                            <td><small><a href='' data-bs-toggle="modal" data-bs-target="#viewtaskmodal">View attachments</a></small></td>   
                            <td>12/2/25</td>
                          
                          </tr>  
                          <tr>
                            <td>001</td>
                            <td>Test</td>
                            <td>test</td>
                            <td>8/12/25</td>
                            <td>pendimg</td>
                            <td>Low</td>
                            <td>12/2/3- 12:11am</td>
                            <td>12/2/3- 12:11am</td>
                            <td>12 hr</td>
                            <td>12 hr</td>
                            <td><i className='fa fa-eye'></i></td>
                            <td>12 hr</td>
                          
                          </tr>  
                          <tr>
                            <td>001</td>
                            <td>Test</td>
                            <td>test</td>
                            <td>8/12/25</td>
                            <td>pendimg</td>
                            <td>Low</td>
                            <td>12/2/3- 12:11am</td>
                            <td>12/2/3- 12:11am</td>
                            <td>12 hr</td>
                            <td>12 hr</td>
                            <td><i className='fa fa-eye'></i></td>
                            <td>12 hr</td>
                           
                          </tr>            

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

export default Viewtask;
