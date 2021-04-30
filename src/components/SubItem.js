function SubItem({
  day,
  id,
  subject,
  link,
  attendance,
  time,
  isCurrentPeriod,
}) {
  return (
    <div
      className={
        `sub-item ${day}-text ${day}-border` +
        " " +
        (isCurrentPeriod ? `${day}-current-period` : "")
      }
    >
      <div className={`sub-item-number ${day}-bg`}>
        <h2 className="text-center text-light">{id}</h2>
      </div>
      <div className="sub-item-content">
        <p className={"text-start"}>
          {subject} <br />
          <span>{time}</span>
        </p>
      </div>
      {attendance && (
        <a href={attendance} target="_blank" rel="noreferrer">
          <div className={`sub-item-attendance ${day}-bg`}>
            <i className="bi bi-people-fill icon" />
          </div>
        </a>
      )}
      {link && (
        <a href={link} target="_blank" rel="noreferrer">
          <div className={`sub-item-link ${day}-bg`}>
            <i className="bi bi-link-45deg icon" />
          </div>
        </a>
      )}
    </div>
  );
}
export default SubItem;
