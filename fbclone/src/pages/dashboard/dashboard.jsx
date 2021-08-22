const Dashboard = () => {
    const handleClick = (e) => {
        localStorage.setItem("jwt-token", null);
        window.location = "/";
    }
    return(
        <div className="dashboard-container">
            Dashboard
            <div className="logout-btn">
                <button onClick={handleClick}>Logout</button>
            </div>
        </div>
    );
}

export default Dashboard;