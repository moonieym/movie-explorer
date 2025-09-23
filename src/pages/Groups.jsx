import groups from '../data/groupsData' // o la ruta que uses

function Groups() {
  return (
    <section className="group-section">
      <h2>Grupos disponibles</h2>
      <div className="group-grid">
        {groups.map(group => (
          <div key={group.name} className="group-card">
            <h3>{group.name}</h3>
            <p><strong>Debut:</strong> {group.debut}</p>
            <p><strong>Company:</strong> {group.company}</p>
            <p><strong>Members:</strong> {group.members.join(', ')}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Groups