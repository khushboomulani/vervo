import React from 'react';

const Viewmember = () => {
    return (
        <main className="flex-grow-1 p-3" style={{ background: '#f5f7fb' }}>
        <div className="container-fluid">
         
          <div className="row g-3">
         
  
            <div className="col-12 col-lg-12">
            <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap"><h3 class="mb-0">View Member</h3><button class="btn btn-outline-primary btn-sm mt-2 mt-md-0">Add member</button></div>
        <div class="profile-wrapper">
        <div class="profile-left">
          <img src="/src/assets/images/dummy-pic.png" alt="Member Photo" />
          <h3>Ashish </h3>
          <h4>Marketing Lead</h4>
        </div>
    
        
        <div class="profile-right">
          <table class="details-table">
            <tr>
              <th>Lead ID:</th>
              <td>LD1024</td>
            </tr>
            <tr>
              <th>Working Hours:</th>
              <td>9:00 AM – 6:00 PM</td>
            </tr>
            <tr>
              <th>Department ID:</th>
              <td>DPT05</td>
            </tr>
            <tr>
              <th>Description:</th>
              <td>Leads the marketing team and oversees all promotional activities, campaign strategies, and brand growth initiatives.</td>
            </tr>
            <tr>
              <th>Members:</th>
              <td>7 Team Members</td>
            </tr>
            <tr>
              <th>Created By:</th>
              <td>Ravi Sharma</td>
            </tr>
            <tr>
              <th>Created At:</th>
              <td>15 Aug 2025</td>
            </tr>
            <tr>
              <th>Attendance:</th>
              <td>200</td>
            </tr>
            <tr>
              <th>Task Performed:</th>
              <td>20</td>
            </tr>
          </table>
    
          <div class="btn-container">
            <button class="btn btn-edit">✏️ Edit</button>
            <button class="btn btn-delete text-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">🗑️ Delete</button>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
      <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0 shadow">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title" id="deleteModalLabel">Confirm Deletion</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-center">
          <p class="mb-0 fs-5">Are you sure you want to delete this member?</p>
        </div>
        <div class="modal-footer justify-content-center">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-danger">Yes, Delete</button>
        </div>
      </div>
    </div>
  </div>
      </main>
      
    );
}

export default Viewmember;
