export default function ClockInPanel() {
  return (
    <main className="p-4 bg-light min-vh-100">
      <div className="container">
        <h4 className="mb-4">Clock In</h4>

        <div className="card col-md-5">
          <div className="card-body text-center">
            <p className="text-muted">GPS Location Required</p>

            <button className="btn btn-primary btn-lg mb-3">
              Punch In
            </button>

            <div className="alert alert-info">
              Location will be verified against assigned geofence
            </div>
          </div>
        </div>
      </div>
      
    </main>
  );
}
