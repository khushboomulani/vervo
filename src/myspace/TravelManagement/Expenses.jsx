import React from 'react';

const Expenses = () => {
    return (
        <main className="flex-grow-1 p-3" style={{ background: '#f5f7fb' }}>
        <div className="container-fluid">
         
          <div className="row g-3">
         
  
            <div className="col-12 col-lg-12">
            <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap"><h3 class="mb-0">Expenses </h3><button class="btn btn-outline-primary btn-sm mt-2 mt-md-0" data-bs-toggle="modal" data-bs-target="#expenseModal">Add Expense</button>
            <div class="modal fade" id="expenseModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">

      <div class="modal-header">
        <h5 class="modal-title">Expense Claim</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

     
      <div class="modal-body">

        <div class="row g-3">
          <div class="col-md-6">
            <label class="form-label">Expense Type</label>
            <select class="form-select">
              <option>Select</option>
              <option>Hotel</option>
              <option>Taxi</option>
              <option>Meals</option>
              <option>Flight</option>
            </select>
          </div>

          <div class="col-md-6">
            <label class="form-label">Expense Date</label>
            <input type="date" class="form-control" />
          </div>

          <div class="col-md-6">
            <label class="form-label">Amount</label>
            <input type="number" class="form-control" placeholder="Enter amount" />
          </div>

          <div class="col-md-6">
            <label class="form-label">Payment Mode</label>
            <select class="form-select">
              <option>Select</option>
              <option>Cash</option>
              <option>Card</option>
              <option>UPI</option>
            </select>
          </div>

          <div class="col-12">
            <label class="form-label">Description</label>
            <textarea class="form-control" rows="2" placeholder="Expense description"></textarea>
          </div>

          <div class="col-12">
            <label class="form-label">Upload Receipt</label>
            <input type="file" class="form-control" />
            <small class="text-muted">PDF, JPG, PNG allowed</small>
          </div>
        </div>

      </div>

      <div class="modal-footer">
        <button class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button class="btn btn-success">Add Expense</button>
      </div>

    </div>
  </div>
</div>

            </div>
            
            <div class="card">
    <div class="card-body p-0">
      <div class="table-responsive">
        <table class="table table-bordered mb-0">
          <thead class="table-light">
            <tr>
              <th>Expense ID</th>
              <th>Description</th>
              <th>Date</th>
              <th>Total Amount</th>
              <th>Advance Reconciliation</th>
              <th>Net Payable</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>EXP001</td>
              <td>Hotel Stay</td>
              <td>12/12/25</td>
              <td>$120</td>
              <td><span class="badge bg-warning text-dark">Pending</span></td>
              <td>$50</td>
              <td>
                <button class="btn btn-sm btn-primary">View</button>&nbsp;
                <button class="btn btn-sm btn-success">Reconcile</button>
              </td>
            </tr>
            <tr>
              <td>EXP002</td>
              <td>Taxi Receipts</td>
              <td>12/12/25</td>
              <td>$40</td>
              <td><span class="badge bg-success">Complete</span></td>
              <td>$0</td>
              <td>
                <button class="btn btn-sm btn-primary">View</button>
              </td>
            </tr>
            <tr>
              <td>EXP003</td>
              <td>Meals</td>
              <td>13/12/25</td>
              <td>$30</td>
              <td><span class="badge bg-warning text-dark">Pending</span></td>
              <td>$30</td>
              <td>
                <button class="btn btn-sm btn-primary">View</button>&nbsp;
                <button class="btn btn-sm btn-success">Reconcile</button>
              </td>
            </tr>
          
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="card mt-3 p-3">
    <div class="row">
      <div class="col-md-4">
        <strong>Total Expenses:</strong> $190
      </div>
      <div class="col-md-4">
        <strong>Total Advance:</strong> $90
      </div>
      <div class="col-md-4">
        <strong>Net Payable:</strong> $100
      </div>
    </div>
  </div>

  <div class="d-flex justify-content-end mt-3 gap-2">
    <button class="btn btn-secondary">Preview All</button>
    <button class="btn btn-success">Submit Expenses</button>
  </div>

 
      </div>
      </div>
      </div>
      </main>
    );
}

export default Expenses;
