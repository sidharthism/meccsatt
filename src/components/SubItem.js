function SubItem({ day, id, subject, link, attendance, time }) {
  return (
    <div className={`sub-item ${day}-text ${day}-border`}>
      <div className={`sub-item-number ${day}-bg`}>
        <h2 className="text-center text-light">{id}</h2>
      </div>
      <div className="sub-item-content">
        <p className="text-start">
          {subject} <br />
          <span>{time}</span>
        </p>
      </div>
      {attendance && (
        <div className={`sub-item-attendance ${day}-bg`}>
          <a href={attendance} target="_blank" rel="noreferrer">
            <i className="bi bi-people-fill icon" />
          </a>
        </div>
      )}
      {link && (
        <div className={`sub-item-link ${day}-bg`}>
          <a href={link} target="_blank" rel="noreferrer">
            <i className="bi bi-link-45deg icon" />
          </a>
        </div>
      )}
    </div>
  );
}
export default SubItem;
