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
      <div className="sub-item-attendance">
        <a
          href="http://moodle.mec.ac.in/mod/attendance/view.php?id=9902"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-people-fill icon" />
        </a>
      </div>
      <div className="sub-item-link">
        <a
          href="http://moodle.mec.ac.in/mod/bigbluebuttonbn/view.php?id=9901"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-link-45deg icon" />
        </a>
      </div>
    </div>
  );
}
export default SubItemV2;
