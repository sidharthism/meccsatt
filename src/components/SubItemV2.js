function SubItemV2() {
  return (
    <div className="sub-item sub-item-v2">
      <div className="sub-item-number">
        <h2 className="text-center text-light">#</h2>
      </div>
      <div className="sub-item-content">
        <p className="text-start">
          C4A <br />
          <span>8:30 to 3:30</span>
        </p>
      </div>
      <a
        href="http://moodle.mec.ac.in/mod/attendance/view.php?id=9902"
        target="_blank"
        rel="noreferrer"
      >
        <div className="sub-item-attendance">
          <i className="bi bi-people-fill icon" />
        </div>
      </a>
      <a
        href="http://moodle.mec.ac.in/mod/bigbluebuttonbn/view.php?id=9901"
        target="_blank"
        rel="noreferrer"
      >
        <div className="sub-item-link">
          <i className="bi bi-link-45deg icon" />
        </div>
      </a>
    </div>
  );
}
export default SubItemV2;
